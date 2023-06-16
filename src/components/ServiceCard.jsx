// import React from "react";


const ServiceCard = ({serviceImg,heading,serviceText}) => {
  return (
    <div className="text-white text-center mt-[5em]">
      <img src={serviceImg} alt="access anywhere" className="mx-auto" />
      <h1 className="font-bold text-lg mb-3 mt-8">{heading}</h1>
      <p className="mx-3">
        {serviceText}
      </p>
    </div>
  );
};

export default ServiceCard;
