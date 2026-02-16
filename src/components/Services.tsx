import React from "react";

const Services: React.FC = () => {
  return (
    <section id="services" className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="section-title">Our Services</h2>

        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card shadow service-card">
              <div className="card-body">
                <h5 className="fw-bold">Design and Building</h5>
                <p>High-quality home building and renovations.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow service-card">
              <div className="card-body">
                <h5 className="fw-bold">Painting</h5>
                <p>Painting services for residential spaces</p>              
                </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow service-card">
              <div className="card-body">
                <h5 className="fw-bold">Renovation</h5>
                <p>Professional supervision and cost control.</p>
              </div>
            </div>
          </div>

          {/* New Services */}
          <div className="col-md-4 mb-4">
            <div className="card shadow service-card">
              <div className="card-body">
                <h5 className="fw-bold">Floor Finishes</h5>
                <p>Durable and stylish flooring solutions.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow service-card">
              <div className="card-body">
                <h5 className="fw-bold">Landscaping</h5>
                <p>Beautiful outdoor designs and maintenance.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow service-card">
              <div className="card-body">
                <h5 className="fw-bold">Estimate</h5>
                <p>Accurate project cost estimation services.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
