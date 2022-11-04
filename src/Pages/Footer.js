import React from 'react'
import footerlogo from '../Images/Office Pay - Logo.png'
import SocialFooter1 from '../Images/Footer-Icons.png'
import SocialFooter2 from '../Images/Footer-Icons-2.png'
import SocialFooter3 from '../Images/Footer-Icons-3.png'


function Footer() {
  return (
    <div className='footer-wrapper'>
         <div className='left-side-footer'>
           <img src={footerlogo}/>
           <div className='footer-text'>
           <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
           </div>
          </div>
         <div className='right-side-footer'>
          <ul>
             <li> <img src={SocialFooter3}/> <span> Facebook</span></li>
             <li> <img src={SocialFooter2}/> <span>Instagram</span></li>
            <li>  <img src={SocialFooter1}/> <span>Twitter</span></li>
           </ul>
         </div> 
    </div>
  )
}

export default Footer