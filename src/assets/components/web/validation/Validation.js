import * as yup from 'yup';
export const validationSchema=yup.object({
    userName:yup.string().required('user name is required').min(3,"must be at least 3 char").max(25,"maxis 25 char"),
    email:yup.string().required("email is required").email(),
    password:yup.string().required('password is required').min(3,"must be at least 3 char").max(25,"maxis 25 char"),
 })
 export const loginSchema=yup.object({
   
    email:yup.string().required("email is required").email(),
    password:yup.string().required('password is required').min(3,"must be at least 3 char").max(25,"maxis 25 char"),
 })
 