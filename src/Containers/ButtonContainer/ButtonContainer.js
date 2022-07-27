import React, { useState } from "react";

import "./ButtonContainer.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import BuyButton from "../BuyButton/BuyButton";
import IncDecButton from "../IncDecButton/IncDecButton";

const ButtonContainer = () => { 
  const productData = useSelector((state) => state.gettingProduct[0]);
  const quantity = useSelector(state=>state.quantity);

  const [margin, setMargin] = useState("96px");
  const changeMargin = () => {
    const px = "px";
    const marginvalue = 96 - window.scrollY;
    if (marginvalue > 25) {
      const newMarginValue = marginvalue.toString();
     
      setMargin(newMarginValue.concat(px));
    }

    if (marginvalue <= 25) {
      setMargin("25px");
    }
  };
  window.addEventListener("scroll", changeMargin);

 
  return (
    <nav
      className="navbar navbar-expand-lg bg-light fixed-top button-navbar d-none d-lg-block d-xl-block"
      style={{ marginTop: margin }}
    >
      <div className="container about-container">
        <p className="about-product">About Product</p>
        <div className="nav-options-container">
          <p style={{ marginRight: "20px", marginTop: "10px" }}>
            Price  
            <span>
              <strong> <span>&#8377;</span>{quantity?productData?.price*quantity:productData?.price}</strong>
            </span>
          </p>

         <IncDecButton/>
          <BuyButton/>
         
        </div>
      </div>
    </nav>
  );
};

export default ButtonContainer;
