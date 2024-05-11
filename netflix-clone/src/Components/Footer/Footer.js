import React from "react";
import "./Footer.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <div className="footer_outer_container">
      <div className="footer_inner_container">
        <div className="footer_icons">
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
        <div className="footer_data">
          <div>
          <ul>
            <a className='footer_links'href="https://www.netflix.com/browse/audio-description">
              <li>Audio Description</li>
            </a>
            <a className='footer_links' href="https://ir.netflix.net/ir-overview/profile/default.aspx">
              {" "}
              <li>Investor Relations</li>{" "}
            </a>
            <a className='footer_links' href="https://help.netflix.com/legal/privacy">
              <li>Privacy</li>
            </a>
            <a className='footer_links' href="https://help.netflix.com/en/contactus">
              <li>Contact Us</li>
            </a>
          </ul>
          </div>
         
          <div>
            <ul>
              <a className='footer_links' href="https://help.netflix.com/en/">
                <li>Help Center</li>{" "}
              </a>
              <a className='footer_links' href="https://jobs.netflix.com/">
                <li>Jobs</li>
              </a>
              <a className='footer_links' href="https://help.netflix.com/legal/notices">
                <li>Legal Notices</li>
              </a>
              <a className='footer_links' href="https://help.netflix.com/legal/dnsspi">
                {" "}
                <li>Do Not Sell or Share My personal Preferences </li>{" "}
              </a>
              {/* <li>Do Not Sell or Share My Personal Information</li> */}
            </ul>
          </div>
          <div>
              <ul>
                <a className='footer_links' href="https://www.netflix.com/redeem">
                  <li>Gift Cards</li>
                </a>
                <a className='footer_links' href="https://www.netflix.shop/">
                  <li>Netflix Shop</li>{" "}
                </a>
                <a className='footer_links' href="https://help.netflix.com/legal/privacy#cookies">
                  <li>Cookie Preferences</li>
                </a>
                <a className='footer_links' href="https://help.netflix.com/legal/dnsspi#DAA">
                  <li>Ad Choices</li>
                </a>
                </ul>
                </div>
                <div>
                  <ul> 

                  
                <a className='footer_links' href="https://media.netflix.com/en/">
                  <li>Media Center</li>
                </a>
                <a className='footer_links' href="https://media.netflix.com/en/">
                  <li>Terms of Use</li>
                </a>
                <a className='footer_links' href="https://help.netflix.com/en/node/134094">
                  <li>Corporate Information</li>
                </a>
              </ul>
              
          </div>
        </div>
        <div className="service_code">
          <p>Service Code</p>
        </div>
        <div className="copy-right">&copy;1997-2024 Netflix,Inc.</div>
      </div>
    </div>
  );
};

export default Footer;
