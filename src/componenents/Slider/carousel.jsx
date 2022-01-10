import React from "react";
import { Carousel } from "antd";
import bn1 from "../../assets/banner1.jpg";
import bn2 from "../../assets/banner2.jpg";
// const contentStyle = {
//   height: "260px",
//   color: "#fff",
//   lineHeight: "160px",
//   textAlign: "center",
//   background: "#364d79",
// };

function InfoBeasiswa() {
  return (
    <Carousel autoplay>
      <div>
        <img src={bn1} alt="" style={{ width: "100%", height: "280px" }} />
      </div>
      <div>
        <img src={bn2} alt="" style={{ width: "100%", height: "280px" }} />
      </div>
    </Carousel>
  );
}

export default InfoBeasiswa;
