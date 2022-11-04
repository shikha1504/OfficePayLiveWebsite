import React from 'react'
import '../Css/HomePage.css'
import bannerbtn1 from '../Images/OfficePay-banner-btn-1.png'
import bannerbtn2 from '../Images/OfficePay-banner-btn-2.png'
function ImageWithText2() {
  return (
    <div>

     <div className='Image-with-text-two'>  
            <div>
             <h1> Do even more with the Office Pay App</h1>
             <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
             <button><img src={bannerbtn1}/></button>
            <button> <img src={bannerbtn2}/></button> 
            </div>
       </div>
    </div>
  )
}

export default ImageWithText2