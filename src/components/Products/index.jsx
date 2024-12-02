import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFIlter] = useState(data);
  const [loding, setLoding] = useState(false);

  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoding(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFIlter(await response.json());
        setLoding(false);
        console.log(filter);
      }

      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updateList = data.filter((it) => it.category === cat);
    setFIlter(updateList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => setFIlter(data)}
          >
            all
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("women's clothing")}
          >
            Women's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("jewelery")}
          >
            Jewelery
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("electronics")}
          >
            Electrinc
          </button>
        </div>
        {filter.map((products) => {
          return (
            <>
              <div className="col-md-3 mb-4" key={products.id}>
                <div class="card h-100 text-center p-4" key={products.id}>
                  <img
                    src={products.image}
                    className="card-img-top"
                    alt={products.title}
                    height="250px"
                  />
                  <div class="card-body">
                    <h5 className="card-title m-0">
                      {products.title.substring(0, 12)}...
                    </h5>
                    <p className="card-text lead fw-bold">${products.price}</p>
                    <NavLink
                      to={`/products/${products.id}`}
                      className="btn btn-outline-dark"
                    >
                      Buy Now
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5 ">
        <div className="row">
          <div className="col-12 mb-5">
            <h1
              className="text-capitalize disabled-6 fw-bolder text-center
            "
            >
              latest Products
            </h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center ">
          {loding ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
