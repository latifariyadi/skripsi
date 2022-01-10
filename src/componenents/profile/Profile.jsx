import React from "react";
import { Card, Input, Row, Col } from "antd";
import "./profile.css";

function Profile() {
  return (
    <Card
      title="Profile"
      style={{
        width: "100%",
      }}
    >
      <div>
        <Row>
          <Col span={8}>
            <div className="user">
              <img
                src={"https://picsum.photos/seed/13/200"}
                alt=""
                style={{
                  width: 76,
                  height: 76,
                  borderRadius: "100px",
                }}
              />
              <div
                className="nama"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginLeft: "20px",
                }}
              >
                <p>Latif Ariyadi</p>
                <p>
                  <span>SISWA SMAN 12 OKU TIMUR</span>
                </p>
              </div>
            </div>
          </Col>
          <Col span={16}>
            <div className="biodata">
              <div>
                <label htmlFor="">Nama</label>
                <Input />
              </div>
              <div>
                <label htmlFor="">NIK</label>
                <Input />
              </div>
              {/* <div>
                <Input.Group compact>
                  <Select defaultValue="Option1">
                    <Option value="Option1">Option1</Option>
                    <Option value="Option2">Option2</Option>
                  </Select>
                  <Input
                    style={{ width: "50%" }}
                    defaultValue="input content"
                  />
                  <InputNumber />
                </Input.Group>
              </div> */}
              <div>
                <label htmlFor="">Tanggal Lahir</label>
                <Input />
              </div>
              <div>
                <label htmlFor="">Alamat</label>
                <Input />
              </div>
              <div>
                <label htmlFor="">Kelas</label>
                <Input />
              </div>
              <div>
                <label htmlFor="">Nama Ibu Kandung</label>
                <Input />
              </div>
              <div>
                <label htmlFor="">Nama Ayah Kandung</label>
                <Input />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Card>
  );
}

export default Profile;
