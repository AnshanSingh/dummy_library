import React, { useEffect, useRef, useState } from "react";
import "./contact.css";
import select from "../assets/select.png";
import students from "../assets/students.png";
import students_2 from "../assets/students_2.png";
import students_3 from "../assets/students_3.png";
import students_4 from "../assets/students_4.png";
import students_5 from "../assets/students_5.png";
import place1 from "../assets/place1.png";
import place2 from "../assets/place2.png";
import place3 from "../assets/place3.png";
import { FcAbout } from "react-icons/fc";
import { FaCaretRight } from "react-icons/fa";
import { RiUserFollowLine } from "react-icons/ri";
import { MdMiscellaneousServices } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import insta from "../assets/insta.avif";
import youtube from "../assets/youtube.jpg";
import linkdin from "../assets/linkdin.png";

const Contact = () => {
  const scrollRef = useRef(null);

  const images = [
    students,
    students_2,
    students_3,
    students_4,
    students_2,
    students_3,
    students_4,
    students_5,
    students_5,
    ,
  ];

  const loopImages = [...images, ...images];

  useEffect(() => {
    const container = scrollRef.current;

    const interval = setInterval(() => {
      if (container) {
        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth
        ) {
          container.scrollLeft = 0;
        } else {
          container.scrollBy({
            left: 270,
            behavior: "smooth",
          });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const placements = [
    {
      title: "Secure Your Future",
      company: "Indian Air Force",
      name: "Success Executed",
      desc: "Proud moment: selected in the Indian Air Force. Dedication, discipline, and hard work turned dreams into reality.",
      img: place1,
    },
    {
      title: "Dream Achieved",
      company: "Google",
      name: "Rahul Sharma",
      desc: "Hard work paid off. Cracked Google with consistency and dedication.",
      img: place2,
    },
    {
      title: "Top Placement",
      company: "Amazon",
      name: "Aman Singh",
      desc: "Focused preparation and confidence helped me achieve my goal.",
      img: place3,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % placements.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="select-section">
        <img src={select} alt="background" />

        <div className="select-content">
          <div className="select-text">
            <h1>Our Pride? Their Success</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="wrap-image" ref={scrollRef}>
            {loopImages.map((img, index) => (
              <div className="inside-image" key={index}>
                <img src={img} alt="student" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bigger-section">
        <div className="content-section">
          <h1 className="head1">One Place , Infinite Possibilities</h1>
          <h2 className="head2">Comes With your Passion, leave with</h2>
          <h3 className="head3">Your Profession</h3>
          <p className="desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            sint doloremque officia neque, laboriosam quia rerum ullam illo. Sit
            facere optio cupiditate eaque, voluptas neque perspiciatis iure?
            Suscipit, corporis magni!
          </p>
        </div>
        <div className="divided-section">
          <div className="first-section">
            <h1 className="head2">Ready To Provided you, Your Dream Job </h1>
            <h2 className="head4">Get The job in any field</h2>
          </div>
          <div className="first-section">
            <h1 className="head2">Ready To Provided you, Your Dream Job </h1>
            <h2 className="head4">Get The job in any field</h2>
          </div>
        </div>

        <div className="placement">
          <div className="place-content">
            <div className="place1">
              <span className="cheer-names">
                {placements[currentIndex].name}
              </span>
              <h2>{placements[currentIndex].title}</h2>
              <p className="proud-moment">{placements[currentIndex].desc}</p>
            </div>

            <div className="place2">
              <img src={placements[currentIndex].img} alt="" />
            </div>

            <div className="place3">
              <h2>{placements[currentIndex].company}</h2>
              <span className="cheer-names">
                {placements[currentIndex].name}
              </span>
              <p className="proud-moment">{placements[currentIndex].desc}</p>
            </div>
          </div>
        </div>
      </div>

      {/* end footer started here */}
      <div className="container-fluid about">
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
    </>
  );
};

export default Contact;
