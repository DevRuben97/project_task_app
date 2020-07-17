import React, {useState} from 'react';
import styled from 'styled-components';
import {Modal, Form, Input} from 'antd';
import Select from '../Select';

const FormItem= Form.Item;

const GridContainer= styled.div`
display: grid;
grid-template-columns: 1fr 150px;
grid-gap: 10px;
`
const StateContainer= styled.div`
grid-column: 2/3;
`

const selectOptions= 
[
    {label: 'Por Hacer', value: 1}, 
    {label: 'En Progreso', value: 2}
]

const FormTask= ({edit, taskId, show, setShowModal})=> {

    const [loading, setIsLoading]= useState(false);
    const [stateOptions, setStateOptions]= useState(selectOptions);

    function save(){
        
    }

    return (
        <Modal 
        visible={show}
        title={edit? 'Editar Proyecto': 'Nuevo Proyecto'}
        onOk={save}
        onCancel={()=> setShowModal(false)}
        okText="Guardar"
        okType="primary"
        cancelText="Cancelar"
        confirmLoading={loading}
        width="800px"
        >
           <GridContainer>
           <Form 
            layout='vertical'
            >
                <FormItem
                label="Titulo"
                >
                    <Input type="text" placeholder="Introduce el nombre de la tarea" size="large"/>
                </FormItem>
                <FormItem
                label="Descripción"
                >
                    <Input.TextArea />
                </FormItem>
            </Form>
            <StateContainer>
                <div style={{marginTop: '6px'}}>
                <label>Estado</label>
                <Select options={stateOptions} onOptionChange={(value)=> console.log(value)} width='100%'/>
                </div>
            </StateContainer>
           </GridContainer>
        </Modal>
    )
}


export default FormTask;