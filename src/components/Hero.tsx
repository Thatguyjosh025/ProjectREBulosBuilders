import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <h1 className="hero-title">
          We build a house, you make it home.   
        </h1>
        <p className="lead mt-3">
          Professional Construction & Engineering Services
        </p>
        {/* <button className="btn btn-warning btn-lg hero-btn">
          Get a Free Quote
        </button> */}
      </div>
    </section>
  );
};

export default Hero;
