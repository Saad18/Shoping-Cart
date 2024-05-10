import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Header = () => {
  const cartItems = useSelector((state) => state.cart);
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  return (
    <nav class="bg-[#171C2A] py-4">
      <div class="navBar">
        <Link to={"/"}>
          <img src={logo} alt="LWS" class="max-w-[140px]" />
        </Link>
        <div class="flex gap-4">
          <Link to={"/"} class="navHome" id="lws-home">
            Home
          </Link>
          <Link to={"/cart"} class="navCart" id="lws-cart">
            <i class="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
            <span id="lws-totalCart">{totalQuantity}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
