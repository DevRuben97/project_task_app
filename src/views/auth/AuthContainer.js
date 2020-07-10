import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import Background from "../../assets/img/cool-background.png";

import Login from "../../components/Auth/Login";

import { Card } from "antd";

const Container = styled.div`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
`;

const CardContainer= styled.div`
width: 30%;
margin: 0 auto;
padding-top: 20vh;
`

const tabList = [
  {
    key: "login",
    tab: "Inicio Sessión",
  },
  {
    key: "register",
    tab: "Registro",
  },
];

const contentList = {
  login: <Login />,
  register: <p>En desarrollo</p>,
};

const AuthContainer = () => {
  const [activeKey, setActiveKey] = useState("login");

  return (
    <Container image={Background}>
      <CardContainer>
      <Card
        headStyle={{fontSize: '25px'}}
        title="Autenticación"
        tabList={tabList}
        activeTabKey={activeKey}
        onTabChange={(key) => setActiveKey(key)}
      >
        {contentList[activeKey]}
      </Card>
      </CardContainer>
    </Container>
  );
};

export default withRouter(AuthContainer);
