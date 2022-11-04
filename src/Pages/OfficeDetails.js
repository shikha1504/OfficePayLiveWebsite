import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import "../Css/Create-account.css";
import { useNavigate } from "react-router-dom";
import "../Css/BuildingDetails.css";
import ImagePickerone from "../Images/Image-picker-1.png";
import ImagePickertwo from "../Images/Image-picker-2.png";
import ImagePickerthree from "../Images/Image-picker-3.png";
import HeaderTwo from "./HeaderTwo";
import { useDispatch, useSelector } from "react-redux";
import { Addaction } from "../redux/actionstypes";
import "../Css/OfficeDetails.css";
import axios from "axios";
import { API_STRING } from '../WebService';
import ApiCallback from './ApiCallback';
import Select from "react-select";
import { useEffect } from "react";


function OfficeDetails() {
  const baseURL = "https://goinvoicy.com/api";

  const [inputfield, setinputfield] = useState({
    officename: "",
    officeownername: "",
    address: "",
    email: "",
    gst: "",
    contact: "",
    officenumber:"",
    city: "",
    pan: "",
    building:"",
    user_id:localStorage.getItem("user_id"),

  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedPanCart, setSelectedPanCartFile] = useState(null);
  const[building_id,setBuildingId]=useState();
  const[building,setBuildingList]=useState([]);
   
  useEffect(()=>{
     getBuilidingApi();
  },[])

  const getBuilidingApi=async()=>{
    var token = localStorage.getItem("access_token");

    var apiCallbackRepsonse = await ApiCallback.getAuthTokenApiCallback(
      "",
      API_STRING.api_type_get_method, API_STRING.api_get_building,token

  );
  if (apiCallbackRepsonse != null && apiCallbackRepsonse.status == 200) {
    console.log("response--"+apiCallbackRepsonse)
    var data=apiCallbackRepsonse.data
    data.forEach((object,i) => {
      console.log("indexing--"+i)
     // var colorVal=Math.floor(Math.random()*16777215).toString(16)
      object.label=data[i].building_name;   
  
    });
    setBuildingList(data);
  } 
  }

  const handleInputchange = (e) => {
    setinputfield({
      ...inputfield,
      [e.target.name]: e.target.value,
    });
  };
  const userData = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOfficeDetails = async(e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("user_id", inputfield.user_id);
    formdata.append("office_number", inputfield.contact);
    formdata.append("contact_number",inputfield.officenumber)
    formdata.append("office_name",inputfield.officename);
    formdata.append("office_address", inputfield.address);
    formdata.append("email_address", inputfield.email);
    formdata.append("gst_number",inputfield.gst);
    formdata.append("pan_number",inputfield.pan)
    formdata.append("office_owner_name",inputfield.officeownername);
    formdata.append("gst_number", inputfield.gst);
    formdata.append("phone_number", inputfield.contact);
    formdata.append("city", inputfield.city);
    formdata.append("pan_card", inputfield.pan);
    formdata.append("office_image", selectedFile); //selectedFile
    formdata.append("pan_card_image", selectedPanCart); //selectedPanCart
    formdata.append("building_id",building_id)
    var apiCallbackRepsonse = await ApiCallback.getApiCallback(
      formdata,
      API_STRING.api_type_post_method, API_STRING.api_add_office
  );

  if (apiCallbackRepsonse != null && apiCallbackRepsonse.status == 201) {
    // navigate(`/BankDetail/${e.id}`);
   // var data=apiCallbackRepsonse.building
    console.log("add office response==="+JSON.stringify(apiCallbackRepsonse))
    // navigate("/BankDetailOffice",{state:{building_id:data.id}});
     //dispatch(Addaction(inputfield));

  }  else {       
         console.log("error :", "Something went wrong");
  }
    // try {
    //   axios
    //     .post(
    //       baseURL +
    //         `/offices?address=${inputfield.address}&city=${inputfield.city}&office_owner_name=${inputfield.officeownername}&office_name=${inputfield.officename}&email_address=${inputfield.email}&gst_number=${inputfield.gst}&contact_number=${inputfield.contact}&pan_number=${inputfield.pan}`
    //     )
    //     .then((result) => {
    //       console.log("result :", result);
    //       navigate("/BankDetailOffice");
    //       dispatch(Addaction(inputfield));
    //     });
    // } catch (error) {
    //   console.log(error);
    // }
    //console.log('Office Details :', inputfield);
  };

  return (
    <div className="Building-details-wrapper">
      <HeaderTwo dashboardpath="office" />
      <section className="banner-image-createaccount">
        <div className="banner-image-content-createaccount">
          <h1> Add your first property on Office Pay.</h1>
          <p>
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <button onClick={() => dispatch(Addaction(inputfield))}> </button>
        </div>
        <div className="Createaccount-form officedetails-form">
          <form>
            <h2> Complete your Office Details</h2>
            <div className="row">
              <div className="small-12 medium-2 large-2 columns">
                <div className="circle">
                  <img className="profile-pic" src={ImagePickerone} />
                </div>
                <p className="upload-button"> Add Office Image</p>
                <div className="p-image">
                  {/* <i className="fa fa-camera upload-button"></i> */}
                  <img className="upload-button" src={ImagePickertwo} />
                  <input className="file-upload" type="file" accept="image/*" />
                </div>
              </div>
            </div>
            <input
              type="name"
              name="officeownername"
              value={inputfield.officeownername}
              placeholder="Office Owner Name"
              onChange={handleInputchange}
            />
            <input
              type="name"
              name="officename"
              value={inputfield.officename}
              placeholder="Office Name"
              onChange={handleInputchange}
            />
            <input
              type="text"
              name="address"
              value={inputfield.address}
              placeholder="Address"
              onChange={handleInputchange}
            />
          
            {/* <div className="Select-option-section"> */}
                  <Select
                    options={building}
                    placeholder="Select Building"
                    styles={customStyles}
                    value={inputfield.building}
                    onChange={handleInputchange}
                    name="building"
                  />
             {/* </div> */}
          
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
                    {" "}
                    Upload your PAN card Image{" "}
                  </p>
                  <input
                    className="file-upload-two"
                    type="file"
                    accept="image/*"
                  />
                </div>
              </div>
            </div>
            <button
              onClick={handleOfficeDetails}
              className="Office-Details-next-btn"
            >
              {" "}
              Next
            </button>
          </form>
          {/* {userData.officename} */}
        </div>
      </section>
      <Footer />
    </div>
  );
}
const customStyles = {
  option: (provided, state) => ({
    ...provided,
  }),
  control: (provided) => ({
    ...provided,
    borderRadius: "50px",
    width: "100%",
    height: "35px", 
    background:"#C2C2C2",
    border: "1px solid #C2C2C2",
    paddingLeft: "10px",
    paddingRight: "10px",
  }),
};

export default OfficeDetails;
