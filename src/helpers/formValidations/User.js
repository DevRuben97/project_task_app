import * as yup from "yup";

export const REGISTER_SCHEMA = yup.object().shape({
  email: yup
    .string()
    .required("El correo es requerido")
    .email("Ingrese un correo electronico valido"),
  fullName: yup.string().required("Ingrese su nombre completo"),
  password: yup
    .string()
    .test(
      "regex",
      "La contraseña debe de tener al menos 1 numero, 1 caracter en minuscula, 1 caracter en mayuscula, 1 caracter especial y una longitud minima de 8.",
      (val) => {
        const rx = new RegExp(
          "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$"
        );
        return rx.test(val);
      }
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Las contraseñas no coinciden"),
});


export const LOGIN_SCHEMA= yup.object().shape({
    email: yup.string().required('Por favor ingrese su correo electronico.'),
    password: yup.string().required('Por favor ingrese su contraseña.')
})
