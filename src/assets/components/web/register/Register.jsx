import React from 'react'
import Input from '../../pages/Input.jsx'
import { useFormik } from 'formik';
import {validationSchema} from '../validation/Validation.js'
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Register() {
   const initialValues={
        userName:'',
        email:'',
        password:'',
        image:'',
    };
   const handleFields=(event)=>{
   
    formik.setFieldValue('image',event.target.files[0]);
   }
   const onSubmit= async users=>{
      const fromData= new FormData();
      fromData.append("userName",users.userName);
      fromData.append("email",users.email);
      fromData.append("password",users.password);
      fromData.append("image",users.image);
      const {data}= await axios.post(`https://ecommerce-node4.vercel.app/auth/signup`,fromData);
      if(data.message =='success'){
        formik.resetForm();
            toast.success('account created successfully ,plz verify your email to longin', {
                position: "bottom-center",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
            
      }
      console.log(data);
    };
    const formik=useFormik({
        initialValues,
        onSubmit,
        validationSchema,
    })
  
    const inputs=[
        {   
            id:'username',
            type:'text',
            name:'userName',
            title:'user name',
            value:formik.values.userName,
         
        },
        {   
            id:'email',
            type:'email',
            name:'email',
            title:'user email',
            value:formik.values.email,
          
        },
        {
            id:'password',
            type:'password',
            name:'password',
            title:'user password',
            value:formik.values.password,
           
        },
        {
            id:'image',
            type:'file',
            name:'image',
            title:'user image',
            onChange:handleFields,
           
        },
    ];
    const renderInputs=inputs.map((input,index)=>
       <Input 
       type={input.type} 
       id={input.id}
        name={input.name}
         title={input.title}
          value={input.value}
          onChange={input.onChange || formik.handleChange}
          errors={formik.errors}
           key={index}
           onBlur={formik.handleBlur}
           touched={formik.touched}
           />
    )
  return (
    <>
    <div className='container'>

    <h2 className='header mt-5'>create account</h2>
     <form onSubmit={formik.handleSubmit} encType='multipart/form-data'>
      {renderInputs}
      <button type='submit' disabled={!formik.isValid}>register</button>
     </form>

    </div>
  

   </>
  )
}
