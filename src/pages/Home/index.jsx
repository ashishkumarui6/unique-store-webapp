import React from "react";
import bg from "../../assets/bg.avif";
import Products from "../Products";

const Home = () => {
  return (
    <div className="hero">
      <div className="card text-bg-dark">
        <img
          src={bg}
          className="card-img"
          alt="..."
          style={{ height: "550px" }}
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">
              NEW SEASON ARRIVALS
            </h5>
            <p className="card-text lead fs-2 text-uppercase">
              click out all the trends
            </p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
