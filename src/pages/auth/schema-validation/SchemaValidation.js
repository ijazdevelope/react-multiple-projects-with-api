import * as yup from "yup";

const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const passwordRegex = /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;

export const LoginSchema = yup.object({
    email: yup.string().required('Email is required')
        .matches(emailRegex, 'Invalid email format'),
    password: yup.string().required()
        .min(8, 'Password length should be at least 8 characters')
}).required();

export const SignupSchema = yup.object({
    fname: yup.string().required('First name is required.')
        .min(4, 'Password length should be at least 4 characters'),
    lname: yup.string().required('Last name is required.')
        .min(4, 'Password length should be at least 4 characters'),
    email: yup.string().required('Email is required')
        .matches(emailRegex, 'Invalid email format'),
    password: yup.string().required()
        .min(8, 'Password length should be at least 8 characters')
        .max(8, 'Password length should be at least 8 characters'),
    cpassword: yup.string().required('Confirm password is a required field.')
        .min(8, 'Password length should be at least 8 characters')
        .max(8, 'Password length should be at least 8 characters')
        .matches(/[0-9]/, 'Password must contain at least one number')
        .oneOf([yup.ref("password")], "Passwords do not match")
}).required();

export const ForgetPasswordSchema = yup.object({
    email: yup.string().required('Email is required').matches(emailRegex, 'Invalid email format'),
    password: yup.string().required()
        .min(8, 'Password length should be at least 8 characters')
        .matches(passwordRegex, 'Password must contain at least 8 characters, one uppercase, one number and one special case character'),
}).required();

export const TodoSchema = yup.object({
    todo_name: yup.string().required('Please enter todo')
}).required();