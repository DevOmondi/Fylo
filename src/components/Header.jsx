// import React from 'react'
import fyloLogo from "../assets/images/logo.svg";

const Header = () => {
  return (
    <div className="flex gap-24 justify-center pt-4 px-1">
      <img src={fyloLogo} alt="fylo logo" className="h-8 w-15" />
      <div>
        <ul className="flex gap-2 text-white text-sm font-thin">
          <li>Features</li>
          <li>Team</li>
          <li>Sign In</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
