import React,{useState} from 'react';
import { withRouter } from 'react-router-dom';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import {v4 as uuid} from 'uuid';
import Column from 'antd/lib/table/Column';


const columnsFromBankend= [
    {
        id: uuid(),
        name: 'Por Hacer',
        items: [
            {
                id: uuid(),
                content: 'Primera tarea'
            },
            {
                id: uuid(),
                content: 'Segunda tarea'
            }
        ]

    },
    {
        id: uuid(),
        name: 'Por Hacer',
        items: [
            {
                id: uuid(),
                content: 'Primera tarea'
            },
            {
                id: uuid(),
                content: 'Segunda tarea'
            }
        ]

    }
]

const TaskBoard= ()=> {

    const [columns, setColumsn]= useState(columnsFromBankend);

    function DragEnd(result, columns, setColumns){
        if (!result.destination) return;

        const {source, destination}= result;
    }


    return (
        <div style={{display: 'flex', justifyContent: 'center', height: '100%'}}>
            <DragDropContext onDragEnd={DragEnd}>
                {columns.map((column)=> (
                    <Droppable droppableId={column.id}>
                        {(provided, snapshot)=> (
                            <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            style={{
                            background: snapshot.isDraggingOver? 'blue': 'gray',
                            padding: 4,
                            width: 250,
                            minHeight: 500
                            }}
                            >
                                {column.items.map((task, index)=> (
                                    <Draggable key={task.id} draggableId={task.id} index={index}>
                                        {(TaskProvided, Tasksnapshot)=> (
                                            <div 
                                            ref={TaskProvided.innerRef} 
                                            {...TaskProvided.draggableProps}
                                            {...TaskProvided.dragHandleProps}
                                            style={{
                                                userSelect: 'none',
                                                padding: 16,
                                                margin: '0 0 8px 0',
                                                minHeight: '50px',
                                                backgroundColor: Tasksnapshot.isDragging? '#263B4A': '#456C86',
                                                color: 'white',
                                                ...TaskProvided.draggableProps.style
                                            }}
                                            >
                                                {task.content}
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                ))}
            </DragDropContext>
        </div>
    )
}


export default withRouter(TaskBoard);


