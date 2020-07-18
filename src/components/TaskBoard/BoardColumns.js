import React, { Fragment } from "react";
import { Droppable } from "react-beautiful-dnd";
import ColumnTasks from "./ColumnTasks";
import styled from "styled-components";

const ColumnContainer = styled.div`
  margin: 0px 5px 0px 5px;
  padding: 10px;
  width: 250px;
  min-height: 500px;
  background-color: ${(props) =>
    props.isDraggingOver ? "#F4F5F7" : "#F4F5F7"};
`;

const ColumnHeader = styled.div`
padding-bottom: 5px;
text-align: center;
`;

const BoardColumns = ({ columns, onTaskSelect }) => {
  return (
    <Fragment>
      {columns.map((column) => (
        <>
          <Droppable droppableId={column.id}>
            {(provided, snapshot) => (
              <ColumnContainer
                {...provided.droppableProps}
                ref={provided.innerRef}
                isDraggingOver={snapshot.isDraggingOver}
              >
                <ColumnHeader>
                    {column.name}
                </ColumnHeader>
                <ColumnTasks items={column.items} onTaskSelect={onTaskSelect} />
                {provided.placeholder}
              </ColumnContainer>
            )}
          </Droppable>
        </>
      ))}
    </Fragment>
  );
};

export default BoardColumns;
