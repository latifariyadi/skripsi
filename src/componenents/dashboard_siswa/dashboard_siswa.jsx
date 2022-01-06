import React from 'react';
import { Layout, Menu } from 'antd';
import "./dashboard_siswa.css";
import {
  CalendarOutlined,
  FileTextOutlined,
  ProfileOutlined,
  FileDoneOutlined,
  PieChartOutlined,
  QuestionCircleOutlined,
  UserOutlined,
} from '@ant-design/icons';
import Pengumuman from '../pengumuman/pengumuman';
import InfoBeasiswa from '../Slider/carousel';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class DashboardSiswa extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Dashboard
            </Menu.Item>
            <Menu.Item key="2" icon={<CalendarOutlined />}>
              Jadwal
            </Menu.Item>
            <Menu.Item key="3" icon={<FileTextOutlined />}>
              Tugas 
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
          <Header className='header' style={{ padding: '20px' }}>
            <div className="logo" >
              <h4>SISTEM INFORMASI AKADEMIK SMAN 12 OKU TIMUR</h4>
            </div>
          </Header>
          <Content style={{ margin: '20PX 16px' }}>     
            <InfoBeasiswa />     
            <div className="site-layout-background" style={{ minHeight: 360 }}>
              <Pengumuman />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>SMAN 12 OKU TIMUR ©2022 Created by Latif Ariyadi</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default DashboardSiswa;