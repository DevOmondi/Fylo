// import React from 'react'

const Testimonial = ({ profileImg, profileName, profileRole }) => {
  return (
    <div className="text-white bg-[#202A3C] p-6 rounded-md">
      <p className="text-[0.7rem]">
        Fylo has improved our team productivity by an order of magnitude. Since
        making the switch our team has become a well-oiled collaboration
        machine.
      </p>
      <div className="flex mt-4">
        <img
          src={profileImg}
          alt="profile 1"
          className="rounded-full w-7 h-7 mr-2"
        />
        <div>
          <h1 className="font-bold text-xs">{profileName}</h1>
          <p className="text-[0.5rem]">{profileRole}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
