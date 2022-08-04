import React, { useEffect } from "react";
import BlackNavBar from "./Containers/BlackNavbar/BlackNavBar";
import Navbar from "./Containers/Navbar/Navbar";
import ButtonContainer from "./Containers/ButtonContainer/ButtonContainer";
import { useDispatch, useSelector } from "react-redux/es/exports";
// import Swiper core and required modules
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./App.css";
import { getProduct } from "./Redux/Action";
import BottomAppBar from "./Containers/BottomAppBar/BottomAppBar";

const App = () => {
  const productData = useSelector((state) => state.gettingProduct[0]);

  const MySwal = withReactContent(Swal);

  const handleSuccess = () => {
    console.log("success");
    MySwal.fire({
      icon: "success",
      title: "Payment was successful",
      timer: 4000,
    });
  };
  const handlefailure = () => {
    MySwal.fire({
      icon: "error",
      title: "Payment failed",
      timer: 4000,
    });
  };

  const location_url = window.location.href;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const checkQueryParams = () => {
    const url_array = location_url.split("/");
    

    if (url_array[3] === "stripepaymentsuccess") {
      handleSuccess();
    }

    if (url_array[3] === "stripepaymentcancel") {
      handlefailure();
    }
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  useEffect(() => {
    checkQueryParams();
  }, [checkQueryParams, location_url]);

  return (
    <div className="App">
      <BlackNavBar />

      <Navbar />
      <ButtonContainer />
      <BottomAppBar />
      <div className="container-fluid body-container">
        <div className="row body-container-row">
          <div
            className="col col-lg-7 discription-section"
            style={{ paddingTop: "35px" }}
          >
            <div className="discription-section-container">
              <p className="about-product d-lg-none d-xl-none d-md-block d-sm-block d-xs-block ">
                About Product
              </p>
              <p
                className="d-none d-lg-block d-kl-block"
                style={{ color: "rgb(165, 162, 162)" }}
              >
                {productData?.brand}
              </p>
              <h1>{productData?.name}</h1>

              <p style={{ fontWeight: "lighter" }}>{productData?.subtitle}</p>
              <ul>
                {productData?.description.map((des, index) => {
                  return <li key={index}>{des}</li>;
                })}
              </ul>
              <div>
                <p className="py-3">{productData?.model_number}</p>
              </div>
            </div>
          </div>
          <div className="col col-lg-5 crousel-section px-0">
            <Swiper 
            className="swiper-container"
              // install Swiper modules
              modules={[Pagination, Autoplay]}
              pagination={true}
              slidesPerView={1}
              loop
              autoplay
            >
              <SwiperSlide className="swiperjs">
                <img
                  src={productData?.images[0]}
                  height="400px"
                  alt="slide_img"
                />
              </SwiperSlide>
              <SwiperSlide className="swiperjs">
                <img
                  src={productData?.images[1]}
                  height="400px"
                  alt="slide_img"
                />
              </SwiperSlide>
              <SwiperSlide className="swiperjs">
                <img
                  src={productData?.images[2]}
                  height="400px"
                  alt="slide_img"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
