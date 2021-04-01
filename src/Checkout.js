import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          // src="https://images-na.ssl-images-amazom.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZBBtsqzdEBPX3qnLzR4gizYD4EGKzX2Zg&usqp=CAU"
          alt=""
        />

        <div>
          <h2 className="checkout__title">your Shopping Basket</h2>
          {/* Basket item */}
          {/* Basket item */}
          {/* Basket item */}
          {/* Basket item */}
          {/* Basket item */}
          {/* Basket item */}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
