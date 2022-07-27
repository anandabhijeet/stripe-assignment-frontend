import React from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { handleClick } from "../../Redux/Action";
import "./BuyButton.css"


const BuyButton = () => {
  const productData = useSelector((state) => state.gettingProduct[0]);
  const quantity = useSelector(state=>state.quantity);
  const dispatch = useDispatch();
  const product = {
    name:productData?.name,
    quantity:quantity,
    unit_amount:productData?.price,
    image:productData?.images[0]
  }
  const paymentStatus = useSelector((state) => state.liveStatus);
  return (
    <div className="buy-button" onClick={() => dispatch(handleClick(product))}>
      {paymentStatus ? <p>Buy Now</p> : <div className="loader"></div>}
    </div>
  );
};

export default BuyButton;
