import React from 'react'
import CloseIcon from '../Images/Closeicon.png'
import PopupImage from '../Images/PopupImage.png'
import '../Css/Popuptwo.css'
function Popuptwo(props) {
  return (
    <div className='popup popuptwo'>
    <div className='popup_inner popup-inner-two'>
         <div className='close-btn-wrapper'> 
           <button onClick={props.closePopup} ><img src={CloseIcon}/></button>
         </div>
        <div className='popup-inner-div'> 

            <img src={PopupImage}/>

             <h5>{props.text} </h5>  
            </div>  
    </div>
  </div>
  )
}

export default Popuptwo