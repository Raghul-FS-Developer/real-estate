import React, { useState } from 'react'
import register from '../../styles/register.css';
import {useFormik} from 'formik';
import * as yup from 'yup';
import axios from 'axios'
import env from 'react-dotenv'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Register() {



let formik=useFormik({
  initialValues:{
    name:'',
    email:'',
    password:''
  },validationSchema:yup.object({
    name:yup.string().required('*required'),
    email:yup.string().email('*invalid email address').required('*required'),
    password:yup.string().min(8).max(14).required('*required')
   
  }),onSubmit(values){

    handleSubmit(values)
  }
})
let handleSubmit=async(data)=>{
 
const id = toast.loading('Please wait...')
  let res = await axios.post(`${env.REACT_APP_API_URL}register`,data)
  if(res.data.statuscode ===200){
    toast.update(id,{render:'Check you mail for verification link',type:'success',isLoading:false,autoClose:true,closeButton:true})
    
  }else{
    toast.update(id,{render:res.data.message,type:'error',isLoading:false,autoClose:true,closeButton:true})
    }
  
}

  return (
     
<div class="login-page">
  <ToastContainer/>
  <div class="form">
    
     <form class="login-form" onSubmit={(e)=>{e.preventDefault(); formik.handleSubmit()}}>
      <input type="text" name='name' onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} placeholder="name" required/>
      {formik.touched.name && formik.errors.name ?<div style={{color:"red" }}>{formik.errors.name}</div>:null}
      <input type="email" name='email' onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} placeholder="Email" required/>
      {formik.touched.email && formik.errors.email ?<div style={{color:"red"}}>{formik.errors.email}</div>:null}
      <input type="password" name='password' onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} placeholder="Password" required/>
      {formik.touched.password && formik.errors.password ?<div style={{color:"red"}}>{formik.errors.password}</div>:null}

      <button type='submit'>Register</button>
      
    </form>
  </div>
</div>
  )
}

export default Register