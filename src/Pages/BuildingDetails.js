import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import "../Css/Create-account.css";
import { useNavigate ,useParams,useLocation} from "react-router-dom";
import "../Css/BuildingDetails.css";
import ImagePickerone from "../Images/Image-picker-1.png";
import ImagePickertwo from "../Images/Image-picker-2.png";
import ImagePickerthree from "../Images/Image-picker-3.png";
import HeaderTwo from "./HeaderTwo";
import { useDispatch, useSelector } from "react-redux";
import { Addaction } from "../redux/actionstypes";
//import Api from '../API/Api'
import swal from "sweetalert";
import axios from "axios";
import { API_STRING } from '../WebService';
import ApiCallback from './ApiCallback';

function BuildingDetails() {
  const [inputfield, setInputField] = useState({
    buildingname: "",
    address: "",
    email: "",
    gst: "",
    contact: "",
    city: "",
    pan: "",
    user_id:localStorage.getItem("user_id"),
  });

  //var token = localStorage.getItem("access_token");
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedPanCart, setSelectedPanCartFile] = useState(null);

  const handleInputchange = (e) => {
    setInputField({
      ...inputfield,
      [e.target.name]: e.target.value,
    });
  };

  const userData = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // const location = useLocation();
  // console.log("get value from prev screen--"+location.state.name)
  const handleBuildingDetails = async(e) => {
    e.preventDefault();
    console.log("user id==="+localStorage.getItem("user_id"))
    const formdata = new FormData();
    formdata.append("user_id", inputfield.user_id);
    formdata.append("building_name", inputfield.buildingname);
    formdata.append("address", inputfield.address);
    formdata.append("email_id", inputfield.email);
    formdata.append("gst_number", inputfield.gst);
    formdata.append("phone_number", inputfield.contact);
    formdata.append("city", inputfield.city);
    formdata.append("pan_card", inputfield.pan);
    formdata.append("building_image", selectedFile); //selectedFile
    formdata.append("pan_card_image", selectedPanCart); //selectedPanCart

    var apiCallbackRepsonse = await ApiCallback.getApiCallback(
      formdata,
      API_STRING.api_type_post_method, API_STRING.api_add_building
  );

  if (apiCallbackRepsonse != null && apiCallbackRepsonse.status == 201) {
            // navigate(`/BankDetail/${e.id}`);
            var data=apiCallbackRepsonse.building
            console.log("building id==="+data.id)
             navigate("/BankDetail",{state:{building_id:data.id}});
             dispatch(Addaction(inputfield));
    
  }  else {       
      console.log("error :", "Something went wrong");
  }

    // try {
    //   axios
    //     .post(`https://goinvoicy.com/api/buildings`, formdata)
    //     .then((response) => {
    //       console.log("response--------------"+response)
    //       if (response) {
    //         swal(response.data[0]);
    //         navigate("/BankDetail");
    //         dispatch(Addaction(inputfield));
    //       }
    //     });
    // } catch (error) {
    //   console.log(error);
    // }
  };
  const getImgPick=(e)=>{
   console.log(" e.target.files========="+e.target.files[0])
  }
  return (
    <div className="Building-details-wrapper">
      <HeaderTwo />
      <section className="banner-image-createaccount">
        <div className="banner-image-content-createaccount">
          <h1> Add your first property on Office Pay.</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <button onClick={() => dispatch(Addaction(inputfield))}> </button>
        </div>

        <div className="Createaccount-form">
          <form>
            <h2> Complete your Building Details</h2>
            <div className="row">
              <div className="small-12 medium-2 large-2 columns">
                <div className="circle">
                  <img className="profile-pic" src={ImagePickerone} alt="" />
                </div>
                <p className="upload-button"> Add Building Image</p>
                <div className="p-image">
                  {/* <i className="fa fa-camera upload-button"></i> */}
                  <img className="upload-button" src={ImagePickertwo} alt="" />
                  <input
                    type="file"                   
                      //value={selectedFile}
                     // onChange={getImgPick}                   
                     onClick={e => (e.target.value = "")}
                     onChange={(e) => setSelectedFile(e.target.files[0])}
                    className="file-upload"
                    accept="image/*"
                  />
                </div>
              </div>
            </div>
            <input
              type="name"
              name="buildingname"
              value={inputfield.buildingname}
              placeholder="Building Name"
              onChange={handleInputchange}
            />
            <input
              type="text"
              name="address"
              value={inputfield.address}
              placeholder="Address"
              onChange={handleInputchange}
            />
            <input
              type="email"
              name="email"
              value={inputfield.email}
              placeholder="Email ID"
              onChange={handleInputchange}
            />
            <input
              type="number"
              name="gst"
              value={inputfield.gst}
              placeholder="GST Number"
              onChange={handleInputchange}
            />
            <input
              type="number"
              name="contact"
              value={inputfield.contact}
              placeholder="Contact Number"
              onChange={handleInputchange}
            />
            <input
              type="text"
              name="city"
              value={inputfield.city}
              placeholder="City"
              onChange={handleInputchange}
            />
            <input
              type="number"
              name="pan"
              value={inputfield.pan}
              placeholder="Enter your PAN Card number"
              onChange={handleInputchange}
            />
            <div className="row-two">
              <div className="small-12 medium-2 large-2 columns">
                <div className="circle-two">
                  <img
                    className="profile-pic-two"
                    src={ImagePickerthree}
                    alt=""
                  />
                </div>
                <div className="p-image-two">
                  {/* <i className="fa fa-camera upload-button"></i> */}
                  <p className="upload-button-two">
                    Upload your PAN card Image
                  </p>
                  <input
                    type="file"
                    //value={selectedFile}
                    onChange={(e) => setSelectedPanCartFile(e.target.files[0])}
                    className="file-upload-two"
                    accept="image/*"
                  />
                </div>
              </div>
            </div>
            <button onClick={handleBuildingDetails}> Next</button>
          </form>
          {userData.buildingname}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default BuildingDetails;
