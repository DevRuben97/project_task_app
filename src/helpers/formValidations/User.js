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
          "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|]).{8,32}$"
        );
        return rx.test(val);
      }
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Las contraseñas no coinciden"),
});
