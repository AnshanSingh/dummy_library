from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token
from flask_jwt_extended import jwt_required, get_jwt_identity
from dotenv import load_dotenv
import os
import razorpay
import hmac, hashlib


load_dotenv()


import mysql.connector
import bcrypt

app = Flask(__name__)
# CORS(app)
# Allow for both port
CORS(app, origins=[
    "http://localhost:5173",
    "http://localhost:5174"
])

app.config["JWT_SECRET_KEY"] = "super-secret-key"
jwt = JWTManager(app)

# MySQL Connection
db = mysql.connector.connect(
    host=os.getenv("DB_HOST"),
    user=os.getenv("DB_USER"),
    password=os.getenv("DB_PASSWORD"),
    database=os.getenv("DB_NAME")
)

cursor = db.cursor(dictionary=True)

client = razorpay.Client(auth=(
    os.getenv("RAZORPAY_KEY_ID"),
    os.getenv("RAZORPAY_KEY_SECRET")
))


@app.route("/")
def home():
    return "Backend connected to MySQL successfully!"


# REGISTER USER
@app.route("/register", methods=["POST"])
def register():
    data = request.json

    name = data["name"]
    email = data["email"]
    password = data["password"]

    # Hash password
    hashed_password = bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt())

    query = "INSERT INTO users (name, email, password) VALUES (%s, %s, %s)"
    cursor.execute(query, (name, email, hashed_password))
    db.commit()

    return jsonify({"message": "User registered successfully!"})



@app.route("/login", methods=["POST"])
def login():
    data = request.json

    email = data["email"]
    password = data["password"]

    query = "SELECT * FROM users WHERE email = %s"
    cursor.execute(query, (email,))
    user = cursor.fetchone()

    

    #  FIRST CHECK IF USER EXISTS
    if not user:
        return jsonify({"message": "User not found"}), 404

    stored_password = user["password"]

    print(type(stored_password))
    print(stored_password)

    #  NOW SAFE TO CHECK PASSWORD
    if bcrypt.checkpw(password.encode("utf-8"),stored_password.encode("utf-8")):
    # if bcrypt.checkpw(password.encode("utf-8"), stored_password):
        access_token = create_access_token(identity=str(user["id"]))

        return jsonify({
            "message": "Login successful!",
            "token": access_token
        })

    return jsonify({"message": "Invalid password"}), 401

@app.route("/dashboard", methods=["GET"])
@jwt_required()
def dashboard():
    user_id = get_jwt_identity()

    cursor.execute("SELECT id, name, email FROM users WHERE id = %s", (user_id,))
    user = cursor.fetchone()

    if not user:
        return jsonify({"message": "User not found"}), 404

    return jsonify({
        "id": user["id"],
        "name": user["name"],
        "email": user["email"]
    })

@app.route("/courses", methods=["GET"])
def get_courses():
    cursor.execute("SELECT * FROM courses")
    return jsonify(cursor.fetchall())


@app.route("/create-order", methods=["POST"])
@jwt_required()
def create_order():
    data = request.json
    course_id = data.get("course_id")

    cursor.execute("SELECT * FROM courses WHERE id=%s", (course_id,))
    course = cursor.fetchone()

    if not course:
        return jsonify({"message": "Course not found"}), 404

    order = client.order.create({
        "amount": course["price"] * 100,  
        "currency": "INR"
    })

    return jsonify({
        "order_id": order["id"],
        "amount": order["amount"]
    })

@app.route("/verify-payment", methods=["POST"])
@jwt_required()
def verify_payment():
    user_id = get_jwt_identity()
    data = request.json

    order_id = data["order_id"]
    payment_id = data["payment_id"]
    signature = data["signature"]
    course_id = data["course_id"]

    generated = hmac.new(
        os.getenv("RAZORPAY_KEY_SECRET").encode(),
        f"{order_id}|{payment_id}".encode(),
        hashlib.sha256
    ).hexdigest()

    if generated != signature:
        return jsonify({"message": "Verification failed"}), 400

    cursor.execute(
        "INSERT INTO user_courses (user_id, course_id, payment_status, payment_id, order_id, signature) VALUES (%s,%s,%s,%s,%s,%s)",
        (user_id, course_id, "success", payment_id, order_id, signature)
    )
    db.commit()

    return jsonify({"message": "Payment success"})


@app.route("/buy-course", methods=["POST"])
@jwt_required()
def buy_course():
    user_id = get_jwt_identity()
    data = request.json

    course_name = data.get("course_name")

    #  Check if already purchased
    query = "SELECT * FROM user_courses WHERE user_id = %s AND course_name = %s"
    cursor.execute(query, (user_id, course_name))
    existing = cursor.fetchone()

    if existing:
        return jsonify({"message": "Course already purchased!"})

    #  For now: simulate payment success
    payment_status = "success"

    insert_query = """
        INSERT INTO user_courses (user_id, course_name, payment_status)
        VALUES (%s, %s, %s)
    """
    cursor.execute(insert_query, (user_id, course_name, payment_status))
    db.commit()

    return jsonify({"message": "Course purchased successfully!"})

@app.route("/my-courses", methods=["GET"])
@jwt_required()
def my_courses():
    user_id = get_jwt_identity()

    cursor.execute("SELECT course_name FROM user_courses WHERE user_id = %s", (user_id,))
    courses = cursor.fetchall()

    return jsonify(courses)

if __name__ == "__main__":
    app.run(debug=True)
