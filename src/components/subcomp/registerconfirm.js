
import axios from "axios";
import React,{useEffect, useState} from "react";
import { useParams,useNavigate } from "react-router-dom";
import env from 'react-dotenv'

function RegisterConfirm() {
  useEffect(()=>{
    getdata()
   },[])
   
const[work,setWork]=useState(true)

let navigate=useNavigate()
let params = useParams();





let getdata=async()=>{
let res =await axios.post(`https://backreal.herokuapp.com/register-confirm/${params.token}`);

if (res.data.statuscode === 200) 
{
setWork(prev=>prev)
}else{
setWork(prev=>!prev)
}
}


  return (
    <>
    {
        work?
        <>
     <h2 style={{display:"flex",justifyContent:"center", color:"green"}}>
      Account verified successfullly     
     </h2>
     <a style={{display:"flex",justifyContent:"center", color:"red" ,cursor:'pointer'}} onClick={()=>navigate("/sell")}> Click to continue</a></>:
     <><h2 style={{display:"flex",justifyContent:"center", color:"red"}}>
       Token Expired
     </h2><a style={{display:"flex",justifyContent:"center", color:"green" ,cursor:'pointer'}} onClick={()=>navigate("/sell")}>Click to Sell page</a>
     </>
     
}
    
     
     </>
  )
}

export default RegisterConfirm