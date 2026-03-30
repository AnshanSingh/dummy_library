import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import book_1 from "../../assets/book_1.png";
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
      course: "UP Police Contable 2026",
      des: "By at ₹599 per month",
      purchase: "Buy",
      info: "Explore",
      img: first,
    },
    {
      id: 3,
      course: "UP Police Contable 2026",
      des: "By at ₹599 per month",
      purchase: "Buy",
      info: "Explore",
      img: first,
    },
    {
      id: 4,
      course: "UP Police Contable 2026",
      des: "By at ₹599 per month",
      purchase: "Buy",
      info: "Explore",
      img: first,
    },
    {
      id: 5,
      course: "UP Police Contable 2026",
      des: "By at ₹599 per month",
      purchase: "Buy",
      info: "Explore",
      img: first,
    },
    {
      id: 6,
      course: "UP Police Contable 2026",
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
      <div className="top-section d-flex justify-content-evenly align-items-center">
        {/* Image Section */}
        <div className="image-center">
          <img src={book_1} alt="Library" />
        </div>

        {/* Text Section */}
        <div className="text-center">
          <h1>Coaching & Library</h1>

          <p>
            We provide quality education and peaceful library environment for
            competitive exam preparation.
          </p>

          <button>Learn More</button>
        </div>
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
      <div className="flex-section">
        <div className="course-child">
          {[...courseData, ...courseData].map((courses, i) => (
            <div className="course-box" key={i}>
              <img src={courses.img} alt="course-img" className="course-img" />
              <p>{courses.course}</p>
              <div className="d-flex align-items-center justify-content-between">
                <p>{courses.des}</p>
                <p className="buy-course" onClick={() => handleBuy(courses)}>
                  {courses.purchase}
                </p>
              </div>
              <h5 className="explore">{courses.info}</h5>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-section">
        <div className="details_part">
          <h1 className="footer-heading">
            <span style={{ color: "red" }}>U</span>PSI
          </h1>
          <div className="middle-section">
            <h5>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              officiis at reprehenderit.
            </h5>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus maxime nemo qui dicta praesentium mollitia in
              quaerat tempora quas numquam quidem odio ipsam, expedita dolores
              est minima fugiat laborum repudiandae reiciendis placeat dolore
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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo vel
              magnam sed dicta labore a!
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
