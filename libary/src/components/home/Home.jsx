import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import book_1 from "../../assets/book_1.png";
import place1 from "../../assets/place1.png";
import place2 from "../../assets/place2.png";
import place3 from "../../assets/place3.png";
import first from "../../assets/first.jpg";
import second from "../../assets/second.jpg";
import third from "../../assets/third.jpg";
import forth from "../../assets/forth.jpg";
import five from "../../assets/five.jpg";
import six from "../../assets/six.jpg";
import seven from "../../assets/seven.jpg";
import footerimage2 from "../../assets/footerimage2.jpg";
import logo from "../../assets/logo.png";
import insta from "../../assets/insta.avif";
import youtube from "../../assets/youtube.jpg";
import linkdin from "../../assets/linkdin.png";
import { FcAbout } from "react-icons/fc";
import { RiUserFollowLine } from "react-icons/ri";
import { MdMiscellaneousServices } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { FaCaretRight } from "react-icons/fa";
import "./home.css";

const Home = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const bannerImage = [{ img: place1 }, { img: place2 }, { img: place3 }];

  const [image, setImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImage((prev) => (prev + 1) % bannerImage.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [bannerImage.length]);

  const boxData = [
    {
      title: "Math",
      topics: ["Algebra", "Calculus", "Geometry", "Trigonometry", "Statistics"],
      img: book_1,
    },
    {
      title: "Physics",
      topics: [
        "Mechanics",
        "Optics",
        "Thermodynamics",
        "Electromagnetism",
        "Modern Physics",
      ],
      img: first,
    },
    {
      title: "Chemistry",
      topics: [
        "Organic Chemistry",
        "Inorganic Chemistry",
        "Physical Chemistry",
        "Atomic Structure",
        "Periodic Table",
      ],
      img: second,
    },
    {
      title: "Biology",
      topics: ["Botany", "Zoology", "Genetics", "Human Physiology", "Ecology"],
      img: third,
    },
    {
      title: "English",
      topics: [
        "Grammar",
        "Vocabulary",
        "Reading Comprehension",
        "Literature",
        "Writing Skills",
      ],
      img: forth,
    },
    {
      title: "Computer",
      topics: [
        "Programming",
        "Data Structures",
        "Database",
        "Operating System",
        "Networking",
      ],
      img: five,
    },
    {
      title: "GK",
      topics: [
        "Current Affairs",
        "Indian Polity",
        "Indian Economy",
        "Science & Tech",
        "Sports",
      ],
      img: six,
    },
    {
      title: "Reasoning",
      topics: [
        "Blood Relation",
        "Direction Test",
        "Syllogism",
        "Number Series",
        "Coding-Decoding",
      ],
      img: seven,
    },
    {
      title: "History",
      topics: [
        "Ancient India",
        "Medieval India",
        "Modern India",
        "Freedom Movement",
        "World History",
      ],
      img: book_1,
    },
    {
      title: "Geography",
      topics: [
        "Physical Geography",
        "Indian Geography",
        "World Geography",
        "Climate",
        "Maps & Resources",
      ],
      img: book_1,
    },
  ];

  const courseData = [
    {
      id: 1,
      course: "UP Police Contable 2026",
      des: "By at ₹599 per month",
      purchase: "Buy",
      info: "Explore",
      img: first,
    },
    {
      id: 2,
      course: "UP PET LekhPal 2026",
      des: "By at ₹599 per month",
      purchase: "Buy",
      info: "Explore",
      img: first,
    },
    {
      id: 3,
      course: "UP SI 2026",
      des: "By at ₹599 per month",
      purchase: "Buy",
      info: "Explore",
      img: first,
    },
    {
      id: 4,
      course: "UP TET 2026",
      des: "By at ₹599 per month",
      purchase: "Buy",
      info: "Explore",
      img: first,
    },
    {
      id: 5,
      course: "UP CTET 2026",
      des: "By at ₹599 per month",
      purchase: "Buy",
      info: "Explore",
      img: first,
    },
    {
      id: 6,
      course: "Indian Airforce 2026",
      des: "By at ₹599 per month",
      purchase: "Buy",
      info: "Explore",
      img: first,
    },
    {
      id: 7,
      course: "Indian Navy",
      des: "By at ₹599 per month",
      purchase: "Buy",
      info: "Explore",
      img: first,
    },
    {
      id: 8,
      course: "Indian Army",
      des: "By at ₹599 per month",
      purchase: "Buy",
      info: "Explore",
      img: first,
    },
  ];

  // small-box started here

  const smallBox = [
    {
      img: logo,
    },
    {
      img: logo,
    },
    {
      img: logo,
    },
    {
      img: logo,
    },
    {
      img: logo,
    },
    {
      img: logo,
    },
  ];

  const handleBuy = async (course) => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first ");
      return;
    }

    const res = await fetch("http://localhost:5000/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ course_id: course.id }),
    });

    const data = await res.json();

    const options = {
      key: "rzp_test_SXN1b3biCNk1qH",
      amount: data.amount,
      currency: "INR",
      order_id: data.order_id,

      name: "Course Platform",
      description: course.title,

      handler: async function (response) {
        await fetch("http://localhost:5000/verify-payment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            course_id: course.id,
            order_id: response.razorpay_order_id,
            payment_id: response.razorpay_payment_id,
            signature: response.razorpay_signature,
          }),
        });

        alert("Payment Successful ");
      },
    };

    new window.Razorpay(options).open();
  };

  return (
    <>
      <div className="banner-container">
        {bannerImage.map((item, index) => (
          <img
            key={index}
            src={item.img}
            alt=""
            className={`banner-img ${index === image ? "active" : ""}`}
          />
        ))}
      </div>
      {/* Top section end */}

      {/* Scroll Section */}
      <div className="flex-section">
        <h3 className="learn-here">what you can learn here</h3>
        <div className="slider-wrapper ">
          <div className="boxes">
            {[...boxData, ...boxData].map((item, i) => (
              <div className="box1" key={i}>
                <img src={item.img} alt={item.title} className="box-img" />
                <h3>{item.title}</h3>

                <ul className="topic-list">
                  {item.topics.map((topic, index) => (
                    <li key={index}>➜ {topic}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* our courses section start here */}
      {/* <div className="course-aria"> */}
      <div className="slider-container">
        <button className="scroll-btn left" onClick={() => scrollLeft()}>
          ◀
        </button>

        <div className="course-child" ref={scrollRef}>
          {courseData.map((courses) => (
            <div className="course-box" key={courses.id}>
              <img src={courses.img} alt="course-img" />
              <p>{courses.course}</p>

              <div className="d-flex justify-content-between">
                <p>{courses.des}</p>
                <p className="buy-course" onClick={() => handleBuy(courses)}>
                  Buy
                </p>
              </div>

              <h5 className="explore">Explore</h5>
            </div>
          ))}
        </div>

        <button className="scroll-btn right" onClick={() => scrollRight()}>
          ▶
        </button>
      </div>
      {/* </div> */}

      <div className="footer-section">
        <div className="details_part">
          <h1 className="footer-heading">
            <span style={{ color: "red" }}>U</span>PSI
          </h1>
          <div className="middle-section">
            <h5>Learn, revise, and succeed in UPSI exam</h5>
            <p>
              At BL Sir Library, we are dedicated to shaping the future of
              aspiring candidates by providing the best guidance for UPSI
              preparation. Our experienced teachers focus on building strong
              concepts, smart problem-solving skills, and exam-oriented
              strategies to help every student succeed. With a disciplined
              environment, regular practice sessions, and personalized
              attention, we ensure that each student is fully prepared to
              achieve their goal of becoming a UP Police SI.
            </p>
            <div className="flex-section">
              <div className="boxes2">
                {[...smallBox, ...smallBox].map((item, i) => (
                  <div className="chote-box" key={i}>
                    <img src={item.img} alt="logo" className="chota_box-img" />
                  </div>
                ))}
              </div>
            </div>
            <p>
              At BL Sir Library, we guide students with smart strategies and
              clear concepts to crack the UPSI exam with confidence.
            </p>
          </div>
          {/* middle-section end */}
          <div className="end-section">
            <img src={footerimage2} alt="footerimage" />
          </div>
        </div>
        {/* end footer started here */}
        <div className="container-fluid footer">
          <div className="divide-footer">
            <ul>
              <h3>
                <FcAbout />
                About
              </h3>
              <li>
                <FaCaretRight />
                About Libary
              </li>
              <li>
                <FaCaretRight />
                Disclaimer
              </li>
              <li>
                <FaCaretRight />
                Sponser
              </li>
              <li>
                <FaCaretRight />
                Privacy Policy
              </li>
              <li>
                <FaCaretRight />
                Terms & Condition
              </li>
            </ul>
            <ul>
              <h3>
                <RiUserFollowLine />
                Guidelines
              </h3>
              <li>
                <FaCaretRight />
                Copyright Guide for Indian Libraries
              </li>
              <li>
                <FaCaretRight />
                Institutional Registration
              </li>
              <li>
                <FaCaretRight />
                Branding
              </li>
              <li>
                <FaCaretRight />
                Code of Conduct
              </li>
              <li>
                <FaCaretRight />
                Registration Form
              </li>
            </ul>
            <ul>
              <h3>
                <MdMiscellaneousServices />
                Our Services
              </h3>
              <li>
                <FaCaretRight />
                Best Envireoment
              </li>
              <li>
                <FaCaretRight />
                Silent Study Hall
              </li>
              <li>
                <FaCaretRight />
                Individual Study Cabins
              </li>
              <li>
                <FaCaretRight />
                High-Speed WiFi
              </li>
              <li>
                <FaCaretRight />
                Comfortable Seating
              </li>
            </ul>
            <ul>
              <h3>
                <IoIosContact />
                Contact Us
              </h3>
              <li>
                <FaCaretRight />
                Contact
              </li>
              <li>
                <FaCaretRight />
                Feedback
              </li>
              <div className="follow-section">
                <img src={insta} alt="" />
                <img src={youtube} alt="" />
                <img src={linkdin} alt="" />
              </div>
            </ul>
          </div>
        </div>
        {/* footer-section end */}
      </div>
    </>
  );
};

export default Home;
