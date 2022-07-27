import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { decreaseQuant, increaseQuant } from "../../Redux/Action";
import "./IncDecButton.css"
const IncDecButton = () => {
  const dispatch = useDispatch();
  const quantity = useSelector(state=>state.quantity);

  return (
    <div className="increment-decrement-button">
      <div className="row counter-sec-row">
        <div className="col counter-div">
          <p style={{ fontSize: "15px", margin: "5px 10px 5px 10px" }}>
            {quantity}
          </p>
        </div>
        <div className="col inc-dec-btn-div">
          <ArrowDropUpIcon
            style={
              quantity === 3
                ? { color: "rgb(165, 162, 162)" }
                : { color: "black" }
            }
            onClick={() => {
              dispatch(increaseQuant())
            }}
            fontSize="0.1rem"
          />
          <ArrowDropDownIcon
            style={
              quantity === 1
                ? { color: "rgb(165, 162, 162)" }
                : { color: "black" }
            }
            onClick={() => {
              dispatch(decreaseQuant())
            }}
            fontSize="0.1rem"
          />
        </div>
      </div>
    </div>
  );
};

export default IncDecButton;
