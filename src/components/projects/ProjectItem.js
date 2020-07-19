import React from 'react';
import {Card} from 'antd';
import {ProjectOutlined} from '@ant-design/icons';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom'

import {EditOutlined, DownOutlined,CloseOutlined } from '@ant-design/icons';

const CardItem= styled(Card.Grid)`
width: 25%;
text-align: center;
display: flex;
align-items: center;
flex-direction: column;
cursor: pointer;
}
`

const ProjectItem= ({projectInfo, history})=> {

    function taskBoard(){
        history.push('TaskBoard');
    }

    return (
    <CardItem onClick={taskBoard}>
        <div style={{fontSize: '60px'}}>
            <ProjectOutlined /> 
        </div>
        
        {projectInfo}
        
        </CardItem>
    )
}



export default withRouter(ProjectItem);