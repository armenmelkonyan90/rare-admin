import {
    DesktopOutlined,
    PieChartOutlined,
    NotificationOutlined,
    UserOutlined,
    SettingOutlined,
  
  } from '@ant-design/icons';
  import { Breadcrumb, Layout, Menu } from 'antd';
  import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Logout from '../../Pages/Logout';
  const { Header, Content, Footer, Sider } = Layout;
  
 const LeftSide = () => {
    const [collapsed, setCollapsed] = useState(false);

     const menuItem = [
        { index: '1', title: "Объявления", icon: <DesktopOutlined />, path: 'ads' },
        { index: '2', title: "Пользователи", icon: <UserOutlined />,path: 'all-users' },
        { index: '3', title: "Статистика", icon: <PieChartOutlined />, path: 'statistic' },
        { index: '4', title: "Настройки", icon: <SettingOutlined />, path: 'settings' },
        { index: '5', title: "Уведомления", icon: <NotificationOutlined />, path: 'notice'  },
       
    ]

    return (
      <Layout
        style={{
          minHeight: '100vh',
        }}
      >
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: 'calc(100% - 60px)' }}
            items= {
              menuItem?.map((element) => {
                return {
                  label: <Link to={element?.path}>{element.title}</Link>,
                  icon: element.icon,
                  key: element?.index
                }
              })
          }
        />

        </Sider>


     



        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
            }}
          >
            <Logout />
            </Header>
          <Content
            style={{
              margin: '0 16px',
            }}
          >
            {/* <Breadcrumb
              style={{
                margin: '16px 0',
              }}
            >
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb> */}
            
             <Outlet />
          </Content>
          <Footer
            style={{
              textAlign: 'center',
            }}
          >
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  };
  
  export default LeftSide;