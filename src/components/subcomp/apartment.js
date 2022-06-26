import React,{useEffect, useState} from 'react';
import apartment from '../../styles/apartment.css';
import env from 'react-dotenv'
import axios from 'axios';

function Apartment() {
 
useEffect(()=>{
    getData()
 },[])
  
  const[data,setData]=useState([])
 
  


  let getData=async()=>{
      let res= await axios.get(`${env.REACT_APP_API_URL}apartment`)
   
    setData(res.data.data)
        
    }
    let handleDelete=async(id)=>{
      
        let confirm =window.confirm('do you want to delete?')
        if(confirm){
     
        let res =await axios.delete(`${env.REACT_APP_API_URL}delete/${id}`)
         if(res.data.statuscode==200){
             getData()
         }else{
            alert(res.data.message)
         }
        } 
     }
      
   return (
    <>
   <div className='head'>
   <h1 className='head1'>Apartment</h1> 
   <h1 className='head2'>Apartment</h1>
   </div>
   
   <main> 
   
    <div class="container-fluid bg-trasparent my-2 p-3 "  >
    
        <div class="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
        {
                  data.map((e)=>{
                      
                  return(
            <div class="col midss" >
            

                
                <div class="card h-100 shadow-sm"> <img className='images' src={e.image}/>
                    <div class="card-body">
                        <div class="clearfix mb-3"> <h3 class="float-start badge rounded-pill bg-primary">{e.type}</h3> <span class="float-end price-hp">{e.categories}</span> </div>
                       <div class='medium'>
                       <div>
                       <p className='pp'><strong>Contact</strong></p>
                        <p className='pps'><small>{e.number}</small></p>
                       
                        <p className='pp'><strong>Price</strong></p>
                        <p className='pps'><small>₹{e.price}</small></p>
                        </div>
                        <div> 
                             
                        <p className='pp'><strong>Rooms</strong></p>
                        <p className='pps'><small>{e.rooms}</small></p>
                        <p className='pp'><strong>Location</strong></p>
                        <p className='pps'><small>{e.location}</small></p>
                        </div>
                        </div>
                      
                        <div class="text-center my-2"> <a href={`https://www.google.com/maps/search/${e.location}`} target='_blank' class="btn btn-success ss">Locate</a> </div>
                        <div class="text-center my-2"> <a class="btn btn-warning text-white" onClick={()=>handleDelete(e._id)}>Delete</a> </div>                       
                    </div>
                </div>
                 
            </div> 
          )    
        })
        }
        </div>
    
    </div>
 
</main>
 
  </>
  )
}

export default Apartment