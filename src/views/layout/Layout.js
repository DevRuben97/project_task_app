import React from "react";
import { Layout as AntLayout, Breadcrumb } from "antd";
import styled from 'styled-components';
import {Switch, Route} from 'react-router-dom'
import {authenticatedRoutes} from '../../Routes'

import TopBar from '../../components/layout/TopBar';

const {Content, Footer } = AntLayout;


const Container = styled.div`
height: 100vh;
`

const SiteConteiner= styled.div`
background: #fff;
  padding: 24px;
  min-height: 85vh;
  margin-top: 15px;
`

const Layout = () => {
  return (
    <Container>
      <AntLayout className="layout">
        <TopBar/>
        <Content style={{ padding: "0 50px" }}>
          <SiteConteiner>
              <Switch>
                {authenticatedRoutes.map((item, index)=> (
                    <Route path={item.path} component={item.index} exact={item.exact} key={index}/>
                ))}
              </Switch>
            </SiteConteiner>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Applicación desarrollada por: <strong>Ruben A. Batista Santos.</strong> 
        </Footer>
      </AntLayout>
    </Container>
  );
};


export default Layout;