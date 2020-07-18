import React from "react";
import { Form, Input, Button } from "antd";

const FormItem = Form.Item;

const CommentInput = () => {
  function add_comment() {}

  return (
    <div style={{ marginBottom: "10px" }}>
      <Form onFinish={add_comment}>
        <FormItem
          label="Escriba un comentario"
          rules={[{ required: true, message: "Ingrese un comentario" }]}
        >
          <Input.TextArea placeholder="Ingrese un comentario a esta tarea" />
        </FormItem>
      </Form>
    </div>
  );
};

export default CommentInput;
