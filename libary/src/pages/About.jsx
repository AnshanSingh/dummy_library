import React from "react";
import "./about.css";
import about from "../assets/about.png";
import teacher from "../assets/teacher.png";
import five from "../assets/five.jpg";
import { PiStudentBold } from "react-icons/pi";
import { FcAbout } from "react-icons/fc";
import { FaCaretRight } from "react-icons/fa";
import { RiUserFollowLine } from "react-icons/ri";
import { MdMiscellaneousServices } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import insta from "../assets/insta.avif";
import youtube from "../assets/youtube.jpg";
import linkdin from "../assets/linkdin.png";

const About = () => {
  return (
    <>
      <div className="about-section">
        <img src={about} alt="About Banner" />

        <div className="about-content">
          <div className="dream">
            <h3>Chase Your</h3>
            <h1>DREAMS,</h1>
            <h3>Finish like a</h3>
            <h1>CHAMPION.</h1>
            <h3 className="yahan">
              Yaha sab<span className="change">Possible hai !</span>
            </h3>
          </div>
          <div className="teacher-image">
            <img src={teacher} alt="" />
          </div>
        </div>
      </div>

      <div className="big-content">
        <h3>Information for</h3>
        <h1>
          <span className="students">Our students speak hear it</span> from
          those who are learning with us !
        </h1>
        <p>
          Whether you’re a prospective student just starting their journey or an
          alumni who has just finished it, here is where you will find your way
          around PU.
        </p>
      </div>

      {/* three column */}
      <div className="explore-student">
        <div className="student-content">
          <div className="student-content1">
            <img src={five} alt="five-img" />
            <div className="vertical-text">
              <p className="sticker">
                <PiStudentBold />
              </p>
              <p>For Prospective Students</p>
              <p style={{ color: "#f7b551" }}>Read more</p>
            </div>
          </div>

          <div className="student-content1">
            <img src={five} alt="five-img" />
            <div className="vertical-text">
              <p className="sticker">
                <PiStudentBold />
              </p>
              <p>For Prospective Students</p>
              <p style={{ color: "#f7b551" }}>Read more</p>
            </div>
          </div>

          <div className="student-content1">
            <img src={five} alt="five-img" />
            <div className="vertical-text">
              <p className="sticker">
                <PiStudentBold />
              </p>
              <p>For Prospective Students</p>
              <p style={{ color: "#f7b551" }}>Read more</p>
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

export default About;
