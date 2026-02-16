// import React, { useState } from "react";
import NATHALIA from "./images/NATHALIA.png";
import ELIZE from "./images/ELIZE.png";
import MAXINE from "./images/MAXINE.png";
import BENEDICT from "./images/BENEDICT.png";


interface House {
  name: string;
  price: string;
  size: string;
  beds: number;
  img: string;
}

function Products() {
  const houses: House[] = [
    {
      name: "Nataliah",
      price: "000,000",
      size: "180 sqm",
      beds: 3,
      img: NATHALIA,
    },
    {
      name: "Elize",
      price: "000,000",
      size: "450 sqm",
      beds: 6,
      img: ELIZE,
    },
    {
      name: "Maxine",
      price: "000,000",
      size: "95 sqm",
      beds: 2,
      img: MAXINE,
    },
    {
      name: "Benedict",
      price: "000,000",
      size: "130 sqm",
      beds: 3,
      img: BENEDICT,
    },
  ];

  // const [selectedHouse, setSelectedHouse] = useState<House | null>(null);
  // const [showModal, setShowModal] = useState(false);

  // const openModal = (house: House) => {
  //   setSelectedHouse(house);
  //   setShowModal(true);
  // };

  // const closeModal = () => {
  //   setShowModal(false);
  //   setSelectedHouse(null);
  // };

  return (
    <>
      <section id="products" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center section-title">
            Available House Models
          </h2>

          <div className="row">
            {houses.map((house, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card shadow product-card">
                  <img
                    src={house.img}
                    className="card-img-top product-img"
                    alt={house.name}
                  />
                  <div className="card-body">
                    <h5 className="fw-bold">{house.name}</h5>
                    {/* <p>Price: {house.price}</p>
                    <p>Size: {house.size}</p>
                    <p>{house.beds} Bedrooms</p>
                    <button
                      className="btn btn-warning w-100"
                      onClick={() => openModal(house)}
                    >
                      View Details
                    </button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {/* {showModal && selectedHouse && (
        <div
          className="modal fade show d-block"
          tabIndex={-1}
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {selectedHouse.name} - Full Details
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeModal}
                ></button>
              </div>

              <div className="modal-body">
                <img
                  src={selectedHouse.img}
                  alt={selectedHouse.name}
                  className="img-fluid rounded mb-3"
                />

                <ul className="list-group">
                  <li className="list-group-item">
                    <strong>Price:</strong> {selectedHouse.price}
                  </li>
                  <li className="list-group-item">
                    <strong>Lot Size:</strong> {selectedHouse.size}
                  </li>
                  <li className="list-group-item">
                    <strong>Bedrooms:</strong> {selectedHouse.beds}
                  </li>
                  <li className="list-group-item">
                    <strong>Bathrooms:</strong> 2
                  </li>
                  <li className="list-group-item">
                    <strong>Garage:</strong> 1 Car
                  </li>
                </ul>
              </div>

              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={closeModal}
                >
                  Close
                </button>
                <button className="btn btn-warning">
                  Inquire Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </>
  );
}

export default Products;
