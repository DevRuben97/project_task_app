import React, { useState } from "react";
import styled from "styled-components";
import { Modal, Form, Input, Divider, Button } from "antd";
import {CheckOutlined} from '@ant-design/icons'

import Select from "../Select";
import UploadFiles from "../UploadFiles";
import CommentInput from "./CommentInput";
import UserComments from "./UserComments";

const FormItem = Form.Item;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 150px;
  grid-gap: 10px;
`;
const StateContainer = styled.div`
  grid-column: 2/3;
`;

const selectOptions = [
  { label: "Por Hacer", value: 1 },
  { label: "En Progreso", value: 2 },
];

const FormTask = ({ edit, taskId, show, setShowModal }) => {

  const [stateOptions, setStateOptions] = useState(selectOptions);

  function save() {}

  return (
    <Modal
      visible={show}
      title={edit ? "Editar Tarea" : "Nueva Tarea"}
      onOk={save}
      onCancel={() => setShowModal(false)}
      footer={false}
      cancelText="Cancelar"
      width="800px"
    >
      <GridContainer>
        <Form layout="vertical">
          <FormItem label="Titulo" >
            <Input
              type="text"
              placeholder="Introduce el nombre de la tarea"
              size="large"
            />
          </FormItem>
          <FormItem label="Descripción">
            <Input.TextArea autoSize />
          </FormItem>
          <Divider plain>Adjuntar Archivos</Divider>
          <UploadFiles />
          <br />
          <Divider plain>Comentarios</Divider>
          <CommentInput />
          <UserComments taskId={taskId} />
        </Form>
        <StateContainer>
          <div style={{ marginTop: "12px" }}>
            <label>Estado: </label>
            <Select
              options={stateOptions}
              onOptionChange={(value) => console.log(value)}
              width="100%"
              withBorder={false}
              arrow={false}
            />
          </div>
          <div style={{ marginTop: "12px" }}>
            <label>Responsable:</label>
            <Select
              options={stateOptions}
              onOptionChange={(value) => console.log(value)}
              width="100%"
              withBorder={false}
              arrow={false}
            />
          </div>
          <div style={{ marginTop: "12px" }}>
            <label>Creador:</label>
            <Input type="text" readOnly disabled style={{border: 'none'}}/>
          </div>
          <div style={{ marginTop: "12px" }}>
            <label>Finalización</label>
            <Input type="date"/>
          </div>
        </StateContainer>
      </GridContainer>
    </Modal>
  );
};

export default FormTask;
