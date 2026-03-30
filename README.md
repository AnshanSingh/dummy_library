\# 📚 Coaching \& Course Platform (React + Flask + Razorpay)

A full-stack web application for selling online courses with secure authentication and payment integration using Razorpay.

\---

\## 🚀 Features

\* 🔐 User Authentication (JWT आधारित login system)

\* 📦 Course Listing UI (React)

\* 💳 Secure Payment Integration (Razorpay)

\* 🧾 Order Creation \& Payment Verification (Backend)

\* 🔄 Protected APIs using JWT

\* 🌐 CORS-enabled backend for frontend communication

\---

\## 🛠️ Tech Stack

\### Frontend

\* React.js

\* CSS

\* Fetch API

\### Backend

\* Flask (Python)

\* Flask-JWT-Extended

\* Flask-CORS

\* Razorpay Python SDK

\---

\## 📁 Project Structure

```

project/

│

├── frontend/        # React App

│   ├── src/

│   └── package.json

│

├── backend/         # Flask API

│   ├── app.py

│   ├── routes/

│   └── .env

│

└── README.md

```

\---

\## ⚙️ Setup Instructions

\### 1️⃣ Clone Repository

```

git clone https://github.com/AnshanSingh/dummy_library.git

cd your-repo

```

\---

\### 2️⃣ Backend Setup (Flask)

```

cd backend

pip install -r requirements.txt

```

Create `.env` file:

```

RAZORPAY\_KEY\_ID=rzp\_test\_xxxxx

RAZORPAY\_KEY\_SECRET=your\_secret\_key

JWT\_SECRET\_KEY=your\_jwt\_secret

```

Run server:

```

python app.py

```

\---

\### 3️⃣ Frontend Setup (React)

```

cd frontend

npm install

npm run dev

```

\---

\## 🔐 Environment Variables

| Variable | Description |

| ------------------- | ----------------------------- |

| RAZORPAY_KEY_ID | Public key (used in frontend) |

| RAZORPAY_KEY_SECRET | Private key (backend only) |

| JWT_SECRET_KEY | JWT authentication key |

\---

\## 💳 Payment Flow

1\. User clicks \*\*Buy\*\*

2\. Frontend sends request → `/create-order`

3\. Backend creates Razorpay order

4\. Razorpay popup opens

5\. User completes payment

6\. Payment verified via `/verify-payment`

7\. Course access granted ✅

\---

\## 🧪 Test Payment (Razorpay)

Use test card:

```

Card Number: 4111 1111 1111 1111

Expiry: Any future date

CVV: 123

OTP: 1234

```

\---

\## ⚠️ Important Notes

\* ❌ Never commit `.env` file

\* ✅ Always verify payment on backend

\* 🔒 Keep Razorpay Secret Key private

\---

\## 🐞 Common Errors \& Fixes

\### CORS Error

Fix using:

```python

from flask\_cors import CORS

CORS(app)

```

\---

\### 401 Unauthorized

\* Check JWT token

\* Ensure Authorization header is sent

\---

\### Payment Not Opening

\* Check Razorpay Key

\* Ensure order_id is received

\---

\## 📌 Future Improvements

\* 📱 Mobile responsiveness

\* 🧑‍🏫 Instructor dashboard

\* 📊 Admin panel

\* 🧾 Payment history

\* 🔔 Email notifications

\---

\## 👨‍💻 Author

\*\*Arpit Singh\*\*

\---

\## ⭐ Support

If you like this project:

⭐ Star the repo

🍴 Fork it

📢 Share it

\---

\## 📜 License

This project is for learning and educational purposes.
