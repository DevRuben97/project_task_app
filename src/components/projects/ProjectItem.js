import React from 'react';
import {List, Tooltip, Button} from 'antd';
import {ProjectOutlined, TeamOutlined, EditOutlined, ArrowRightOutlined} from '@ant-design/icons';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom'

const Item= List.Item;
const Meta= List.Item.Meta;


const ProjectItem= ({id,name,description,onEdit, history})=> {

    function taskBoard(){
        history.push('TaskBoard');
    }

    return (
    <div>
        <Item style={{textAlign: 'left', fontSize: '25px'}} actions={[
            <Tooltip title="Ir al Tablero"><Button key={id} type="text" onClick={taskBoard}><ArrowRightOutlined /></Button></Tooltip>,
            <Tooltip title="Ver Miembros"><Button key={id} type="text"><TeamOutlined/></Button></Tooltip>,
            <Tooltip title="Editar Proyecto"><Button key={id} type="text" onClick={onEdit}><EditOutlined/></Button></Tooltip>
        ]}
        >
            <Meta
            title={name}
            description={description}
            avatar={<ProjectOutlined/>}
            />
        </Item>
    </div>
    )
}



export default withRouter(ProjectItem);