import React from "react";
import "./app.css";
import Nvabar from "./components/Navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Product from "./components/Product";

function app() {
  return (
    <>
      <Nvabar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
    </>
  );
}

export default app;
