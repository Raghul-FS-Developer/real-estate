import React,{useEffect, useState} from 'react';
import home from '../styles/home.css';
import {FaHandHoldingWater ,FaSwimmingPool , FaWpforms,FaTableTennis}from 'react-icons/fa';
import {GiFilmSpool ,GiCctvCamera ,GiRadarDish ,GiParkBench} from 'react-icons/gi';
import {BsShop} from 'react-icons/bs';
import {RiMapPinLine} from 'react-icons/ri';
import {Link} from 'react-router-dom'
function Home() {
  
  
  return (
      <>
      
    <div id="carouselExampleIndicators" class="carousel slide"data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
   
    <div class="carousel-item active " >
    
      <img class="d-block w-100 img1" src="https://media.architecturaldigest.com/photos/59b998e7e15bac42ea9a8f0a/16:9/w_1280,c_limit/OMA%20Amsterdam%201.jpg" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 img2" src="https://www.hyundai.co.kr/image/upload/asset_library/MDA00000000000003905/dac40ea9bbc64337a55a7984f4b5aed4.jpg" alt="Second slide"/>
    </div>
    <div class="carousel-item" >
      <img class="d-block w-100 img3" src="https://www.bankrate.com/2019/08/13233037/Condo-vs-apartment.jpeg"  alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next" >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

    <div className='mid col-lg-12 col-md-12 col-sm-12 '>

<a href='#Features'  className='text-white' style={{textDecoration:"none" }}>Features</a>
<a href='#specifications' className='text-white' style={{textDecoration:"none" }}>Specification</a>
<a href='#flats'className='text-white' style={{textDecoration:"none" }}>Model Flats</a>
<a href='#map' className='text-white' style={{textDecoration:"none" }}> Location Map</a>
</div>
 <h4 className='text-muted midlow' style={{textAlign:'center',marginTop:"30px"}}>GET STARTED WITH EXPLORING REAL ESTATE OPTIONS....</h4>

<div className='major'>
      <Link to='/buying'>
       <div className='mids'>
       <img className='eimg' src='https://media.istockphoto.com/photos/happy-family-with-kids-sit-on-couch-using-laptop-picture-id1215789535?k=20&m=1215789535&s=612x612&w=0&h=rLbgDdpsbBjBrjSA_zj3VtXEQQFjpRte1usHJutIfUY='/>
       <a className='eimgbot' href='/buying' >Buying a Home</a>
       </div>
      </Link>
      <Link to='/renting'>
       <div className=' mids'>
        <img className='eimg' src='https://i.pinimg.com/originals/c8/40/eb/c840eb17c7bc9e681525c5561604935a.jpg'/>
        <a className='eimgbot ' href='/renting'>Renting a Home</a>
        </div>
      </Link>
      <Link to='sell'>
       <div className='mids'>
        <img className='eimg' src='https://www.interiorsbysteveng.com/wp-content/uploads/2017/06/Commercial_Interior_Design_Steven_G-1160x700.jpg'/>
       <a className='eimgbot'href='/sell'>Sell (or) Rent your property</a>
       </div>
       </Link>
       <Link to='/commercial'>
       <div className='mids'>
         <img className='eimg' src='https://www.chattels.in/wp-content/uploads/2020/06/Commercial-2.jpg'/>
         <a className='eimgbot' href='/commercial'>Buying commercial spaces</a>
         </div> 
        </Link>

</div>
<h6 className='midbot text-muted' >ALL PROPERTY NEEDS - ONE PORTAL<br/></h6> 
<h3 className='midbots' style={{textAlign:'center',marginTop:"20px"}}>Find Better Places to Live, Work <br/>and Wonder...</h3>
       
 
 
        {/* features  start*/}
<a name='Features'></a>
<div className='midbot2'>

<h2 style={{textAlign:"center"}} className='text-danger mid1'  >Features</h2>
<p style={{textAlign:"center"}} className="text-dark mid2" >World class amenities to matching global standards in living</p>

<div className='midbot3head'>
<div className='midbot3'>
<FaHandHoldingWater className='iconbot3' size={60}/>
<div className='textbot3'><small>Rain water Harvesting</small></div>
</div>
<div className='midbot3'>
<GiFilmSpool className='iconbot3'size={60}/>
<div className='textbot3'><small>Mini Theatre</small></div>
</div>
<div className='midbot3'>
  <FaSwimmingPool className='iconbot3' size={60}/>
  <div className='textbot3'><small>Swimming Pool</small></div>
</div>
<div className='midbot3'>
 <FaTableTennis className='iconbot3' size={60}/>
 <div className='textbot3'><small>Indoor Games</small></div>
</div>
</div>

<div className='midbot3head'>
<div className='midbot3'>
  <GiCctvCamera className='iconbot3' size={60}/>
  <div className='textbot3'><small>CCTV Surveillance</small></div>
</div>
<div className='midbot3'>
 <BsShop className='iconbot3' size={60}/>
 <div className='textbot3'><small>Super Market</small></div><small className='text-danger'>(Groceries & Vegetables)</small>
</div>
<div className='midbot3'>
  <GiRadarDish className='iconbot3' size={60}/>
  <div className='textbot3'><small>DTH Provision</small></div>
</div>
<div className='midbot3'>
  <GiParkBench className='iconbot3' size={60}/>
  <div className='textbot3 '><small>Landscaped garden</small></div>
</div>
</div>
</div>
        {/* features end */}
      
{/* Specification starts */}
<a name='specifications'></a>
<div className='specs'>
 <FaWpforms size={45}/> <h1 className='specs1'>Specifications</h1>

  </div>
  <div  className='specsbody'>
  <div className='bodycontent'>
      <h5><strong>Flooring</strong></h5>
      <strong className='h6'>Living, Dining & Kitchen</strong>
      <p className='text-muted' style={{paddingTop:'10px'}}>Hi-end vitrified tiles</p>
      <strong className='h6'>Bedrooms in all units</strong>
      <p className='text-muted' style={{paddingTop:'10px'}}>Wood finished tiles</p>
      <strong className='h6'>Balcony + Bathrooms</strong>
      <p className='text-muted' style={{paddingTop:'10px'}}>Anti-skid tiles</p>
      <h5><strong>Kitchen</strong></h5>
      <p className='text-muted' style={{paddingTop:'10px'}}>Granite platform with SS sink /Carysil sink with drainboard</p>
      <p className='text-muted' style={{paddingTop:'10px'}}>Wall tiles up to 2 feet above the platform</p>
      <p className='text-muted' style={{paddingTop:'10px'}}>SS sink in utility & washing machine provision</p>
  </div>
  <div className='bodycontent'>
  <h5><strong>Doors</strong></h5>
  <strong className='h6'>Main Doors</strong>
  <p className='text-muted' style={{paddingTop:'10px'}}>Solid wood / engineered door frame with veneer door finish</p>
  <strong className='h6'>Bedroom Doors</strong>
  <p className='text-muted' style={{paddingTop:'10px'}}>Hard core flush door with laminate finish</p>
  <p className='text-muted' style={{paddingTop:'10px'}}>Termite treated wooden frames</p>
  <strong className='h6'>Bedroom Doors</strong>
  <p className='text-muted' style={{paddingTop:'10px'}}>Protective coating inside the bathroom doors</p>
  <strong className='h6'>Door Fitting & Locks</strong>
  <p className='text-muted' style={{paddingTop:'10px'}}>Dorma or equivalent</p>
  </div>
  <div className='bodycontent'>
  <h5><strong>Electrical</strong></h5>
  <p className='text-muted' style={{paddingTop:'10px'}}>A/C provision in living, dining and all bedrooms with required cables/switches</p>
  <p className='text-muted' style={{paddingTop:'10px'}}>3-phase with individual meters</p>
  <p className='text-muted' style={{paddingTop:'10px'}}>Legrand modular switches or equivalent</p>
  <strong className='h6'>Bedrooms</strong>
  <p className='text-muted' style={{paddingTop:'10px'}}>2-way switches for light and fan in all bedrooms</p>
  <p className='text-muted' style={{paddingTop:'10px'}}>Siemens or equivalent ELCB tripper in each flat</p>
  </div>
  </div>
  
  
        {/* Specification end */}      
       
 {/* model flats Starts */}
 <a name='flats'></a>
 <div className='model'>
   <h2 className='model2'>Model Flats</h2>
 <div class="grid">
  <img src="https://images.adsttc.com/media/images/5be3/3a40/08a5/e549/e300/0315/newsletter/42442.jpg?1541618191" alt="Sample photo"/>
  <img src="https://www.thepinnaclelist.com/wp-content/uploads/2020/12/001-Black-is-Back-Apartment-Interior-Design-Kiev-Ukraine-33bY-Architecture.jpeg" alt="Sample photo"/>
  <img src="https://s3-ap-southeast-1.amazonaws.com/atap-main/gallery-full/7c4a8bdd-5a45-44f1-bc0b-666ff60c1db4/modern-apartment-design.jpg" alt="Sample photo"/>
  <img src="https://edocarchitects.com/wp-content/uploads/2017/07/Mockup-Apartment-Istanbul-Living-room-Interior-design-2.jpg" alt="Sample photo"/>
  <img src="https://www.decorilla.com/online-decorating/wp-content/uploads/2020/07/Sleek-and-transitional-modern-apartment-design-scaled.jpg" alt="Sample photo"/>
  <img src="https://archello.s3.eu-central-1.amazonaws.com/images/2020/11/03/nid-interior-modern-interior-design-of-2-bedroom-apartment-apartments-archello.1604392458.3519.png" alt="Sample photo"/>
  <img src="https://cdn.vox-cdn.com/thumbor/soPS1FmH_TsFrUmM5HGBOh_fMhA=/0x0:1920x1080/1200x675/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/64982912/tr_cb2115a6_bb65_4565_b804_416ff1765caf_613932_4_elsie_userview_22.0.jpg" alt="Sample photo"/>
  <img src="https://media.architecturaldigest.com/photos/5e9f0a12d5eaf100086259e0/master/pass/Peter_Sandel_0222.jpg" alt="Sample photo"/>
  <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/room-divider-ideas-tranebergsva-gen-stockholm-living-room-industry-fantastic-frank-popular-copy-1561410782.jpg" alt="Sample photo"/>
  <img src="https://www.architecturebrio.com/wp-content/uploads/Projects/Casa-BRIO-Apartment/brio_casa-brio-apartment-renovation_010-living-room-and-open-kitchen-1.jpg" alt="Sample photo"/>
   </div>
  </div>
 {/* model flats End */}
 
 {/* map starts */}
 <a name='map'></a>
 <h2 className='maphead text-muted'><RiMapPinLine className='text-danger' size={50}/>Location <span className='text-danger'>Map</span></h2>
<div className='maps'>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.61705653053!2d143.8518588576872!3d-37.561060121577746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad144f7a34881f7%3A0x8a98faeaf22471d!2sBallarat%20Real%20Estate!5e0!3m2!1sen!2sin!4v1648481438451!5m2!1sen!2sin"  className='mapmain'  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
 {/* map ends */}
</>
    
  )
}

export default Home