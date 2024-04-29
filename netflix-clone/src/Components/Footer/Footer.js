import React from 'react'
import "./Footer.css"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <div className='footer_outer_container'>
      <div className='footer_inner_container'>

        <div className='footer_icons'>
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
        <div className='footer_data'>
        <ul>
          <li>Audio Description</li>
          <li>Investor Relations</li>
          <li>Privacy</li>
          <li>Contact Us</li>
        </ul>
        <div>
        <ul>
          <li>Help Center</li>
          <li>Jobs</li>
          <li>Legal Notices</li>
          {/* <li>Do Not Sell or Share My Personal Information</li> */}

        </ul>
      </div>
      <div>
        <ul>
          <ul>
            <li>Gift Cards</li>
            <li>Netflix Shop</li>
            <li>Cookie Preferences</li>
            <li>Ad Choices</li>
            
          </ul>
          <ul>
          <li>Media Center</li>
          <li> privacy</li>
          <li>Contact Us</li>
          </ul>
          
        </ul>
      </div>
      <div className='service_code'>
        <p>
          Service Code
        </p>
      </div>
      <div className='copy-right'>
        &copy;1997-2024 Netflix,Inc.
      </div>
    </div>
        </div>
      </div>    
      
  )
}

export default Footer

