// import React from 'react'
import quoteImg from "../assets/images/bg-quotes.png";
import Testimonial from "./Testimonial";
// profile picture imports
import profileImg1 from "../assets/images/profile-1.jpg";
import profileImg2 from "../assets/images/profile-2.jpg";
import profileImg3 from "../assets/images/profile-3.jpg";

const Testimonials = () => {
  // profile names
  const profileName1 = "Satesh Patel";
  const profileName2 = "Bruce McKenzie";
  const profileName3 = "Iva Boyd";
  // profile roles
  const profileRole = "Founder & CEO, Huddle";
  return (
    <div className=" mt-[10em] mx-11 ">
      <img src={quoteImg} alt="quote image" className="w-5 h-4" />
      <div className="flex flex-col gap-6">
      <Testimonial
        profileImg={profileImg1}
        profileName={profileName1}
        profileRole={profileRole}
      />
      <Testimonial
        profileImg={profileImg2}
        profileName={profileName2}
        profileRole={profileRole}
      />
      <Testimonial
        profileImg={profileImg3}
        profileName={profileName3}
        profileRole={profileRole}
      />
      </div>
    </div>
  );
};

export default Testimonials;
