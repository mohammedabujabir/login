import React from 'react'
import Input from '../../pages/Input.jsx'
import { useFormik } from 'formik';
import {loginSchema} from '../validation/Validation.js'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function Login({saveCurrentUser}) {
    const navigate= useNavigate();
   const initialValues={
     
        email:'',
        password:'',
       
    };
  
   const onSubmit= async users=>{
      const {data}= await axios.post(`https://ecommerce-node4.vercel.app/auth/signin`,users);
      console.log(data);
      if(data.message =='success'){
       localStorage.setItem('userToken',data.token);
       saveCurrentUser();
       toast.success('login successfully', {
        position: "top-right",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });

        navigate('/home');
      }
     
    };
    const formik=useFormik({
        initialValues,
        onSubmit,
        loginSchema:loginSchema,
    })
  
    const inputs=[
       
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
        
    ];
    const renderInputs=inputs.map((input,index)=>
       <Input 
       type={input.type} 
       id={input.id}
        name={input.name}
         title={input.title}
          value={input.value}
          onChange={formik.handleChange}
          errors={formik.errors}
           key={index}
           onBlur={formik.handleBlur}
           touched={formik.touched}
           />
    )
  return (
    <>
    <div className='container'>

    <h2 className='header mt-5'>login</h2>
     <form onSubmit={formik.handleSubmit} >
      {renderInputs}
      <button type='submit' disabled={!formik.isValid}>login</button>
     </form>

    </div>
  

   </>
  )
}
