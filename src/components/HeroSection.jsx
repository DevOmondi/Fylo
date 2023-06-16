// import React from 'react'
import heroIllustration from "../assets/images/illustration-intro.png";

const HeroSection = () => {
  return (
    <div className="mt-8 text-center text-white">
      <img
        src={heroIllustration}
        alt="intro illustration"
        className="w-[80%] mx-auto"
      />
      <div>
        <h1 className=" font-bold text-xl mt-10">
          All your files in one secure <br />
          location, accessible <br />
          anywhere.
        </h1>
        <p className="text-sm mt-5">
          Fylo stores all your most important files in <br />
          one secure location. Access them wherever <br />
          you need, share and collaborate with friends <br />
          family, and co-workers.
        </p>
        <button className="text-white bg-gradient-to-r from-primary to-secondary py-[0.6em] px-[3em] rounded-full align-center mt-7 w-[60%]">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
