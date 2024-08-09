import { React } from "react";
import "../Components/Header.css";
import {
  FaHome,
  FaHammer,
  FaUser,
  FaClipboard,
  FaPhone,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";

export function Header() {
  return (
    <div className="header-space bg-slate-300 rounded-lg pr-8 pl-8 pt-8 shadow-md">
      <h3>Dan Warcholak</h3>
      <img
        src="https://cdn.pixabay.com/photo/2024/04/09/03/04/ai-generated-8684869_1280.jpg"
        id="profile-pic"
        alt="cartoon-programmer"
        className="shadow-2xl"
      ></img>
      <p>
        Hi, I'm Dan, a Software Developer<br></br>Welcome to my personal
        portfolio site!
      </p>
      <ul className="brands pt-8 pb-8">
        <li>
          <FaLinkedin />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaTwitter />
        </li>
        <li>
          <FaTwitch />
        </li>
      </ul>
      <nav className="nav-controls">
        <ul className="nav-icons">
          <li>
            <FaHome />
          </li>
          <li>
            <FaHammer />
          </li>
          <li>
            <FaUser />
          </li>
          <li>
            <FaClipboard />
          </li>
          <li>
            <FaPhone />
          </li>
        </ul>
        <ul class="nav-links">
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            {" "}
            <a href="#">SERVICES</a>
          </li>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">RESUME</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
        </ul>
      </nav>
      <button className="pt-2 pb-2 pl-2 pr-2 mb-12 rounded-md shadow-lg">
        Request Meeting
      </button>
    </div>
  );
}
