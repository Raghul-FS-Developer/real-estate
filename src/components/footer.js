import React from 'react';
import '../styles/footer.css';
import {AiFillGithub} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
import {FiTwitter} from 'react-icons/fi'


function Footer() {
  return (
<>

<div class="footer-basic">
        <footer>
            <div class="social"><a href="https://github.com/princeraghul?tab=repositories" target='_blank'><AiFillGithub/></a><a><BsInstagram/></a><a><FaFacebookF/></a><a><FiTwitter/></a></div>
            <ul class="list-inline">
                <li class="list-inline-item"><a href="/">Home</a></li>
                <li class="list-inline-item"><a >Services</a></li>
                <li class="list-inline-item"><a href="/about">About</a></li>
                <li class="list-inline-item"><a >Terms</a></li>
                <li class="list-inline-item"><a >Privacy Policy</a></li>
            </ul>
            <p class="owner">Made by Raghul © 2022</p>
        </footer>
    </div>
 
</>
  )
}

export default Footer