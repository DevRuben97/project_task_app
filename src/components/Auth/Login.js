import React, { useState } from "react";
import styled from "styled-components";
import { Form, Input, Button } from "antd";
import { UserOutlined,MailOutlined, KeyOutlined  } from "@ant-design/icons";
import { Formik } from "formik";

import {LOGIN_SCHEMA} from '../../helpers/formValidations/User'
import {success} from '../../helpers/Message/MessageManager';

const Login = () => {
  const [initialValues, setInitialValues] = useState({
    email: '',
    password: '',
  });

  const [loading, setLoading]= useState(false);

 async function login(values){
      setLoading(true);
      await success('Bienvenido Ruben Batista','Inicio de Sesión')
  }

  return (
    <div>
     <Formik
     initialValues={initialValues}
     onSubmit={login}
     validationSchema={LOGIN_SCHEMA}
     >
         {({handleSubmit, setFieldValue,values, errors})=> (
              <Form
              layout="vertical"
              onFinish={handleSubmit}
              >
                <Form.Item
                  label="Correo Electronico"
                  name="email"
                  valuePropName="email"
                  required
                  validateStatus={errors.email? 'error': 'success'}
                  help={errors.email}
                >
                  <Input placeholder="Ingrese su correo" prefix={<MailOutlined />} onChange={(e)=> setFieldValue('email', e.target.value )}/>
                </Form.Item>
        
                <Form.Item
                  label="Contraseña"
                  name="password"
                  valuePropName="password"
                  validateStatus={errors.password? 'error': 'success'}
                  help={errors.password}
                >
                  <Input.Password placeholder="Ingrese su contraseña" prefix={<KeyOutlined/>} onChange={(e)=> setFieldValue('password', e.target.value)}/>
                </Form.Item>
        
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    shape="round"
                    size="large"
                    block={true}
                    icon={<UserOutlined />}
                    loading={loading}
                  >
                    Ingresar
                  </Button>
                </Form.Item>
              </Form>
         )}
     </Formik>
    </div>
  );
};

export default Login;
