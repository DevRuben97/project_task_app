import React from 'react';
import {Menu, Layout} from 'antd';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

import MenuRoutes from './MenuRoutes';

const {Header}= Layout;

const Logo= styled.div`
    width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  float: left;
  color: white;
  display: flex;
  align-items: center;
  align-content: center;
  cursor: pointer;

  &> h2{
      color: white;
  }
`

const TopBar= ()=> {

    return (
        <Header>
          <Logo className="logo" ><h2>TASKAPP</h2></Logo>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            {MenuRoutes.map((item, index)=> (
                <Menu.Item key={item.key}><Link to={item.link}>{item.icon()} {item.label}</Link></Menu.Item>
            ))}
          </Menu>
        </Header>
    )
}

export default TopBar;