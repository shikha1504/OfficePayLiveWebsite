import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import totalAmount from "../DataFolder/DashBoardData";
import DashBoardSideBar from "./DashBoardSideBar";
import DashboardMainicon1 from "../Images/bi_building.png";
import DashboardMainicon2 from "../Images/dashboard-icon-8.png";
import DashboardMainicon3 from "../Images/ep_alarm-clock.png";
import DashboardMainicon4 from "../Images/dashboard-icon-7.png";
import DashboardMainicon5 from "../Images/dashboardicon6.png";
import DashboardMainicon6 from "../Images/alam-bellicon.png";
import PropertyBuildingImage from "../Images/Building-image.png";
import addpropertyplussign from "../Images/dashboard-plus-sign.png";
import downloadimage from "../Images/DownloadImage.png";
import sendRemiander from "../Images/SetRemiandericon.png";
import LOcationIcon from "../Images/LocationIcon.png";
import RightArrorIcon from "../Images/RightArrowIcon.png";

import { DueInvoicesData } from "../DataFolder/DueInvoices";
import { NotificationDataFile } from "../DataFolder/NotificationData";
import { useNavigate } from "react-router-dom";
import Popuptwo from "./Popuptwo";
import axios from "axios";
import { API_STRING } from '../WebService';
import ApiCallback from './ApiCallback';
function Dashboard() {
  const baseURL = "https://goinvoicy.com/api";

  const [PropertyData, setPropertyData] = useState(true);
  const [DueInvoiceData, setDueInvoiceData] = useState(false);
  const [NotificationData, setNotificationData] = useState(false);
  const [togglepopuptwo, settogglepopuptwo] = useState(false);
  const [office, setOffice] = useState([]);

  const getcreateaccountBuilding = useSelector(
    (state) => state.CreateAccountBuildingReducer
  );
  const getcreateaccountOffice = useSelector(
    (state) => state.CreateAccountofficeReducer
  );
  const getBUildingReducer = useSelector((state) => state.BuildingReducer);

  const navigate = useNavigate();

  const handleMyProperty = (e) => {
    navigate(`/BuildingOffices/${e}`);
    //navigate("/BuildingOffices");
  };

  const handleNotification = () => {
    navigate("/InvoiceData");
  };

  const handleAddProperty = () => {
    //navigate("/BuildingDetails",{building_id:"test"});
    navigate("/BuildingDetails");

  };

  const handlePopuptwo = () => {
    settogglepopuptwo(!togglepopuptwo);
  };

  useEffect(() => {
    var token = localStorage.getItem("access_token");
    console.log("token---------"+token);

   getData();
    // try {
    //   axios
    //     .get(baseURL + `/buildings`, {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //       },
    //     })
    //     .then((res) => {
    //       console.log("get building api response-----"+JSON.stringify(res))
    //       if (res.status === 200) {
    //         setOffice(res.data.data);
    //       } else {
    //         console.log("api not responding");
    //       }
    //     });
    // } catch (error) {
    //   console.log(error);
    // }
  }, []);
  const getData=async()=>{
    var token = localStorage.getItem("access_token");

    var apiCallbackRepsonse = await ApiCallback.getAuthTokenApiCallback(
      "",
      API_STRING.api_type_get_method, API_STRING.api_get_building,token

  );
  if (apiCallbackRepsonse != null && apiCallbackRepsonse.status == 200) {
    console.log("response--"+apiCallbackRepsonse)
    setOffice(apiCallbackRepsonse.data);
  } 

}
  return (
    <div className="DashBoardPage-wrapper">
      <div className="sidebar-wrapper">
        <DashBoardSideBar
          dashboardboolean={true}
          createinvoiceboolean={false}
        />
      </div>
      <div className="Dashboard-wrapper">
        <div className="dashboard-heading">
          <h2> DashBoard</h2>
        </div>

        <div className="dashboard-main-inner-content">
          <div className="dashboard-addproperty">
            <p onClick={handleAddProperty}>
              {" "}
              <span>
                <img src={addpropertyplussign} alt="" />
              </span>{" "}
              Add Property
            </p>
          </div>
          <div className="Dashboard-figures">
            {totalAmount.map((item, key) => {
              return (
                <div className={`total-${item.class}`}>
                  <p> {item.title}</p>
                  <h4> ${item.amount}</h4>
                </div>
              );
            })}
          </div>
          <div className="dashboard-tabs">
            <div className="dashboard-tabs-heading">
              <p
                className={PropertyData ? "active" : ""}
                onClick={() => {
                  setPropertyData(true);
                  setDueInvoiceData(false);
                  setNotificationData(false);
                }}
              >
                {" "}
                {PropertyData ? (
                  <img src={DashboardMainicon1} />
                ) : (
                  <img src={DashboardMainicon4} />
                )}
                My Properties{" "}
              </p>
              <p
                className={DueInvoiceData ? "active" : ""}
                onClick={() => {
                  setPropertyData(false);
                  setDueInvoiceData(true);
                  setNotificationData(false);
                }}
              >
                {" "}
                {DueInvoiceData ? (
                  <img src={DashboardMainicon5} />
                ) : (
                  <img src={DashboardMainicon2} />
                )}
                Due Invoice{" "}
              </p>
              <p
                className={NotificationData ? "active" : ""}
                onClick={() => {
                  setPropertyData(false);
                  setDueInvoiceData(false);
                  setNotificationData(true);
                }}
              >
                {" "}
                {NotificationData ? (
                  <img src={DashboardMainicon6} />
                ) : (
                  <img src={DashboardMainicon3} />
                )}{" "}
                Notification
              </p>
            </div>

            <div className="dashboard-tab-content">
              <div className="myproperty-content">
                {PropertyData ? (
                  <div className="Property-Data-Content-wrapper">
                    <h5> My Property</h5>
                    {office &&
                      office.map((offices, index) => {
                        return (
                          <div
                            className="Property-content-inner"
                            onClick={() => handleMyProperty(offices.id)}
                          >
                            <div className="property-content-one">
                              <img src={offices.building_image} />
                              <div>
                                <h3> {offices.building_name} </h3>
                                <h6>
                                  <img src={LOcationIcon} /> {offices.address}
                                </h6>
                              </div>
                            </div>
                            <div className="property-content-two">
                              <ul>
                                <li>
                                  {" "}
                                  Due Invoices <span>85</span>{" "}
                                </li>
                                <li>
                                  {" "}
                                  Occupied Offices <span>75 </span>
                                </li>
                                <li>
                                  {" "}
                                  Vacant Offices <span>50</span>
                                </li>
                              </ul>
                            </div>
                            <div className="Dashboard-arrow-icon">
                              <img src={RightArrorIcon} />
                            </div>
                          </div>
                        );
                      })}
                  </div>
                ) : null}
              </div>

              <div className="Dueinvoice-content">
                {DueInvoiceData ? (
                  <div className="Property-Data-Content-wrapper">
                    <h5> Due Invoice</h5>
                    {DueInvoicesData.map((item) => {
                      return (
                        <div className="DueInvoices-content-inner">
                          <div className="DueInvoices-row-1">
                            <div className="DueInvoices-row1-col-1">
                              <h3> {item.NameBuilding}</h3>
                              <p>
                                {" "}
                                Wing <span> {item.Buildingwing}</span>
                              </p>
                              <p>
                                {" "}
                                Floor <span>{item.Buildingfloor}</span>
                              </p>
                            </div>
                            <div className="DueInvoices-row1-col-2">
                              <p> Due Date {item.Duedate}</p>
                            </div>
                          </div>
                          <div className="DueInvoices-row-2">
                            <div className="DueInvoices-row2-col-1">
                              <h5>
                                {" "}
                                <span>{item.officefloorNo}</span>{" "}
                                {item.OfficeName}
                              </h5>
                              <p> Invoice Data {item.invoiceData}</p>
                            </div>
                            <div className="DueInvoices-row2-col-2">
                              <h5> Overdue</h5>
                              <p> $2000</p>
                            </div>
                          </div>
                          <div className="DueInvoices-row-3">
                            <div>
                              <h5> {item.billtype}</h5>
                              <p> Last Remiander {item.lastreminaderDate}</p>
                            </div>
                            <div>
                              <button>
                                {" "}
                                <img src={downloadimage} />
                                Download
                              </button>
                              <button onClick={handlePopuptwo}>
                                {" "}
                                Send remainder <img src={sendRemiander} />
                              </button>
                              <button> Mark as recieved</button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : null}
              </div>
              <div className="Notification-content">
                {NotificationData ? (
                  <div className="Notification-Data-Content-wrapper">
                    <h5> Notification</h5>
                    {NotificationDataFile.map((item) => {
                      return (
                        <div
                          className="Notification-content-inner"
                          onClick={() => handleNotification()}
                        >
                          <div className="Notification-col-1">
                            <div className="invoice-no">
                              <p> Invoice No</p>
                              <h5> J-101</h5>
                            </div>
                            <div className="Notification-col-2">
                              <h4> {item.OfficeAddress}</h4>
                              <h5> {item.OfficeName}</h5>
                              <p> {item.NotificstionTitle}</p>
                              <h5> Invoice Amount {item.invoiceAmount}</h5>
                            </div>
                          </div>

                          <div className="Notification-col-3">
                            <p> 10:00 PM</p>
                            {item.invoicestatus ? (
                              <button className="Notification-paid">
                                {" "}
                                Paid
                              </button>
                            ) : (
                              <button className="Notification-due"> Due</button>
                            )}
                            <p> Now</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
      {togglepopuptwo ? (
        <Popuptwo
          text="Reminder has been Sent Successfully."
          closePopup={handlePopuptwo}
        />
      ) : null}
    </div>
  );
}

export default Dashboard;
