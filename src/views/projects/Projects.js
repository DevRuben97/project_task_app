import React, { useState, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { List, Skeleton } from "antd";

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
  const [loading, setLoading] = useState(false);
  const [projectSelected, setSelected] = useState(null);

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
          <Skeleton
            loading={loading}
            active
            title={{ width: 0 }}
            paragraph={{ rows: 5 }}
          >
            <List
              itemLayout="horizontal"
              dataSource={projects}
              renderItem={(item) => (
                <ProjectItem
                  name={item.name}
                  id={item.id}
                  onEdit={() => {
                    setShowModal(true);
                    setSelected(item.id);
                  }}
                />
              )}
            />
          </Skeleton>
        </div>
      </Conteiner>
      <FormProject
        show={showModal}
        setShowModal={(value) => {
          setShowModal(value);
          setSelected(null);
        }}
        edit={projectSelected}
      />
    </Fragment>
  );
};

export default withRouter(Projects);
