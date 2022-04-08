import React, {useState} from 'react'
import register from '../../styles/register.css'
import { useNavigate ,useParams} from 'react-router-dom'
import axios from 'axios';

function ForgotConfirm() {

 const navigate=useNavigate()
 const params=useParams()

 const[msg,setMsg]=useState("")
 const[password,setPassword]=useState("")
 const[newpassword,setNewpassword]=useState("")

 let submit=async(e)=>{
   e.preventDefault()
   try{
   
    if(password === newpassword){
        
       let res = await axios.post(`http://localhost:4000/forgot-confirm/${params.token}`,{
       password:password})


    if(res.data.statuscode==200){
      
     navigate("/sell")
     alert("password changed successfully")
    
    }else{
        setMsg(res.data.message)
    }
}else{
     setMsg("Password Doesn't Match")
    }
}catch(error){
  console.log(error)
}}


  return (



    <div class="login-page">
  <div class="form">
      <form class="login-form" onSubmit={submit}>
      <input type="password" name='password' minlength="8" maxlength='14' onChange={(e)=>setPassword(e.target.value)} placeholder="password" required/>
      <input type="password" name='confirmpassword' minlength="8" maxlength='14' onChange={(e)=>setNewpassword(e.target.value)} placeholder="confirm Password" required/>
      <p style={{color:"red"}}>{msg}</p>
      <button type='submit' >Register</button>
      </form>
  </div>
</div>
  )
}

export default ForgotConfirm