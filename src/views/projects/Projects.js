import React, { useState, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

import ProjectItem from "../../components/projects/ProjectItem";
import FormProject from "../../components/projects/FormProject";

import styled from "styled-components";

const Conteiner = styled.div`
  width: 70%;
  margin: 0 auto;
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Projects = () => {
  const [showModal, setShowModal] = useState(false);

  const projects = [
    {
      id: 1,
      name: "Primer Proyecto",
    },
    {
      id: 1,
      name: "Segundo projecto",
    },
  ];

  function add_project() {
    setShowModal(true);
  }

  return (
    <Fragment>
      <Conteiner>
        <div style={{ marginTop: "15px", textAlign: "center" }}>
          <HeaderContainer>
            <h2>Listado de Proyectos</h2>
            <Button type="primary" onClick={add_project}>
              <PlusCircleOutlined /> Nuevo Proyecto
            </Button>
          </HeaderContainer>
          {projects.map((item, index) => (
            <ProjectItem projectInfo={item.name} key={index} />
          ))}
        </div>
      </Conteiner>
      <FormProject show={showModal} setShowModal={setShowModal} edit={false} />
    </Fragment>
  );
};

export default withRouter(Projects);
