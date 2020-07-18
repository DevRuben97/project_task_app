import React, { Fragment } from "react";
import styled from "styled-components";
import { Divider, Avatar } from "antd";
import { Draggable } from "react-beautiful-dnd";

const CardContainer = styled.div`
  min-height: 100px;
  user-select: none;
  margin-bottom: 8px;
  padding: 16px;
  background-color: ${props=> props.isDragging? "#EBECF0": "white"};
`;

const CardActions= styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`

const ColumnTasks = ({ items, onTaskSelect }) => {

  function task_select(){
    onTaskSelect('TASK-0001');
  }
  return (
    <Fragment>
      {items.map((task, index) => (
        <Draggable key={task.id} draggableId={task.id} index={index}>
          {(TaskProvided, Tasksnapshot) => (
            <CardContainer
              ref={TaskProvided.innerRef}
              isDragging={Tasksnapshot.isDragging}
              {...TaskProvided.draggableProps}
              {...TaskProvided.dragHandleProps}
              style={{...TaskProvided.draggableProps.style}}
              onClick={task_select}

            >
             <div>
             <h2>{task.content}</h2>
              <label>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </label>
             </div>
             <Divider/>
              <CardActions>
                <Avatar size="small" gap={1} style={{backgroundColor: '#1890FF'}}>
                  RB
                </Avatar>

                <label>
                  {"TASK-000"+ (index+1)}
                </label>
              </CardActions>
            </CardContainer>
          )}
        </Draggable>
      ))}
    </Fragment>
  );
};

export default ColumnTasks;
