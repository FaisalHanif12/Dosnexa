import React from "react";
import image from "../images/aboutimg.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img src={image} alt="hero" />
          </div>
          <div className="hero-content">
            <p>
              At Dosnexa, we are dedicated to revolutionizing the way you manage
              healthcare appointments and services. Our platform offers an
              unparalleled array of features designed to enhance convenience and
              efficiency for both patients and healthcare providers. From
              seamless appointment booking to integrated prescription delivery
              and home sampling services, Dosnexa ensures every interaction is
              smooth and hassle-free. Experience the future of medical
              consultations with Dosnexa, where technology meets care. We
              provide a comprehensive solution for managing health appointments,
              enabling easy access to a wide network of medical professionals
              and streamlined healthcare management. Whether you're booking a
              visit, receiving updates on health trends, or managing
              prescriptions, Dosnexa offers a secure and intuitive platform that
              caters to all your healthcare needs. Join us in transforming
              healthcare with technology that empowers and simplifies.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
