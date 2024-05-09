import React from "react";
import CartItems from "./CartItems";
import BillDetails from "./BillDetails";
import Header from "./Header";

const Cart = () => {
  return (
    <>
      <Header />
      <main className="py-16">
        <div className="container 2xl:px-8 px-2 mx-auto">
          <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
          <div className="cartListContainer">
            <CartItems />
            {/* <!-- Bill Details --> */}
            <div>
              <BillDetails />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Cart;
