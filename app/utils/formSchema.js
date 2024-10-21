import * as yup from 'yup';
export const schema = yup.object().shape({
  nombre: yup.string().required('El nombre es obligatorio').matches(/^[a-zA-Z\s]+$/, 'Solo letras'),
  apellido: yup.string().required('El apellido es obligatorio').matches(/^[a-zA-Z\s]+$/, 'Solo letras'),
  cedula: yup.number().typeError('La cédula debe ser numérica').required('La cédula es obligatoria'),
  departamento: yup.string().required('El departamento es obligatorio'),
  ciudad: yup.string().required('La ciudad es obligatoria'),
  celular: yup.number().typeError('El celular debe ser numérico').required('El celular es obligatorio'),
  email: yup.string().email('Correo inválido').required('El correo es obligatorio'),
  habeasData: yup.boolean().oneOf([true], 'Debe aceptar términos y condiciones')
});