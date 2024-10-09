import React from "react";
import image from "../images/heroimg.jpg";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Your Health, <br />
          Our Responsibility
        </h1>
        <p>
        At Dosnexa, we are committed to transforming how you access healthcare services. Our platform is designed to alleviate the hassle associated with managing medical appointments by offering a streamlined, user-friendly system. From quick appointment scheduling to seamless communication with healthcare professionals, Dosnexa makes it easier than ever to manage your health care needs efficiently and effectively.
        </p>
      </div>
      <div className="hero-img">
        <img
          src={image}
          alt="hero"
        />
      </div>
    </section>
  );
};

export default Hero;
