// import React from 'react'
import ServiceCard from "./ServiceCard";
// services icons import
import serviceImg1 from "../assets/images/icon-access-anywhere.svg";
import serviceImg2 from "../assets/images/icon-security.svg";
import serviceImg3 from "../assets/images/icon-collaboration.svg";
import serviceImg4 from "../assets/images/icon-any-file.svg";

const ServiceCards = () => {
  // services headings
  const serviceTitle1 = "Access your files, anywhere";
  const serviceTitle2 = "Security you can trust";
  const serviceTitle3 = "Real-time collaboration";
  const serviceTitle4 = "Store any type of file";
  // services text(content)
  const serviceText1 =
    "The ability to use a smartphone, tablet or computer to access your account means your files follow you everywhere.";
  const serviceText2 =
    "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.";
  const serviceText3 =
    "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.";
  const serviceText4 =
    "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.";
  return (
    <div className="mt-[8em]">
      <ServiceCard
        serviceImg={serviceImg1}
        heading={serviceTitle1}
        serviceText={serviceText1}
      />
      <ServiceCard
        serviceImg={serviceImg2}
        heading={serviceTitle2}
        serviceText={serviceText2}
      />
      <ServiceCard
        serviceImg={serviceImg3}
        heading={serviceTitle3}
        serviceText={serviceText3}
      />
      <ServiceCard
        serviceImg={serviceImg4}
        heading={serviceTitle4}
        serviceText={serviceText4}
      />
    </div>
  );
};

export default ServiceCards;
