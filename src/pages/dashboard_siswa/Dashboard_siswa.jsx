import React from "react";
import { Layout, Menu } from "antd";
// import { Route, Link } from "react-router-dom";
import "./dashboard_siswa.css";
import logo from "../../assets/logo.png";
import Login from "../aunth/Login";
import Profile from "../../componenents/profile/Profile";

import {
  CalendarOutlined,
  FileTextOutlined,
  ProfileOutlined,
  FileDoneOutlined,
  PieChartOutlined,
  QuestionCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";

import InfoBeasiswa from "../../componenents/Slider/Carousel";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class DashboardSiswa extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Dashboard
            </Menu.Item>

            <Menu.Item key="2" icon={<CalendarOutlined />}>
              Jadwal
            </Menu.Item>
            <Menu.Item key="3" icon={<FileTextOutlined />}>
              Kelas
            </Menu.Item>
            <Menu.Item key="4" icon={<ProfileOutlined />}>
              Kehadiran
            </Menu.Item>
            <SubMenu key="sub1" icon={<FileDoneOutlined />} title="Nilai">
              <Menu.Item key="5">Tugas</Menu.Item>
              <Menu.Item key="6">UTS</Menu.Item>
              <Menu.Item key="7">UAS</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<UserOutlined />}>
              Profil
            </Menu.Item>
            <Menu.Item key="10" icon={<QuestionCircleOutlined />}>
              Bantuan
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header
            className="header"
            style={{ padding: "20px", backgroundColor: "#fff" }}
          >
            <div className="logo">
              <img
                src={logo}
                alt="logo"
                style={{ width: "42px", height: "42px" }}
              />
              <h4>SISTEM INFORMASI AKADEMIK SMAN 12 OKU TIMUR</h4>
            </div>
            <div className="user">
              <div className="nama">
                <p>Latif Ariyadi</p>
                <p>
                  <span>011701503125095</span>
                </p>
              </div>
              <img
                src={"https://picsum.photos/seed/13/200"}
                alt=""
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "100px",
                }}
              />
            </div>
          </Header>
          <Content
            style={{
              margin: "20px 16px",
            }}
          >
            <InfoBeasiswa />
            <Login />
            <Profile />
          </Content>
          <Footer style={{ textAlign: "center" }}>
            SMAN 12 OKU TIMUR ©2022 Created by Latif Ariyadi
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default DashboardSiswa;
