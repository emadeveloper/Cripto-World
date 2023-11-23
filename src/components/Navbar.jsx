import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import icon from '../components/images/cryptocurrency.png';

const Navbar = () => {
  const menuItems = [
    { key: 'home', icon: <HomeOutlined />, link: '/', text: 'Home' },
    { key: 'cryptocurrencies', icon: <FundOutlined />, link: '/cryptocurrencies', text: 'Cryptocurrencies' },
    { key: 'exchanges', icon: <MoneyCollectOutlined />, link: '/exchanges', text: 'Exchanges' },
    { key: 'news', icon: <BulbOutlined />, link: '/news', text: 'News' },
  ];

  return (
    <div className='nav-container'>
      <div className="logo-container">
        <Avatar src={icon} size='large' />
        <Typography.Title level={2} className='logo'>
          <Link to='/'>CryptoWorld</Link>
        </Typography.Title>
      </div>
      <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['home']}>
        {menuItems.map(item => (
          <Menu.Item key={item.key} icon={item.icon}>
            <Link to={item.link}>{item.text}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
};

export default Navbar;
