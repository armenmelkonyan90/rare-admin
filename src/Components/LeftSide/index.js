import {
    DesktopOutlined,
    PieChartOutlined,
    NotificationOutlined,
    UserOutlined,
    SettingOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
  
  } from '@ant-design/icons';
  import { Breadcrumb, Layout, Menu } from 'antd';
  import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Logout from '../../Pages/Logout';
import styles from "./LeftSide.module.css";
  const { Header, Content, Footer, Sider } = Layout;
  
 const LeftSide = () => {
    const [collapsed, setCollapsed] = useState(false);
const navigate =  useNavigate();
     const menuItem = [
        { index: '3', label: "Статистика", icon: <PieChartOutlined />, key: 'statistic', },
        { index: '1', label: "Объявления", icon: <DesktopOutlined />, children: [
          {
            label: 'Новые',
            key: 'new-ads',
            path: 'ads'
          },
          {
            label: 'Опубликованные',
            key: 'accepted',
          },
          {
            label: 'Отклоненные',
            key: 'rejected',
          },
        ],},
        { index: '2', label: "Пользователи", icon: <UserOutlined />, 
         children: [
          {
            label: 'Все пользователи',
            key: 'all',
          },
          {
            label: 'Новые',
            key: 'new',
          },
          {
            label: 'Черный список',
            key: 'blocked',
          },
        ], },
        { index: '5', label: "Уведомления", icon: <NotificationOutlined />,
        children: [
          {
            label: 'Новое уведомление',
            key: 'notice',
          },
          {
            label: 'История уведомлений',
            key: 'setting:8',
          },       
        ],   },
        { index: '4', label: "Настройки", icon: <SettingOutlined />,  key: 'settings' },       
       
    ]
    const onClick = (e) => {
      console.log('click ', e);
      navigate(`${e.key}`,{state:e.key});

    };
    return (
      <Layout
        style={{
          minHeight: '100vh',
        }}
      >
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div className={styles.lefttop}> App Admin</div>
          <div className={styles.menutitle}>Меню</div>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: 'calc(100% - 60px)' }}
            items={menuItem}
            onClick={onClick}
          //   items= {
          //     menuItem?.map((element) => {
          //       return {
          //         label: <Link to={element?.path}>{element.title}</Link>,
          //         icon: element.icon,
          //         key: element?.index
          //       }
          //     })
          // }
        />

        </Sider>


     



        <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
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