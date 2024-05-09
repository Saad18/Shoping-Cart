import React from "react";
import Product from "./Product";
import ProductForm from "./ProductForm";
import Header from "./Header";

const Home = () => {
  return (
    <>
      <Header />
      <main className="py-16">
        <div className="productWrapper">
          <div className="productContainer" id="lws-productContainer">
            <Product />
          </div>
          <div>
            <ProductForm />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
