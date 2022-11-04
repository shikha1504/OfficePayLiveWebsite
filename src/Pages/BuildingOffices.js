import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import DashBoardSideBar from "./DashBoardSideBar";
import "../Css/BuildingOffices.css";

import addpropertyplussign from "../Images/dashboard-plus-sign.png";
//import { BuildingOfficeData } from "../DataFolder/BuildingOfficiesData";
import { useNavigate } from "react-router-dom";
//import { InvoiceDetailsData } from "../DataFolder/InvoiceDetailsData";
import InvoiceDetailsIndividual from "./InvoiceDetailsIndividual";
import Popup from "./Popup";
import Addwingplus from "../Images/Addwing-plus-icon.png";
import axios from "axios";

function BuildingOffices() {
  const baseURL = "https://cassidyblinds.ie/officepay/api";

  const { id } = useParams();

  const navigate = useNavigate();

  const [totalwings, settotalwings] = useState([
    { wingName: "A" },
    { wingName: "B" },
  ]);
  const elementRef = useRef([]);

  const handleOfficedata = (item) => {
    navigate(`/InvoiceDetailsIndividual/${item.id}`);
    //navigate("/InvoiceDetailsIndividual");
    return <InvoiceDetailsIndividual item={item} />;
  };
  const [selectedWing, setselectedWing] = useState(true);
  const [togglepopup, settogglepopup] = useState(false);
  const [floorData, setFloorDetails] = useState([]);

  const handleAddoffice = () => {
    settogglepopup(!togglepopup);
  };

  const handleselectedWing = (index) => {
    elementRef.current[index].classList.add("active");
    var newele = elementRef.current.filter(
      (k) => k !== elementRef.current[index]
    );
    newele.classList.remove("active");
  };

  useEffect(() => {
    var token = localStorage.getItem("access_token");
    try {
      axios
        .get(baseURL + `/offices-new/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          //console.log(res.data.data, "=> res :", res.status);
          if (res.status === 200) {
            setFloorDetails(res.data.data);
          } else {
            console.log("api not responding");
          }
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="Building-offices-wrapper">
      <div className="Building-details-sidebar">
        <DashBoardSideBar
          dashboardboolean={true}
          createinvoiceboolean={false}
        />
      </div>

      <div className="Building-office-main-wrapper">
        <div className="dashboard-heading">
          <h2> Shekhar Center</h2>
        </div>

        <div className="dashboard-main-inner-content">
          <div className="Building-offices-addOffices">
            <div className="Building-offices-occupied">
              <h4>
                {" "}
                <div className="Occupied"> </div> Occupied
              </h4>
              <h4>
                {" "}
                <div className="Vacant"> </div>Vacant
              </h4>
            </div>
            <div className="Building-offices-plussign">
              <p onClick={handleAddoffice}>
                <span>
                  <img src={addpropertyplussign} alt="" />
                </span>{" "}
                Add Office
              </p>
            </div>
          </div>
          <div className="Building-offices-addWing">
            <ul>
              {totalwings.map((item, i) => {
                return (
                  <li
                    ref={(el) => (elementRef.current[i] = el)}
                    onClick={() => {
                      handleselectedWing(i);
                    }}
                  >
                    {" "}
                    {item.wingName}
                  </li>
                );
              })}
            </ul>
            <p onClick={handleAddoffice}>
              <img src={Addwingplus} alt="" /> Add wing
            </p>
          </div>
          <div className="floordata-whole-wrapper">
            <h4 className="Floor-heading"> Floor 1</h4>
            <div className="Building-offices-floorData">
              {floorData.map((item, index) => {
                if (item.floor_number) {
                  return (
                    <div
                      onClick={() => {
                        return item.status === "Vacant"
                          ? null
                          : handleOfficedata(item);
                      }}
                      className={
                        item.status === "Vacant"
                          ? "Floor-Data-inner-wrapper-vacant"
                          : "Floor-Data-inner-wrapper"
                      }
                    >
                      {item.status === "Vacant" ? null : (
                        <p
                          className={
                            item.status === "Pending"
                              ? `pending`
                              : item.status === "Overdue"
                              ? "Overdue"
                              : "paid"
                          }
                        >
                          {" "}
                          {item.status}
                        </p>
                      )}
                      <div>
                        <h6> {item.office_number}</h6>
                        {item.status === "Vacant" ? null : (
                          <h6> {item.office_name}</h6>
                        )}
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>

          {/* <div className="floordata-whole-wrapper">
            <h4 className="Floor-heading"> Floor 2</h4>
            <div className="Building-offices-floorData">
              {BuildingOfficeData.map((item) => {
                if (item.FloorName === "Floor 2") {
                  return (
                    <div
                      onClick={() => {
                        return item.status === "Vacant"
                          ? null
                          : handleOfficedata(item);
                      }}
                      className={
                        item.status === "Vacant"
                          ? "Floor-Data-inner-wrapper-vacant"
                          : "Floor-Data-inner-wrapper"
                      }
                    >
                      {item.status === "Vacant" ? null : (
                        <p
                          className={
                            item.status === "Pending"
                              ? `pending`
                              : item.status === "Overdue"
                              ? "Overdue"
                              : "paid"
                          }
                        >
                          {" "}
                          {item.status}
                        </p>
                      )}
                      <div>
                        <h6> {item.roomNO}</h6>
                        {item.status === "Vacant" ? null : (
                          <h6> {item.OfficeName}</h6>
                        )}
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div> */}

          {/* <div className="floordata-whole-wrapper">
            <h4 className="Floor-heading"> Floor 3</h4>
            <div className="Building-offices-floorData">
              {BuildingOfficeData.map((item) => {
                if (item.FloorName === "Floor 3") {
                  return (
                    <div
                      onClick={() => {
                        return (item.status === "Vacant"
                          ? null
                          : handleOfficedata(item))``;
                      }}
                      className={
                        item.status === "Vacant"
                          ? "Floor-Data-inner-wrapper-vacant"
                          : "Floor-Data-inner-wrapper"
                      }
                    >
                      {item.status === "Vacant" ? null : (
                        <p
                          className={
                            item.status === "Pending"
                              ? `pending`
                              : item.status === "Overdue"
                              ? "Overdue"
                              : "paid"
                          }
                        >
                          {" "}
                          {item.status}
                        </p>
                      )}
                      <div>
                        <h6> {item.roomNO}</h6>
                        {item.status === "Vacant" ? null : (
                          <h6> {item.OfficeName}</h6>
                        )}
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div> */}
        </div>
      </div>
      {togglepopup ? <Popup closePopup={handleAddoffice} /> : null}
    </div>
  );
}

export default BuildingOffices;
