import axios from 'axios';
import React, { useState } from 'react';
import register from '../../styles/register.css';
import env from 'react-dotenv';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Forgot() {

const[value,setValue]=useState('');


let submit=async(e)=>{
  e.preventDefault()
  const id = toast.loading("Please wait...")
  let res=await axios.post(`${env.REACT_APP_API_URL}forgot-password`,{email:value})

  if(res.data.statuscode == 200){
    toast.update(id,{render:'Check your mail for password reset link',type:"success",isLoading:false,autoClose:true,closeButton:true})
  }else{
    toast.update(id,{render:res.data.message,type:"error",isLoading:false,autoClose:true,closeButton:true})
  }
}
  return (
    <div class="login-page">
      <ToastContainer/>
    <div class="form" >
    <h4 style={{textAlign:'center'}}><strong>Enter Your Registered Email</strong></h4><br/>
       <form class="login-form">
        
        <input type="email" placeholder="Email" onChange={(e)=>setValue(e.target.value)} required/>
      
        <button onClick={submit}>send link</button>
        
      </form>
    </div>
  </div>
  )
}

export default Forgot