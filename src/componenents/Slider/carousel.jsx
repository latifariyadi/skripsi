import React from "react";
import { Carousel } from "antd";
import bn from "../../assets/baner.png";
const contentStyle = {
  height: "260px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

function InfoBeasiswa() {
  return (
    <Carousel autoplay>
      <div>
        <img src={bn} alt="" style={{ width: "100%", height: "100%" }} />
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  );
}

export default InfoBeasiswa;
