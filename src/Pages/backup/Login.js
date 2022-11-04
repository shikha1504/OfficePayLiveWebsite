import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import ImageWithText2 from "./ImageWithText2";
import bannerbtn1 from "../Images/OfficePay-banner-btn-1.png";
import bannerbtn2 from "../Images/OfficePay-banner-btn-2.png";
import createsocial from "../Images/create-social.png";
import createsocial2 from "../Images/create-social-2.png";
import createsocial3 from "../Images/create-social-3.png";
import "../Css/Login.css";
import { API_STRING, ApiCalling } from '../WebService';
import ApiCallback from './ApiCallback';

import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  //const baseURL = "https://cassidyblinds.ie/officepay/api";
  const baseURL="https://goinvoicy.com/api";

  const [loginBuilding, setloginBuilding] = useState({
    Buildingemail: "",
    Buildingpassword: "",
    Buildingconfirm: "",
  });

  const [loginOffice, setloginOffice] = useState({
    Officeemail: "",
    Officepassword: "",
    Officeconfirm: "",
  });

  const [toggleform, setToggleForm] = useState(true);
  const navigate = useNavigate();

  const handleBuildinginput = (e) => {
    setloginBuilding({
      ...loginBuilding,
      [e.target.name]: e.target.value,
    });
  };

  const handleOfficeinput = (e) => {
    setloginOffice({
      ...loginOffice,
      [e.target.name]: e.target.value,
    });
  };

  const handleLoginBuilding = (e) => {
    e.preventDefault();
    try {
      axios
        .post(
          baseURL +
            `/login?email=${loginBuilding.Buildingemail}&password=${loginBuilding.Buildingpassword}`
        )
        .then((result) => {
          if (result) {
            //console.log('access_token', result.data.access_token)
            localStorage.setItem("access_token", result.data.access_token);
            navigate("/DashBoard");
          }
        });
    } catch (error) {
      navigate("/login");
      console.log("error :", error);
    }
  };
//**previous api calling method-------- */
  const handleLoginOffice = (e) => {
    e.preventDefault();
    try {
      axios
        .post(
          baseURL +
            `/login?email=${loginOffice.Officeemail}&password=${loginOffice.Officepassword}`
        )
        .then((result) => {
          if (result) {
            //console.log(result.data.access_token)
            localStorage.setItem("access_token", result.data.access_token);
            navigate("/DashBoardOffice");
          }
        });
    } catch (error) {
      console.log("error :", error);
    }
  };
  //********login api using api calling class--------- */
  const callApiForLoginOffice=async()=>{
    var param = "email=" + loginOffice.Officeemail + "&password=" + loginOffice.Officepassword 
    //var apiParamsFormData = new FormData();
   // apiParamsFormData.append('contact', text_mobile_no);


    var apiCallbackRepsonse = await ApiCallback.getApiCallback(
        param,
        API_STRING.api_type_post_method, API_STRING.api_login
    );

        if (apiCallbackRepsonse != null && apiCallbackRepsonse.status == 200) {
          var data = apiCallbackRepsonse.data;
          localStorage.setItem("access_token", data.access_token);
          navigate("/DashBoardOffice");
        
      } else if (apiCallbackRepsonse != null && apiCallbackRepsonse.status == 201) {
         // showSnackBar(apiCallbackRepsonse.message)
         console.log("response status :", "--201");
      } else {
       
          console.log("error :", "Something went wrong");

          //this.showSnackBar(STRINGS.api_callback_string.some_error_occured);
      }
  }

  return (
    <div className="Login-wrapper">
      <Header />
      <section className="banner-image-createaccount">
        <div className="banner-image-content-createaccount">
          <h1> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
          <p>
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <button>
            {" "}
            <img src={bannerbtn1} alt="" />
          </button>
          <button>
            {" "}
            <img src={bannerbtn2} alt="" />
          </button>
        </div>

        <div className="Createaccount-form">
          <div className="create-btn-wrapper">
            <button
              className={toggleform ? "create-btn-active" : ""}
              onClick={() => {
                setToggleForm(true);
              }}
            >
              {" "}
              Building{" "}
            </button>
            <button
              className={toggleform ? "" : "create-btn-active"}
              onClick={() => {
                setToggleForm(false);
              }}
            >
              {" "}
              Office{" "}
            </button>
          </div>
          {toggleform ? (
            <form>
              <h5> Login</h5>
              <p> Please Login to your Account to continue with Office Pay</p>
              <div className="input-wrapper">
                <input
                  type="email"
                  placeholder="Enter your Email"
                  name="Buildingemail"
                  value={loginBuilding.Buildingemail}
                  onChange={handleBuildinginput}
                />
                <i className="fa-solid fa-user"></i>
              </div>

              <div className="input-wrapper">
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="Buildingpassword"
                  value={loginBuilding.Buildingpassword}
                  onChange={handleBuildinginput}
                />
                <i className="fa-solid fa-key"></i>
              </div>

              <div className="forget-password">
                <a> Forget Password ?</a>
              </div>

              <div>
                <button onClick={handleLoginBuilding}> Login</button>
              </div>

              <p className="already-login-p">
                {" "}
                Don't have an account? <a> Create an account</a>
              </p>
              <div className="form-social-media">
                <p> Or SignUp with </p>
                <ul>
                  <li>
                    <img src={createsocial3} alt="" />
                  </li>
                  <li>
                    <img src={createsocial2} alt="" />
                  </li>
                  <li>
                    <img src={createsocial} alt="" />
                  </li>
                </ul>
              </div>
            </form>
          ) : (
            <form>
              <h5> Login</h5>
              <p> Please Login to your Account to continue with Office Pay</p>

              <div className="input-wrapper">
                <input
                  type="email"
                  placeholder="Enter your Email"
                  name="Officeemail"
                  value={loginOffice.Officeemail}
                  onChange={handleOfficeinput}
                />
                <i className="fa-solid fa-user"> </i>
              </div>

              <div className="input-wrapper">
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="Officepassword"
                  value={loginOffice.Officepassword}
                  onChange={handleOfficeinput}
                />
                <i className="fa-solid fa-key"></i>
              </div>

              <div className="forget-password">
                <a> Forget Password ?</a>
              </div>

              <button onClick={callApiForLoginOffice}> Login </button>

              <p className="already-login-p">
                {" "}
                Don't have an account? <a> Create an account </a>
              </p>
              <div className="form-social-media">
                <p> Or SignUp with </p>
                <ul>
                  <li>
                    <img src={createsocial3} alt="" />
                  </li>
                  <li>
                    <img src={createsocial2} alt="" />
                  </li>
                  <li>
                    <img src={createsocial} alt="" />
                  </li>
                </ul>
              </div>
            </form>
          )}
        </div>
      </section>
      <ImageWithText2 />
      <Footer />
    </div>
  );
}

export default Login;
