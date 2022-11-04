import React,{useState} from 'react'
import Footer from './Footer'
import Header from './Header'
import ImageWithText2 from './ImageWithText2'
import bannerbtn1 from '../Images/OfficePay-banner-btn-1.png'
import bannerbtn2 from '../Images/OfficePay-banner-btn-2.png'
import createsocial from '../Images/create-social.png'
import createsocial2 from '../Images/create-social-2.png'
import createsocial3 from '../Images/create-social-3.png'
import '../Css/Create-account.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { createaccountBuilding, createaccountoffice } from '../redux/actionstypes'

import { API_STRING } from '../WebService';
import ApiCallback from './ApiCallback';

function CreateAccount() {

  let headers = {
    rrn: 2000,
    stan: 2009,
  };
  
  const dispatch= useDispatch() 

  const [createaccount, setcreateaccount] =useState({
    Buildingemail:'',
    Buildingpassword:'',
    Buildingconfirm:''
  })

  const [createaccountOffice, setcreateaccountOffice] =useState({
    Officeemail:'',
    Officepassword:'',
    Officeconfirm:''
  })

  const [toggleform , setToggleForm]= useState(true)

  const navigate =useNavigate()

  const handleBuildinginput=(e)=>{
    setcreateaccount({
      ...createaccount, [e.target.name]:e.target.value
    })
  }

  const handleOfficeinput=(e)=>{
    setcreateaccountOffice({
      ...createaccountOffice, [e.target.name]:e.target.value
    })
  }

  const handlecreateAccountBuilding=async(e)=>{
    e.preventDefault();
    
    try {
      var param=`email=${createaccount.Buildingemail}&password=${createaccount.Buildingpassword}&password_confirmation=${createaccount.Buildingconfirm}&role_id=Building`
      var apiCallbackRepsonse = await ApiCallback.getApiCallback(
        param,
        API_STRING.api_type_post_method, API_STRING.api_register
    );
    if (apiCallbackRepsonse != null && apiCallbackRepsonse.status == 201) {
        alert(apiCallbackRepsonse.message)
        navigate('/BuildingDetails')
        dispatch(createaccountBuilding(createaccount))
      
    } else if (apiCallbackRepsonse != null && apiCallbackRepsonse.status == 400) {
       console.log("response status :",apiCallbackRepsonse.message);
    } else {       
        console.log("error :", "Something went wrong");
    }

    } catch (error) {
      console.log("error :", error);
   
  }
}

  const handlecreateAccountOffice=async(e)=> {
    e.preventDefault();
    try {
      var param=`email=${createaccountOffice.Officeemail}&password=${createaccountOffice.Officepassword}&password_confirmation=${createaccountOffice.Officeconfirm}&role_id=Office`
      var apiCallbackRepsonse = await ApiCallback.getApiCallback(
        param,
        API_STRING.api_type_post_method, API_STRING.api_register
    );
    if (apiCallbackRepsonse != null && apiCallbackRepsonse.status == 200) {
        alert(apiCallbackRepsonse.message)
        navigate('/OfficeDetails')
        dispatch(createaccountoffice(createaccountOffice));
      
    } else if (apiCallbackRepsonse != null && apiCallbackRepsonse.status == 201) {
       console.log("response status :", apiCallbackRepsonse.message);
    } else {       
        console.log("error :", "Something went wrong");
    }
   
    } catch (error) {
      alert(error)
    }
   
  }  

  return (
    <div className='Create-acount-wrapper'>
      <Header/>
        <section className='banner-image-createaccount'>
          <div className="banner-image-content-createaccount"> 
            <h1> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <button> <img src={bannerbtn1}/> </button>
            <button> <img src={bannerbtn2}/> </button>  
          </div>

          <div className='Createaccount-form'>
            <div className='create-btn-wrapper'>   
              <button className={toggleform ?'create-btn-active':''} onClick={()=>{setToggleForm(true)}}> Building   </button>
              <button className={toggleform ?'':'create-btn-active'} onClick={()=>{setToggleForm(false)}}> Office   </button>
            </div>
            { toggleform ? <form>
              <h5> Create an Account</h5>
              <p> Please SignUp to your Account to continue with Office Pay</p>
              <div className='input-wrapper'>
                <input type="email" placeholder="Enter your Email" name="Buildingemail" value={createaccount.Buildingemail} onChange={handleBuildinginput}/>
                <i className="fa-solid fa-user"></i>
              </div> 

              <div className='input-wrapper'> 
                <input type="password" placeholder="Enter Password" name="Buildingpassword" value={createaccount.Buildingpassword} onChange={handleBuildinginput}/>
                <i className="fa-solid fa-key"></i>
              </div>

              <div className='input-wrapper'> 
                <input type="password" placeholder="Confirm Password" name="Buildingconfirm" value={createaccount.Buildingconfirm} onChange={handleBuildinginput}/>
                <i className="fa-solid fa-key"></i>
              </div>

              <button onClick={handlecreateAccountBuilding}> Login</button>
              <p className='already-login-p'> Already have an account? <a> Login</a></p>

              <div className='form-social-media'>
                <p> Or SignUp with </p>
                <ul> 
                  <li><img src={createsocial3}/> </li>
                  <li><img src={createsocial2}/> </li>
                  <li><img src={createsocial}/> </li> 
                </ul>
              </div>

              </form> :  <form>
                <h5 className='create-account-h5'> Create an Account</h5>
                <p> Please SignUp to your Account to continue with Office Pay</p>

                <div className='input-wrapper'>
                  <input type="email" placeholder="Enter your Email" name="Officeemail" value={createaccountOffice.Officeemail} onChange={handleOfficeinput}/>
                  <i className="fa-solid fa-user"></i>
                </div> 

                <div className='input-wrapper'> 
                  <input type="password" placeholder="Enter Password" name="Officepassword" value={createaccountOffice.Officepassword} onChange={handleOfficeinput}/>
                  <i className="fa-solid fa-key"></i>
                </div>

                <div className='input-wrapper'> 
                  <input type="password" placeholder="Confirm Password" name="Officeconfirm" value={createaccountOffice.Officeconfirm} onChange={handleOfficeinput}/>
                  <i className="fa-solid fa-key"></i>
                </div>

                <button onClick={handlecreateAccountOffice}> Login</button>
                <p className='already-login-p'> Already have an account? <a> Login</a></p>
                
                <div className='form-social-media'>
                  <p> Or SignUp with </p>
                  <ul> 
                      <li><img src={createsocial3}/> </li>
                      <li><img src={createsocial2}/> </li>
                      <li><img src={createsocial}/> </li> 
                  </ul>
                </div>
              </form>
            } 
          </div>
      </section>
      <ImageWithText2/>
      <Footer/>
    </div>
  )
}

export default CreateAccount;