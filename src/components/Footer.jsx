// import React from 'react'
import fyloLogo from "../assets/images/logo.svg";
import locationIcon from "../assets/images/icon-location.svg";
import callIcon from "../assets/images/icon-phone.svg";
import emailIcon from "../assets/images/icon-email.svg";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="text-white mx-11">
      <img src={fyloLogo} alt="fylo logo" className="h-8 w-15  mt-[4em]" />

      <div className="flex flex-col gap-12">
        {/* ADDRESS */}
        <div className="mt-[4em] flex flex-col gap-4">
          {/* location */}
          <div className="flex gap-6 justify-center">
            <img src={locationIcon} alt="location icon" className="h-4" />
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          {/* call */}
          <div className="flex gap-6 ">
            <img src={callIcon} alt="phone icon" className="h-4" />
            <p className="text-sm">+1-543-123-4567</p>
          </div>
          {/* email */}
          <div className="flex gap-6">
            <img src={emailIcon} alt="email icon" className="h-4" />
            <p className="text-sm">example@fylo.com</p>
          </div>
        </div>

        {/* Quick links 1 */}
        <div>
            <ul>
                <li>About Us</li>
                <li>Jobs</li>
                <li>Press</li>
                <li>Blog</li>
            </ul>
        </div>

        {/* Quick links 2 */}
        <div>
            <ul>
                <li>Contact Us</li>
                <li>Terms</li>
                <li>Privacy</li>
            </ul>
        </div>

        {/* Social media icons */}
        <div className="flex gap-2 justify-center mb-[4em]">
           <FaFacebook/>
           <FaTwitter/>
           <FaInstagram/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
