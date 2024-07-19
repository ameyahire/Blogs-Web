import React from 'react'
import playStore from "./images/playstore.png";
import appStore from "./images/Appstore.png";
import instagram from "./images/instagram.png";
import linkedln from "./images/linkedln.png";
import gmail from "./images/mail.png";

import "./Footer.css"

const Footer = () => {
  return (
    
        <footer id='footer'>

        <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>BlogCentral</h1>
        <p>Write your own blogs with us</p>

        <p>Copyrights 2023 &copy; Shreyash</p>
      </div>

      <div className="rightFooter">
        <h4> Contact Us</h4>
        <a href="https://instagram.com/s_h_r_e_y_02?igshid=MzRlODBiNWFlZA==" target='_blank'>Instagram <img src={instagram} alt="" /></a>
        
        <a href="https://www.linkedin.com/in/shreyash-uke-18950322a/?trk=people-guest_people_search-card&originalSubdomain=in"target='_blank'>Linkedln<img src={linkedln} alt="" /></a>
        <a href="https://www.linkedin.com/in/shreyash-uke-18950322a/?trk=people-guest_people_search-card&originalSubdomain=in"target='_blank'>Gmail<img src={gmail} alt="" /></a>
      </div>


        </footer>

      
    
  )
}

export default Footer
