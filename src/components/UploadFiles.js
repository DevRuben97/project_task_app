import React from "react";
import { Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";

const { Dragger } = Upload;

const UploadFiles = () => {
  return (
    <div style={{ height: "150px" }}>
      <Dragger
        multiple={true}
        defaultFileList={[
          {
            name: "Nombre del Archivo",
            size: 101888,
            uid: "ompdofmdfodmddpomdf",
            url: "www.google.com.do",
          },
        ]}
        onChange={(value) => console.log(value.fileList)}
      >
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p>
          Haz click o arrastra y suelta los archivos que quieras subir en este
          espacio.
        </p>
      </Dragger>
    </div>
  );
};

export default UploadFiles;
