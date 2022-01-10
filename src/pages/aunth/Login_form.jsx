import React from "react";
import { Row, Col, Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./login.css";
import logo from "../../assets/logo.png";

function LoginForm() {
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
          <div className="login-title">Selamat Datang</div>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
                style={{
                  height: "42px",
                }}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                style={{
                  height: "42px",
                }}
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
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

export default LoginForm;
