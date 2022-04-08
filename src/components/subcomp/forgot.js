import axios from 'axios';
import React, { useState } from 'react';
import register from '../../styles/register.css';
import env from 'react-dotenv';

function Forgot() {

const[value,setValue]=useState([]);
const [msg,setMsg]=useState([]);

let submit=async(e)=>{
  e.preventDefault()
  let res=await axios.post(`${env.REACT_APP_API_URL}forgot-password`,{email:value})
// console.log(res)
  setMsg(res.data.message)
  if(res.data.statuscode == 200){
    alert('check your mail for password reset link')
  }
}
  return (
    <div class="login-page">
    <div class="form" >
    <h4 style={{textAlign:'center'}}><strong>Enter Your Registered Email</strong></h4><br/>
       <form class="login-form">
        
        <input type="email" placeholder="Email" onChange={(e)=>setValue(e.target.value)} required/>
       <p style={{color:"red"}}>{msg}</p>
        <button onClick={submit}>send link</button>
        
      </form>
    </div>
  </div>
  )
}

export default Forgot