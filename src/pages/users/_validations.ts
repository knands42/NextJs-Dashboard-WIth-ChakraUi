import * as yup from 'yup'

export const createUserFormSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
  password_confirmation: yup.string().oneOf([null, yup.ref('password')])
})
