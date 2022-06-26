import React,{useState ,useEffect} from "react";
import header from "../styles/header.css";

import { MdApartment } from "react-icons/md";
import { useNavigate } from "react-router-dom";
function Header() {
   
  const nav = useNavigate()
  const [width, setWidth] = useState(window.innerWidth);
  const updateWidth = () => {
    setWidth(window.innerWidth);
 };
 
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
});
  
  return (
   <>
   {
     width >=991?
       
<div class='headers' >
<nav class="navbar navbar-expand-lg  navbar-light bg-white" >
  
    <MdApartment className="build" style={{cursor:"pointer"}} onClick={()=>nav('/')} size={40}/>
    
  <h2 className="col-lg-5 text-dark"  onClick={()=>nav('/')} style={{padding:"0px",cursor:"pointer"}}>
    <em>
      <span className="text-dark">R</span>
      <small style={{ color: "crimson" }}>eal</small>
      {/* bootstrap icon */}
      <svg
         style={{ color: "crimson" }}
         xmlns="http://www.w3.org/2000/svg"
         width="16"
         height="16"
         fill="currentColor"
         class="bi bi-activity"
         viewBox="0 0 16 16"
       >
         <path
           fill-rule="evenodd"
          d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z"
         />
       </svg>
     {/* bootstrap icon */}
     <span>E</span>
      <small style={{ color: "crimson" }}>states</small>
    </em>
  </h2>
  
  <div class=" heads ">
     <div class="navbar-nav">
       <a style={{marginLeft:"25px"}} class="nav-item text-dark  nav-link active" href="/">
         Home 
       </a>
      
      <div className="dropdown">
       <a class="nav-item text-dark  nav-link dropbtn ">
       Residential
       </a>
       <div className="dropdown-content">
         <a href="/apartment">Apartment</a>
         <a href="/villa">Villa</a>

       </div>
      
      
       </div>
      <a class="nav-item text-dark  nav-link" href="/disclaimer">
         Disclaimer
       </a>
       <a class="nav-item text-dark  nav-link disabled" href="/about">
        About us
       </a>
      &nbsp;&nbsp;&nbsp;&nbsp;
       {/* bootstrap icon */}
       <svg
         xmlns="http://www.w3.org/2000/svg"
         style={{ marginTop: "15px" }}
         width="30"
         height="16"
         fill="currentColor"
         class="bi bi-telephone-forward-fill"
         viewBox="0  16 16"
       >
         <path
           fill-rule="evenodd"
           d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zm10.761.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708z"
         />
       </svg>
       {/* bootstrap icon */}
      <div>
         <a class="nav-item text-dark">Sales Enquiries</a>
         <br />
         &nbsp; &nbsp;<strong class="nav-item " >76998 54582</strong>
       </div>
    </div>
   </div>
 </nav>
 </div>:    <nav class="navbar navbar-expand-lg navbar-light bg-white">
  <div class="container-fluid">
    <div className="buildtop">
  <MdApartment className="build" style={{cursor:"pointer"} }onClick={()=>nav('/')} size={40}/>  
    <a class="navbar-brand" >  
    
    <h2 className="text-dark" onClick={()=>nav('/')} style={{padding:"0px",cursor:"pointer"}}>
      <em>
        <span className="text-dark">R</span>
        <small style={{ color: "crimson" }}>eal</small>
        {/* bootstrap icon */}
        <svg
           style={{ color: "crimson" }}
           xmlns="http://www.w3.org/2000/svg"
           width="16"
           height="16"
           fill="currentColor"
           class="bi bi-activity"
           viewBox="0 0 16 16"
         >
           <path
             fill-rule="evenodd"
            d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z"
           />
         </svg>
        {/* bootstrap icon */}
       <span>E</span>
        <small style={{ color: "crimson" }}>states</small>
      </em>
    </h2></a></div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      
  <div class=" heads ">
     <div class="navbar-nav">
       <a  class="nav-item text-dark  nav-link active" href="/">
         Home 
       </a>
      
      <div className="dropdown">
       <a class="nav-item text-dark  nav-link dropbtn ">
       Residential
       </a>
       <div className="dropdown-content">
         <a href="/apartment">Apartment</a>
         <a href="/villa">Villa</a>

       </div>
      
      
       </div>
      <a class="nav-item text-dark  nav-link" href="disclaimer">
         Disclaimer
       </a>
       <a class="nav-item text-dark  nav-link disabled" href="about">
        About us
       </a>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 
      <div>
         <a class="nav-item text-dark">Sales Enquiries</a>
         <br />
         &nbsp;<strong class="nav-item text-dark ">76998 54582</strong>
       </div>
    </div>
   </div>
    </div>
  </div>
</nav>

   }
   

   </>
     );
}

export default Header;

