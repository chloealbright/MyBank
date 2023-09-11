import * as Yup from "yup"

export const ValidateName = Yup.string()
  .trim()
  .required("Required")
  .min(2, 'Name must be at least 2 characters')
  .matches(
    /(^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$)/,
    'Name cannot contain numbers'
  )
  .max(20, 'Name exceeds max length')

export const ValidatePassword = Yup.string()
  .trim()
  .required("Required")
  .matches(
    /(?=.*[A-Z])/,
    "Your password needs to have at least one capital letter"
  )
  .matches(
    /(?=.*[!@#$%^&*])/,
    "Your password needs to have at least one special character"
  )
  .matches(
    /(?=.*[a-z])/,
    "Your password needs to have at least one lower case character"
  )
  .matches(/(?=.*[0-9])/, "Your password needs to have at least one number")
  .min(8)
  .max(200);

  interface InputAlertData {
    fieldName: string
  }


  