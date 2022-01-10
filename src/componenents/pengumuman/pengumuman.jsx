import React from "react";
import { Card } from "antd";

function Pengumuman() {
  return (
    <div className="site-card-border-less-wrapper" style={{ margin: "40px 0" }}>
      <Card title="PENGUMUMAN" bordered={false} style={{ width: "100%" }}>
        <div className="site-card-border-less-wrapper">
          <Card title="Card title" bordered={true} style={{ width: "100%" }}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </Card>
        </div>
      </Card>
    </div>
  );
}

export default Pengumuman;
