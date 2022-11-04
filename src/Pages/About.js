import React from 'react'
import Footer from './Footer'
import '../Css/About.css'
import Header from './Header'

function About() {
  return (
    <div>
        <Header/>
        <div className='about-wrapper'>        
          <section className='banner-image-about'>
               <div className="banner-image-content-about"> 
                 <h1> About Us</h1>
               <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <button>Read More</button>
              </div>
                </section>
                <section className='banner-image-mobile'>
              <div className='banner-image-main'> </div>
               <div className="banner-image-content-mobile"> 
               <h1> About Us</h1>
               <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <button>Read More</button>
              </div>
                </section>       
         </div>
        <Footer/>
    </div>
  )
}

export default About