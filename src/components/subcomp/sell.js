import React, { useState } from "react";
import sell from "../../styles/sell.css";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import env from "react-dotenv";
import {useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BiImage} from 'react-icons/bi'
import {BsFillHandThumbsUpFill} from 'react-icons/bs' 
function Sell() {
 
  const nav = useNavigate()
  const[image,setImage]=useState()

  let formik = useFormik({
    initialValues: {
      categories: "",
      rooms: "",
      price: "",
      location: "",
      number: "",
      email: "",
      password: "",
      type: "",
     
    },
    validationSchema: yup.object({
      categories: yup
        .string()
        .min(2, "select the given options")
        .required("select the categories"),
      email: yup.string().email("*invalid email address").required("*required"),
      number: yup
        .string()
        .matches(/^\d{10}$/, "*invalid mobile number ")
        .required("*required"),
      location: yup.string().required("*required"),
      rooms: yup
        .string()
        .min(2, "select the given options")
        .required("select the rooms"),
      price: yup.number("*Price should be a number").required("*required"),
      password: yup.string().min(8).max(14).required("*required"),
      type: yup
        .string()
        .min(2, "select the given options")
        .required("select the type"),
      
    }),
    onSubmit(values) {
      handleSubmit(values);
    },
  });
  const formData = new FormData();


   formData.append('image',image)
   formData.append('email',formik.values.email)
   formData.append('password',formik.values.password)
   formData.append('rooms',formik.values.rooms)
   formData.append('categories',formik.values.categories)
   formData.append('price',formik.values.price)
   formData.append('location',formik.values.location)
   formData.append('type',formik.values.type);
   formData.append('number',formik.values.number)


  let handleSubmit = async () => {
  
    try {
   const id = toast.loading("Posting...")
      let res = await axios.post(`https://backreal.herokuapp.com/selling`, formData, {
        headers: { "content-Type": "multipart/form-data" },
      });

      if (res.data.statuscode == 200) {
        toast.update(id,{render:"posted successfully",type:"success",isLoading:false,autoClose:true,closeButton:true});
        setTimeout(()=> nav(`/${formik.values.categories}`),1000)
        setTimeout(()=> window.location.reload(),1000)
      } else {
        toast.update(id,{render:res.data.message,type:"error",isLoading:false,autoClose:true,closeButton:true});
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleImage =(e)=>{
    if(e.target.files[0].size <= 2000000){

      setImage(e.target.files[0])
    }else{
      toast.error("Image size should be less than 2 mb")
    }
  }

  return (
    <div>
      <ToastContainer autoClose={900}/>
      <div class="main-block">
        <div class="left-part">
          <i class="fas fa-graduation-cap"></i>
          <h1 className="h1d">Sell Your Property</h1>
          <p className="dis">
            india's largest real estate webapp Kindly fill the form to post your
            property{" "}
          </p>
          <div class="btn-group">
            <a class="btn-item" href="/register">
              &nbsp;&nbsp;&nbsp;Register&nbsp;&nbsp;&nbsp;
            </a>
            <a class="btn-item" href="/forgot-password">
              Forgot Password
            </a>
          </div>
        </div>
        <form className="forms" onSubmit={(e)=>{e.preventDefault();formik.handleSubmit()}}>
          <div class="title">
            <i class="fas fa-pencil-alt"></i>
            <h2>Post your Property</h2>
          </div>
          <div class="info">
            <select
              name="type"
              onChange={(value) => {
                formik.handleChange(value);
              }}
              onBlur={formik.handleBlur}
            >
              <option value="t">Select The Type</option>
              <option value="Sell">Sell</option>
              <option value="Rent">Rent</option>
            </select>
            {formik.touched.type && formik.errors.type ? (
              <div style={{ color: "red" }}>{formik.errors.type}</div>
            ) : null}

            <select
              name="categories"
              onChange={(value) => {
                formik.handleChange(value);
              }}
              onBlur={formik.handleBlur}
            >
              <option value="c">Select The Categories</option>
              <option value="Apartment">Apartment</option>
              <option value="Villa">Villa</option>
              <option value="Commercial">Commercial</option>
            </select>
            {formik.touched.categories && formik.errors.categories ? (
              <div style={{ color: "red" }}>{formik.errors.categories}</div>
            ) : null}
            <select
              name="rooms"
              onChange={(value) => {
                formik.handleChange(value);
              }}
              onBlur={formik.handleBlur}
            >
              <option value="r">Select The Rooms</option>
              <option value="2 BHK">2 BHK</option>
              <option value="3 BHK">3 BHK</option>
              <option value="4 BHK">4 BHK</option>
            </select>
            {formik.touched.rooms && formik.errors.rooms ? (
              <div style={{ color: "red" }}>{formik.errors.rooms}</div>
            ) : null}
           
            <input
              className="inputs"
              type="text"
              id="number"
              name="number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Phone number"
            />
            {formik.touched.number && formik.errors.number ? (
              <div style={{ color: "red" }}>{formik.errors.number}</div>
            ) : null}
            <input
              className="inputs"
              type="text"
              name="price"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Price"
            />
            {formik.touched.price && formik.errors.price ? (
              <div style={{ color: "red" }}>{formik.errors.price}</div>
            ) : null}
            <input
              className="inputs"
              type="text"
              name="location"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Location"
            />
            {formik.touched.location && formik.errors.location ? (
              <div style={{ color: "red" }}>{formik.errors.location}</div>
            ) : null}
            <input
              className="inputs"
              type="text"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Email"
            />
            {formik.touched.email && formik.errors.email ? (
              <div style={{ color: "red" }}>{formik.errors.email}</div>
            ) : null}
            <input
              className="inputs"
              type="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Password"
            />
            {formik.touched.password && formik.errors.password ? (
              <div style={{ color: "red" }}>{formik.errors.password}</div>
            ) : null}
          </div>
          <div className="dummy">

          <label htmlFor="images" className="image" ><BiImage size={30}/>Upload a Image
          </label>{image && (<div className="thumbs"><BsFillHandThumbsUpFill className="thumbsicon"/></div>)}
          </div>
          <input name="avatar" id="images" type="file" accept="image/jpg ,image/jpeg ,image/png" onChange={handleImage}   required/>
          {/* <p>Drag your files here or click in this area.</p> */}
         
         

          <button
            className="buttonsnew"
            type="submit"
            href="#"
           
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
  }

export default Sell;
