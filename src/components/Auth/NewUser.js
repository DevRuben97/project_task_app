import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, MailOutlined, KeyOutlined } from "@ant-design/icons";
import { Formik } from "formik";

import { REGISTER_SCHEMA } from "../../helpers/formValidations/User";
import { success } from "../../helpers/Message/MessageManager";

const NewUser = ({ setTabIndex }) => {
  const [initialValues, setInitialValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
  });

  const [loading, setLoading] = useState(false);

  async function register(values) {
    setLoading(true);
    const ok = await success(
      "Usuario registrado correctamente",
      "Registro de Usuario"
    );
    if (ok) {
      setLoading(false);
      setTabIndex("login");
    }
  }

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={register}
        validationSchema={REGISTER_SCHEMA}
      >
        {({ handleSubmit, setFieldValue, values, errors }) => (
          <Form layout="vertical" onFinish={handleSubmit}>
            <Form.Item
              label="Correo Electronico"
              name="email"
              valuePropName="email"
              required
              validateStatus={errors.email ? "error" : "success"}
              help={errors.email}
            >
              <Input
                placeholder="Ingrese su correo"
                prefix={<MailOutlined />}
                onChange={(e) => setFieldValue("email", e.target.value)}
                size="large"
                value={values.email}
              />
            </Form.Item>

            <Form.Item
              label="Nombre Completo"
              name="fullName"
              valuePropName="fullName"
              required
              validateStatus={errors.fullName ? "error" : "success"}
              help={errors.fullName}
            >
              <Input
                placeholder="Ingrese su nombre completo"
                prefix={<UserOutlined />}
                onChange={(e) => setFieldValue("fullName", e.target.value)}
                size="large"
                value={values.fullName}
              />
            </Form.Item>

            <Form.Item
              label="Contraseña"
              name="password"
              valuePropName="password"
              required
              validateStatus={errors.password ? "error" : "success"}
              help={errors.password}
            >
              <Input.Password
                placeholder="Ingrese su contraseña"
                prefix={<KeyOutlined />}
                onChange={(e) => setFieldValue("password", e.target.value)}
                size="large"
                value={values.password}
              />
            </Form.Item>

            <Form.Item
              label="Confirme la contraseña"
              name="confirm"
              required
              validateStatus={errors.confirmPassword ? "error" : "success"}
              help={errors.confirmPassword}
            >
              <Input.Password
                placeholder="Ingrese su contraseña"
                prefix={<KeyOutlined />}
                size="large"
                onChange={(e) =>
                  setFieldValue("confirmPassword", e.target.value)
                }
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
                loading={loading}
              >
                {!loading ? "Enviar Datos" : "Enviando Datos.."}
              </Button>
            </Form.Item>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default NewUser;
