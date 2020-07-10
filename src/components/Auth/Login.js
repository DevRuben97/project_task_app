import React, { useState } from "react";
import styled from "styled-components";
import { Form, Input, Button } from "antd";
import { UserOutlined,MailOutlined, KeyOutlined  } from "@ant-design/icons";
import { Formik } from "formik";

const Login = () => {
  const [initialValues, setInitialValues] = useState({
    email: '',
    password: '',
  });

  function login(values){
      
  }

  return (
    <div>
      <Form
        onFinish={login}
        layout="vertical"
      >
        <Form.Item
          label="Correo Electronico"
          name="email"
          valuePropName="email"
          rules={[{ required: true, message: "Ingrese su correo electronico" }]}
        >
          <Input placeholder="Ingrese su correo" prefix={<MailOutlined />}/>
        </Form.Item>

        <Form.Item
          label="Contraseña"
          name="password"
          valuePropName="password"
          rules={[{ required: true, message: "Ingrese su correo electronico" }]}
        >
          <Input.Password placeholder="Ingrese su correo" prefix={<KeyOutlined/>}/>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            shape="round"
            size="large"
            block={true}
            icon={<UserOutlined />}
          >
            Ingresar
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;