import {Modal} from 'antd';



export function success(message, title){

      return new Promise((resolve, reject)=> {
        let ok= false;
        Modal.success({
            title: title,
            content: message,
            centered: true,
            onOk:  ()=> {
                ok= true;
                resolve(ok);
            },
            okText: 'Aceptar'
        })
      })
}


export  function question(message, title){
    return new Promise((resolve, reject)=> {
        let ok= false;
        Modal.confirm({
            title: title,
            content: message,
            centered: true,
            onOk:  ()=> {
                ok= true;
                resolve(ok);
            },
            okCancel: true,
            onCancel: ()=> {
                ok= false;
                resolve(ok);
            },
            okText: 'Aceptar',
            cancelText: 'Cancelar'
        })
      })
}