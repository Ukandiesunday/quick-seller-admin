import * as yup from "yup";

// const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

const phoneRegex =
  /^\+?(\d{1,3})?[-.\s]?(\(?\d{3}\)?)[-.\s]?(\d{3})[-.\s]?(\d{4})$/;

export const changePasswordSchema = yup
  .object()
  .shape({
    currentPassword: yup
      .string()
      .required("Required field!")
      .matches(/[A-Z]/, "Must contain an uppercase letter")
      .matches(/[a-z]/, "Must contain a lowercase letter")
      .matches(/\d/, "Must contain a number")
      .matches(/[!@#$%^&*(),.?":{}|<>]/, "Must contain a special character")
      .min(8, "Password must be at least 8 characters long"),
    newPassword: yup
      .string()
      .required("Required field!")
      .matches(/[A-Z]/, "Must contain an uppercase letter")
      .matches(/[a-z]/, "Must contain a lowercase letter")
      .matches(/\d/, "Must contain a number")
      .matches(/[!@#$%^&*(),.?":{}|<>]/, "Must contain a special character")
      .min(8, "Password must be at least 8 characters long"),
    confirmPassword: yup
      .string()
      .required("Required Field!")
      .matches(/[A-Z]/, "Must contain an uppercase letter")
      .matches(/[a-z]/, "Must contain a lowercase letter")
      .matches(/\d/, "Must contain a number")
      .matches(/[!@#$%^&*(),.?":{}|<>]/, "Must contain a special character")
      .oneOf([yup.ref("newPassword")], "Doesn't match new password")
      .min(8, "Password must be at least 8 characters long"),
  })
  .required();

export const profileSettingsSchema = yup
  .object()
  .shape({
    firstName: yup
      .string()
      .required("Required Field!")
      .min(4, "At least 4 characters"),
    lastName: yup.string().required("Required Field!"),
    phone: yup
      .string()
      .required("Required Field")
      .matches(phoneRegex, "Enter a valid phone number"),
    address: yup.string().required("Required Field"),
    email: yup
      .string()
      .email("Enter a valid email!")
      .required("Required Field!"),
  })
  .required();
