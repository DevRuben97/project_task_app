import React from 'react';
import {PageHeader, Divider, Button} from 'antd';
import {PlusOutlined} from '@ant-design/icons'
import {withRouter} from 'react-router-dom'



const ViewHeader= ({history, icon, title, subTitle, showBackIcon, createButton})=> {



    return (
        <div>
            <PageHeader
            onBack={()=> history.goBack()}
            title={title}
            subTitle={subTitle}
            backIcon={showBackIcon}
            extra={createButton? [
                <Button type='primary' onClick={createButton.onClick}><PlusOutlined/> {createButton.text}</Button>
                ]: []}
            >
                <Divider/>
            </PageHeader>
        </div>
    )
}


export default withRouter(ViewHeader);