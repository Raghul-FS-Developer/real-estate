import React, {useState} from 'react'
import register from '../../styles/register.css'
import { useNavigate ,useParams} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function ForgotConfirm() {

 const navigate=useNavigate()
 const params=useParams()

 
 const[password,setPassword]=useState("")
 const[newpassword,setNewpassword]=useState("")

 let submit=async(e)=>{
   e.preventDefault()
   try{
   
    if(password === newpassword){
        
       let res = await axios.post(`https://backreal.herokuapp.com/forgot-confirm/${params.token}`,{
       password:password})


    if(res.data.statuscode==200){
      
     navigate("/sell")
     toast.success("password changed successfully")
    
    }else{
        toast.error(res.data.message)
    }
}else{
     toast.error("Password Doesn't Match")
    }
}catch(error){
  console.log(error)
}}


  return (



    <div class="login-page">
      <ToastContainer/>
  <div class="form">
      <form class="login-form" onSubmit={submit}>
      <input type="password" name='password' minlength="8" maxlength='14' onChange={(e)=>setPassword(e.target.value)} placeholder="password" required/>
      <input type="password" name='confirmpassword' minlength="8" maxlength='14' onChange={(e)=>setNewpassword(e.target.value)} placeholder="confirm Password" required/>

      <button type='submit' >Reset</button>
      </form>
  </div>
</div>
  )
}

export default ForgotConfirm