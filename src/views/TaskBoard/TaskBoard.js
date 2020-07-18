import React, { useState, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { DragDropContext } from "react-beautiful-dnd";
import { v4 as uuid } from "uuid";
import BoardColumns from "../../components/TaskBoard/BoardColumns";
import FormTask from "../../components/TaskBoard/FormTask";

import ViewHeader from '../../components/ViewHeader';

const columnsFromBankend = [
  {
    id: uuid(),
    name: "Por Hacer",
    items: [
      {
        id: uuid(),
        content: "Modificar el mantenimiento de contactos",
      },
      {
        id: uuid(),
        content: "Crear api de seguimientos",
      },
    ],
  },
  {
    id: uuid(),
    name: "En Progreso",
    items: [
      {
        id: uuid(),
        content: "Crear TaskBoard",
      },
      {
        id: uuid(),
        content: "Refactorizar el codigo del bankend",
      },
    ],
  },
];

const TaskBoard = () => {
  //States:
  const [columns, setColumsn] = useState(columnsFromBankend);
  const [showModal, setShowModal] = useState(false);
  const [taskId, setTaskId] = useState(null);

  function DragEnd(result, columns, setColumns) {
    if (!result.destination) return;

    const { source, destination } = result;
  }

  function TaskSelect(task) {
    setShowModal(true);
    setTaskId(task);
    console.log(task);
  }

  return (
    <Fragment>
        <ViewHeader
        title="Proyecto de Prueba"
        subTitle="Seguimiento de las Tareas"
        createButton={{
            text: 'Crear Tarea',
            onClick: ()=> setShowModal(true)
        }}
        />
      <div
        style={{ display: "flex", justifyContent: "center", height: "100%" }}
      >
        <DragDropContext onDragEnd={DragEnd}>
          <BoardColumns columns={columns} onTaskSelect={TaskSelect} />
        </DragDropContext>
      </div>
      <FormTask show={showModal} setShowModal={setShowModal} taskId={taskId} />
    </Fragment>
  );
};

export default withRouter(TaskBoard);
