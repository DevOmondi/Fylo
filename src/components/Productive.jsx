// import React from 'react'
import prodImg from "../assets/images/illustration-stay-productive.png";
import arrowIcon from "../assets/images/icon-arrow.svg";

const Productive = () => {
  return (
    <div className="mt-[8em] mx-auto w-[80%] text-white">
       <img src={prodImg} alt="stay productive icon"/>
       <div>
        <h1 className="font-bold text-lg mt-[2em]">Stay productive, wherever you are</h1>
        <p className="text-sm  mt-[1.5em]">Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
        <p className="text-sm  mt-[1em]">Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
        <div className="flex mt-[0.8em]">
        <p className="text-[#62E0D9] text-sm font-thin mr-[0.4em]">See how Fylo works</p>
        <img src={arrowIcon} alt="arrow icon" className="inline" />
        </div>
       </div>
    </div>
  )
}

export default Productive;