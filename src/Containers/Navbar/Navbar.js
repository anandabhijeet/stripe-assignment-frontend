import React from "react";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import "./Navbar.css";

const Navbar = () => {
  

  return (
    <nav className={"navbar main-navbar navbar-expand-lg bg-light"}>
      <div className="container">
        <AutoAwesomeMosaicIcon sx={{ color: "#0156FF" }} />
        <button
          className="navbar-toggler py-0 px-0 my-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: 500,
                  marginRight: "12px",
                }}
              >
                Laptops
              </p>
            </li>
            <li className="nav-item">
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: 500,
                  marginRight: "12px",
                }}
              >
                Desktop PCs
              </p>
            </li>
            <li className="nav-item">
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: 500,
                  marginRight: "12px",
                }}
              >
                Networking Devices
              </p>
            </li>
            <li className="nav-item">
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: 500,
                  marginRight: "12px",
                }}
              >
                Printer & Scanner
              </p>
            </li>
            <li className="nav-item">
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: 500,
                  marginRight: "12px",
                }}
              >
                PC Parts
              </p>
            </li>
            <li className="nav-item">
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: 500,
                  marginRight: "12px",
                }}
              >
                All Other Parts
              </p>
            </li>
            <li className="nav-item">
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: 500,
                  marginRight: "12px",
                }}
              >
                Repairs
              </p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
