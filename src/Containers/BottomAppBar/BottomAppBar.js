import React from "react";
import BuyButton from "../BuyButton/BuyButton";
import IncDecButton from "../IncDecButton/IncDecButton";
import { useSelector } from "react-redux/es/exports";
import "./BottomAppBar.css";
const BottomAppBar = () => {
  const productData = useSelector((state) => state.gettingProduct[0]);
  const quantity = useSelector((state) => state.quantity);
  return (
    <nav className="navbar bottom-appbar navbar-light bg-light fixed-bottom d-lg-none d-xl-none d-sm-block d-md-block">
      <div className="container">
        <div>
          <p style={{ marginRight: "20px", marginTop: "10px" }}>
            Price
            <span>
              <strong>
                ${quantity ? productData?.price * quantity : productData?.price}
              </strong>
            </span>
          </p>
        </div>
        <div className="bottomAppBar-buttons">
          <IncDecButton /> <BuyButton />
        </div>
      </div>
    </nav>
  );
};

export default BottomAppBar;
