import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="section-title">About Us</h2>
            <p>
              At R.E. Bulos Builders, we are driven by a passion for intelligent
              construction guided by creativity, imagination, and comfort. Our
              philosophy blends fantasy, drama, and functionality to deliver
              projects on time and within budget.
            </p>
            <p>
              We have carefully built a team of talented interior designers,
              architects, and engineers who share our commitment to quality
              service. By fostering a collaborative and highly creative work
              environment, we continuously nurture and develop young talent to
              keep our ideas fresh and innovative.
            </p>
            <p>
              With strong organizational and communication skills at every
              level, our team is dedicated to providing clients with exceptional
              satisfaction through innovative construction solutions that embody
              both intelligence and artistry.
            </p>
          </div>

          <div className="col-md-6">
            <img
              src="public/images/about.jpg"
              alt="Construction"
              className="img-fluid about-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
