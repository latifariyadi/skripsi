import React from "react";
import { Row, Col, Button } from "antd";
import "./login.css";
import logo from "../../assets/logo.png";

function Login() {
  return (
    <Row className="login">
      <Col
        span={12}
        className="login-kiri"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "Column",
            gap: "20px",
            width: "50%",
          }}
        >
          <div className="login-title">Login Sebagai?</div>
          <Button
            type="primary"
            className="btn-siswa"
            style={{
              background: "#7DC67D",
              borderColor: "#7DC67D",
              height: "52px",
            }}
          >
            Siswa
          </Button>
          <Button
            type="primary"
            style={{
              background: "#F9A94A",
              borderColor: "#F9A94A",
              height: "52px",
            }}
          >
            Guru
          </Button>
          <Button
            type="primary"
            style={{
              background: "#4362E3",
              borderColor: "#4362E3",
              height: "52px",
            }}
          >
            Admin
          </Button>
        </div>
      </Col>
      <Col
        span={12}
        className="login-kanan"
        style={{
          backgroundColor: "#83D2F7",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="login-logo">
          <img src={logo} alt="" />
          <h4>SMAN 12 OKU TIMUR</h4>
        </div>
      </Col>
    </Row>
  );
}

export default Login;
