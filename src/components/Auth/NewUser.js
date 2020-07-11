import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, MailOutlined, KeyOutlined } from "@ant-design/icons";
import { Formik } from "formik";

const NewUser = () => {
  const [initialValues, setInitialValues] = useState({
    email: "",
    password: "",
    fullName: "",
  });

  function register(values) {

  }

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={register}>
        {({ handleSubmit, setFieldValue,values }) => (
          <Form layout="vertical" onFinish={handleSubmit}>
            <Form.Item
              label="Correo Electronico"
              name="email"
              valuePropName="email"
              rules={[
                { required: true, message: "Ingrese su correo electronico" },
                {type: 'email', message: 'Ingrese un correo electronico valido'}
              ]}
            >
              <Input
                placeholder="Ingrese su correo"
                prefix={<MailOutlined />}
                onChange={(e) => setFieldValue("email", e.target.value)}
                size="large"
              />
            </Form.Item>

            <Form.Item
              label="Nombre Completo"
              name="fullName"
              valuePropName="fullName"
              rules={[
                { required: true, message: "Ingrese su nombre y apeliido" },
              ]}
            >
              <Input
                placeholder="Ingrese su nombre completo"
                prefix={<UserOutlined />}
                onChange={(e) => setFieldValue("fullName", e.target.value)}
                size="large"
              />
            </Form.Item>

            <Form.Item
              label="Contraseña"
              name="password"
              valuePropName="password"
              rules={[
                { required: true, message: "Ingrese una contraseña valida" },
              ]}
            >
              <Input.Password
                placeholder="Ingrese su contraseña"
                prefix={<KeyOutlined />}
                onChange={(e) => setFieldValue("password", e.target.value)}
                size="large"
              />
            </Form.Item>

            <Form.Item
              label="Confirme la contraseña"
              name="confirm"
              hasFeedback
              dependencies={['password']}
            >
              <Input.Password
                placeholder="Ingrese su contraseña"
                prefix={<KeyOutlined />}
                size="large"
              />
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
                Enviar Datos
              </Button>
            </Form.Item>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default NewUser;
