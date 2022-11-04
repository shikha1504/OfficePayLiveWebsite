import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Css/Popup.css";
import CloseIcon from "../Images/Closeicon.png";
import axios from "axios";

function Popup(props) {
  const navigate = useNavigate();
  const baseURL = "https://cassidyblinds.ie/officepay/api";

  const [officeField, setOfficeField] = useState({
    buildingWing: "",
    officeNumber: "",
    floorNumber: "",
    officeName: "",
    ownerName: "",
    contactNumber: "",
    email: "",
    gst: "",
  });

  const handleOfficeInputchange = (e) => {
    setOfficeField({
      ...officeField,
      [e.target.name]: e.target.value,
    });
  };

  //console.log("officeField :", officeField);

  const addOfficeDetails = (e) => {
    e.preventDefault();
    try {
      axios
        .post(
          baseURL +
            `/offices?wing=${officeField.buildingWing}&office_number=${officeField.officeNumber}&floor_number=${officeField.floorNumber}&office_name=${officeField.officeName}&office_owner_name=${officeField.ownerName}&contact_number=${officeField.contactNumber}&email_address=${officeField.email}&gst_number=${officeField.gst}&building_id=2`
        )
        .then((response) => {
          if (response.status === 200) {
            console.log(response);
            navigate("/BuildingOffices");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="popup">
      <div className="popup_inner">
        <div className="close-btn-wrapper">
          <button onClick={props.closePopup}>
            <img src={CloseIcon} alt="" />
          </button>
        </div>

        <form className="popup-office-details-form">
          <h2> Add Office Details </h2>
          <input
            type="text"
            name="buildingWing"
            value={officeField.buildingWing}
            placeholder="Enter bui`lding wing"
            onChange={handleOfficeInputchange}
          />
          <input
            type="text"
            name="officeNumber"
            value={officeField.officeNumber}
            onChange={handleOfficeInputchange}
            placeholder="Enter office number"
          />
          <input
            type="text"
            name="floorNumber"
            value={officeField.floorNumber}
            onChange={handleOfficeInputchange}
            placeholder="Enter building floor number"
          />
          <input
            type="text"
            name="officeName"
            value={officeField.officeName}
            onChange={handleOfficeInputchange}
            placeholder="Enter office name"
          />
          <input
            type="text"
            name="ownerName"
            value={officeField.ownerName}
            onChange={handleOfficeInputchange}
            placeholder="Enter office owner name"
          />
          <input
            type="text"
            name="contactNumber"
            value={officeField.contactNumber}
            onChange={handleOfficeInputchange}
            placeholder="Contact number"
          />
          <input
            type="text"
            name="email"
            value={officeField.email}
            onChange={handleOfficeInputchange}
            placeholder="Enter email address"
          />
          <input
            type="text"
            name="gst"
            value={officeField.gst}
            onChange={handleOfficeInputchange}
            placeholder="Enter GST number"
          />
          <button onClick={addOfficeDetails}> save</button>
        </form>
      </div>
    </div>
  );
}

export default Popup;
