import React, { useState, useEffect } from 'react';
import {Modal, Form, Input} from 'antd';

const FormItem= Form.Item;


const FormProject= ({show, edit, setShowModal})=> {


    const [projectName, setProjectName]= useState(null);
    const [loading, setLoading]= useState(false);
    const [hasError, setErros]= useState(false);

    useEffect(()=> {

    },[edit])

    function save_project(){
        if (projectName=== null){
            setErros(true);
        }
        else{
            setLoading(true);
            setTimeout(()=> {
                setProjectName(null);
                setShowModal(false);
            }, 5000)
        }
    }

    return (
        <Modal 
        visible={show}
        title={edit!= null? 'Editar Proyecto': 'Nuevo Proyecto'}
        onOk={save_project}
        onCancel={()=> setShowModal(false)}
        okText="Guardar"
        okType="primary"
        cancelText="Cancelar"
        confirmLoading={loading}
        >
            <Form 
            layout='vertical'
            >
                <FormItem
                label="Nombre del Proyecto"
                validateStatus={!hasError? 'success': 'error'}
                help={!hasError? null: 'Por favor introduce el nombre del proyecto'}
                >
                    <Input type="text" placeholder="Introduce el nombre" size="large" value={projectName} onChange={(event)=> setProjectName(event.target.value)}/>
                </FormItem>
            </Form>
        </Modal>
    )
}


export default FormProject;