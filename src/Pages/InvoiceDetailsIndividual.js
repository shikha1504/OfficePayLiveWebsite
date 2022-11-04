import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { InvoiceDetailsData } from "../DataFolder/InvoiceDetailsData";
import OfficeMainIMage from "../Images/Building-image2.png";
import EditDetailIcon from "../Images/Edit-Details.png";
import DashBoardSideBar from "./DashBoardSideBar";
import "../Css/InvoiceDetailIndividual.css";
import Downloadbtn from "../Images/DownloadImage.png";
import sendremiandericon from "../Images/SetRemiandericon.png";
import { useNavigate } from "react-router-dom";
import Popup from "./Popup";
import Popuptwo from "./Popuptwo";
import axios from "axios";

function InvoiceDetailsIndividual() {
  const baseURL = "https://goinvoicy.com/api";

  const { id } = useParams();

  const [togglepopup, settogglepopup] = useState(false);
  const [togglepopuptwo, settogglepopuptwo] = useState(false);
  const navigate = useNavigate();

  const [office, setOfficeDetails] = useState([]);

  const handleInvoicedata = () => {
    navigate("/InvoiceData");
  };

  const handleCreateInvoice = () => {
    navigate("/CreateInvoice");
  };

  const handlePopup = () => {
    settogglepopup(!togglepopup);
  };

  const handlePopuptwo = () => {
    settogglepopuptwo(!togglepopuptwo);
  };

  useEffect(() => {
    var token = localStorage.getItem("access_token");
    try {
      axios
        .get(baseURL + `/offices/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log("-> result response is:"+ JSON.stringify(res));
          if (res.status === 200) {
            setOfficeDetails(res.data.data);
          } else {
            console.log("api not responding");
          }
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="Invoice-Detail-Whole">
      <div className="Invoice-detail-sidebar">
        <DashBoardSideBar
          dashboardboolean={false}
          createinvoiceboolean={true}
        />
      </div>

      <div className="Invoice-detail-wrapper">
        <div className="dashboard-heading">
          <h2> Shekhar Center</h2>
        </div>
        <div className="Inner-wrapper-Invoice-content">
          <div className="Office-Detials">
            <div className="officeMain-img">
              <img src={OfficeMainIMage} alt="" />
            </div>
            <div className="office-detials-inner">
              <div className="office-detail-inner-div">
                <p className="office-roomno"> {office.length>0? office.office_number:""}</p>
                <a className="office-editdetails" onClick={handlePopup}>
                  {" "}
                  <img src={EditDetailIcon} alt="" /> Edit Details
                </a>
              </div>
              <div className="second-div-invoiceDetails">
                <h5> {office.length>0? office.office_name:""} </h5>
                <p> {office.length>0? office.office_address:""} </p>
              </div>
              <div>
                <div className="Invoicedetail-amount">
                  <h5>
                    Pending Amount : <span>$3500 </span>
                  </h5>
                  <p> Invoice Amount : $60,000</p>
                </div>
                <button
                  className="Invoicedetial-btn"
                  onClick={handleCreateInvoice}
                >
                  +Create Invoice
                </button>
              </div>
            </div>
          </div>

          <div className="Invoice-details-main-wrapper">
            <h3 className="Invoice-details-heading"> Invoice Details</h3>

            <div className="Invoice-months-detials">
              <h4> November Invoice</h4>
              <div className="InvoiceDetials-Main-inner">
                {InvoiceDetailsData.map((item) => {
                  if (item.MonthName == "November") {
                    return (
                      <div className="MainData-wrapper">
                        <div>
                          <p> Invoice Date {item.invoiceDate}</p>
                          <button
                            className={
                              item.status == "Paid"
                                ? "Paid-btn"
                                : item.status == "Overdue"
                                ? "Overdue-second"
                                : "Pending"
                            }
                          >
                            {" "}
                            {item.status}
                          </button>
                        </div>
                        <div>
                          <h4
                            onClick={() => {
                              handleInvoicedata();
                            }}
                          >
                            {" "}
                            {item.InvoiceBillName} for {item.MonthName}
                          </h4>
                          <h5>{item.Amount} </h5>
                        </div>
                        <div>
                          <p> Paid Date: {item.paidDate}</p>
                          {item.status === "Paid" ? (
                            <a className="Download-btn">
                              <img src={Downloadbtn} /> Download
                            </a>
                          ) : (
                            <div className="InvoiceData-MainAll-a">
                              <a className="Download-btn">
                                <img src={Downloadbtn} /> Download
                              </a>
                              <a onClick={handlePopuptwo}>
                                {" "}
                                Send remainder <img src={sendremiandericon} />
                              </a>
                              <a>
                                {" "}
                                Mark as recieved <img src="" />
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </div>

            <div className="Invoice-months-detials">
              <h4> October Invoice</h4>
              <div className="InvoiceDetials-Main-inner">
                {InvoiceDetailsData.map((item) => {
                  if (item.MonthName == "October") {
                    return (
                      <div className="MainData-wrapper">
                        <div>
                          <p> Invoice Date {item.invoiceDate}</p>
                          <button
                            className={
                              item.status == "Paid"
                                ? "Paid-btn"
                                : item.status == "Overdue"
                                ? "Overdue-second"
                                : "Pending"
                            }
                          >
                            {" "}
                            {item.status}
                          </button>
                        </div>
                        <div>
                          <h4
                            onClick={() => {
                              handleInvoicedata();
                            }}
                          >
                            {" "}
                            {item.InvoiceBillName} for {item.MonthName}
                          </h4>
                          <h5>{item.Amount} </h5>
                        </div>
                        <div>
                          <p> Paid Date: {item.paidDate}</p>
                          {item.status === "Paid" ? (
                            <a className="Download-btn">
                              <img src={Downloadbtn} /> Download
                            </a>
                          ) : (
                            <div className="InvoiceData-MainAll-a">
                              <a className="Download-btn">
                                <img src={Downloadbtn} /> Download
                              </a>
                              <a onClick={handlePopuptwo}>
                                {" "}
                                Send remainder <img src={sendremiandericon} />
                              </a>
                              <a>
                                {" "}
                                Mark as recieved <img src="" />
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </div>

            <div className="Invoice-months-detials">
              <h4> December Invoice</h4>
              <div className="InvoiceDetials-Main-inner">
                {InvoiceDetailsData.map((item) => {
                  if (item.MonthName == "December") {
                    return (
                      <div className="MainData-wrapper">
                        <div>
                          <p> Invoice Date {item.invoiceDate}</p>
                          <button
                            className={
                              item.status == "Paid"
                                ? "Paid-btn"
                                : item.status == "Overdue"
                                ? "Overdue-second"
                                : "Pending"
                            }
                          >
                            {" "}
                            {item.status}
                          </button>
                        </div>
                        <div>
                          <h4
                            onClick={() => {
                              handleInvoicedata();
                            }}
                          >
                            {" "}
                            {item.InvoiceBillName} for {item.MonthName}
                          </h4>
                          <h5>{item.Amount} </h5>
                        </div>
                        <div>
                          <p> Paid Date: {item.paidDate}</p>
                          {item.status === "Paid" ? (
                            <a className="Download-btn">
                              <img src={Downloadbtn} /> Download
                            </a>
                          ) : (
                            <div className="InvoiceData-MainAll-a">
                              <a className="Download-btn">
                                <img src={Downloadbtn} /> Download
                              </a>
                              <a onClick={handlePopuptwo}>
                                {" "}
                                Send remainder <img src={sendremiandericon} />
                              </a>
                              <a>
                                {" "}
                                Mark as recieved <img src="" />
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {togglepopup ? (
        <Popup text="Close Popup" closePopup={handlePopup} />
      ) : null}
      {togglepopuptwo ? (
        <Popuptwo
          text="Reminder has been Sent Successfully."
          closePopup={handlePopuptwo}
        />
      ) : null}
    </div>
  );
}

export default InvoiceDetailsIndividual;
