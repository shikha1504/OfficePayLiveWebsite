import React, { useState } from "react";
import Footer from "./Footer";
import "../Css/Create-account.css";
import { useNavigate ,useLocation} from "react-router-dom";
import "../Css/BankDetails.css";
import HeaderTwo from "./HeaderTwo";
import Popuptwo from "./Popuptwo";
import axios from "axios";
import { API_STRING, ApiCalling } from '../WebService';
import ApiCallback from './ApiCallback';
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function BankDetail() {
  const location = useLocation();

  const [Bankfield, setBankfield] = useState({
    holdername: "",
    accnumber: "",
    Reaccnumber: "",
    ISFC: "",
  });
  const[id,setId]=useState(location.state.building_id);

  const [togglepopup, settogglepopup] = useState(false);

  const handleBankInputchange = (e) => {
    setBankfield({
      ...Bankfield,
      [e.target.name]: e.target.value,
    });
  };
 
  const navigate = useNavigate();

  const handleBankDetails = async(e) => {
    e.preventDefault();
  
    var param=`account_holder=${Bankfield.holdername}&account_number=${Bankfield.accnumber}&ifsc_code=${Bankfield.ISFC}&building_id=${id}`
  
    var apiCallbackRepsonse = await ApiCallback.getApiCallback(
        param,
        API_STRING.api_type_post_method, API_STRING.api_add_bank
    );

    if (apiCallbackRepsonse != null && apiCallbackRepsonse.status == 201) {
      
      alert(apiCallbackRepsonse.message);
      settogglepopup(!togglepopup);
      navigate("/DashBoard");
    }  else {       
        console.log("error :", "Something went wrong");
    }
   
  };

  return (
    <div className="Bank-details-wrapper">
      <HeaderTwo />
      <section className="banner-image-createaccount">
        <div className="banner-image-content-createaccount">
          <h1> Add your first property on Office Pay.</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>

        <div className="Createaccount-form">
          <form>
            <h2> Add your Bank Details</h2>
            <input
              type="name"
              name="holdername"
              value={Bankfield.holdername}
              placeholder="Account Holder Name"
              onChange={handleBankInputchange}
            />
            <input
              type="text"
              name="accnumber"
              value={Bankfield.accnumber}
              placeholder="Enter your account number"
              onChange={handleBankInputchange}
            />
            <input
              type="email"
              name="Reaccnumber"
              value={Bankfield.Reaccnumber}
              placeholder="Re-enter your account number"
              onChange={handleBankInputchange}
            />
            <input
              type="number"
              name="ISFC"
              value={Bankfield.ISFC}
              placeholder="Enter ISFC Code"
              onChange={handleBankInputchange}
            />
            <button onClick={handleBankDetails}> Submit</button>
          </form>
        </div>
      </section>
      <Footer />
      {togglepopup ? (
        <Popuptwo
          text="Your Details Successfully Submited"
          closePopup={handleBankDetails}
        />
      ) : null}
    </div>
  );
}

export default BankDetail;
