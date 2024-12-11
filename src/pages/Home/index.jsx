import React from "react";
import bg from "../../assets/h1_hero1.jpg";
import Products from "../../components/Products";

const Home = () => {
  return (
    <div className="hero">
      <div className="container-full">
        <div className="card">
          <img
            src={bg}
            className="card-img"
            alt="..."
            style={{
              height: "550px",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
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
    </div>
  );
};

export default Home;
