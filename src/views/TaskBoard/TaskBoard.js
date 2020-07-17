import React,{useState, Fragment} from 'react';
import { withRouter } from 'react-router-dom';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import {v4 as uuid} from 'uuid';
import BoardColumns from '../../components/TaskBoard/BoardColumns';
import FormTask from '../../components/TaskBoard/FormTask';


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

    //States:
    const [columns, setColumsn]= useState(columnsFromBankend);
    const [showModal, setShowModal]= useState(false);
    

    function DragEnd(result, columns, setColumns){
        if (!result.destination) return;

        const {source, destination}= result;
    }

    function TaskSelect(){
        setShowModal(true);
    }

    return (
        <Fragment>
            <div style={{display: 'flex', justifyContent: 'center', height: '100%'}}>
            <DragDropContext onDragEnd={DragEnd}>
               <BoardColumns columns={columns} onTaskSelect={TaskSelect}/>
            </DragDropContext>

            </div>
            <FormTask
            show={showModal}
            setShowModal={setShowModal}
            />
        </Fragment>
    )
}


export default withRouter(TaskBoard);


