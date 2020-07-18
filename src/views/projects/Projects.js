import React, { useState, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

import ProjectItem from "../../components/projects/ProjectItem";
import FormProject from "../../components/projects/FormProject";
import ViewHeader from "../../components/ViewHeader";

import styled from "styled-components";

const Conteiner = styled.div`
  width: 70%;
  margin: 0 auto;
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
      <ViewHeader
        title="Listado de Proyectos"
        showBackIcon={false}
        createButton={{
          text: "Crear Proyecto",
          onClick: () => setShowModal(true),
        }}
      />
      <Conteiner>
        <div style={{ marginTop: "15px", textAlign: "center" }}>
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
