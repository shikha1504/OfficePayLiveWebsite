import React from 'react'
import bannerbtn1 from '../Images/OfficePay-banner-btn-1.png'
import bannerbtn2 from '../Images/OfficePay-banner-btn-2.png'
import FeatureIcon1 from '../Images/Office-Icon-1.png'
import FeatureIcon2 from '../Images/Office-Icon-2.png'
import FeatureIcon3 from '../Images/Office-Icon-3.png'
import aboutimg from '../Images/About-Banner-After.png'
import aboutmobile from '../Images/Mobile-image-two.png'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import Footer from './Footer'
import '../Css/HomePage.css'
import Header from './Header'
import ImageWithText2 from './ImageWithText2'


function HomePage(props) {
  return (
    <div>
       <Header/>
       <section className='banner-image'>
           <div className='banner-image-content'>
               <h1> Easy platform to manage Office Invoices</h1>
               <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <button><img src={bannerbtn1}/></button>
            <button> <img src={bannerbtn2}/></button>  
           </div>
             </section> 
             <section className='banner-image-mobile'>
              <div className='banner-image-main'> </div>
               <div className="banner-image-content-mobile"> 
                 <h1> Easy platform to manage Office Invoices</h1>
               <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <button><img src={bannerbtn1}/></button>
                <button> <img src={bannerbtn2}/></button>  
              </div>
                </section>
      <div className="App-features">
          <h1> Features In This App</h1>
          <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
         <div className='features-row'>
               <div className='inner-feature-block'>
                 <img src={FeatureIcon1}/>
                 <div className='feature-content-wrap'>
                 <h4> Notification</h4>
                 <p>  Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                 </div>
               </div>
              <div className='inner-feature-block'>
              <img src={FeatureIcon2}/>
                <div className='feature-content-wrap'>
                 <h4> Create Invoice & sent</h4>
                 <p>  Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
              </div>
              </div>
              <div className='inner-feature-block'>
              <img src={FeatureIcon3}/>
                 <div className='feature-content-wrap'>
                 <h4> Easy way to pay office invoice</h4>
                 <p>  Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
              </div>
              </div>
             </div> 
       
        </div>
      <div className='About-the-product'>
            <div className='first-section'>
              <img className="about-desktop" src={aboutimg}/>
              <img className="about-Mobile" src={aboutmobile}/>
            </div>
            <div className='second-section'>
               <div className='about-content-wrap'>
                    <h6> ABOUT THE PRODUCT</h6>
                     <h1>  Office pay set you free from paper invoices</h1>
                     <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
               </div>
            </div>
          </div> 
     <div className='testimonial-outer'> 
       <div className='testimonial-section'> 
             <h5> OUR TESTIMONIALS</h5> 
            <OwlCarousel items={1}  
          className="owl-theme"  
          loop  
          nav  
          margin={8} 
          dots={false}> 
             { props.testimonial.map(data => 
                 { return(
                 <div className='testimonial-content ' key={data.name}>
                      <p> {data.quotes}</p>
                  <div className="testimonial-inner"> 
                <img src={data.img}/>
                 <div className='testimonial-text-content'>
                 <h6> {data.name}</h6>
                 <p className="testimonial-name"> {data.designation}</p>
                 </div>
                 </div>
                
               </div>)
               }
             
             )}
           </OwlCarousel>
      
           </div>  
       </div>
     {/* <div className='Image-with-text-two'>  
            <div>
             <h1> Do even more with the Office Pay App</h1>
             <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
             <button><img src={bannerbtn1}/></button>
            <button> <img src={bannerbtn2}/></button> 
            </div>
       </div>   */}
 <ImageWithText2/>
  <Footer/>
    </div>
  )
}

export default HomePage