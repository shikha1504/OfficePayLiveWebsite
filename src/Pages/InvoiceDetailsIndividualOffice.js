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
import DashBoardSideBarOffice from "./DashboardSideBarOffice";
import "../Css/InvoiceDetailsIndividualOffice.css";
import PhoneCallIcon from "../Images/PhoneCallIcon.png";
import axios from "axios";

function InvoiceDetailsIndividual() {
  const baseURL = "https://goinvoicy.com/api";
  const { id } = useParams();
  //console.log("param =>", id);
  const navigate = useNavigate();
  const handleInvoicedata = () => {
    navigate("/InvoiceDataOffice");
  };
  const [office, setOfficeDetail] = useState("");

  useEffect(()=>{

  },[office])
  useEffect(() => {
    var token = localStorage.getItem("access_token");
    console.log("inside use effect function----------------------")
    try {
      axios
        .get(baseURL + `/getOfficeDetails/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
       //   console.log("api response----"+JSON.stringify(res))
          console.log("response status---"+res.status)
          if (res.status == 200) {
            console.log("office details--"+JSON.stringify(res.data));

            setOfficeDetail(res.data.data);
            console.log("office number--"+res.data.data.office_number)
          }
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="Invoice-Detail-Whole">
      <div className="Invoice-detail-sidebar">
        <DashBoardSideBarOffice />
      </div>

      <div className="Invoice-detail-wrapper">
        <div className="dashboard-heading">
          <h2> Shekhar Center</h2>
        </div>

        <div className="Inner-wrapper-Invoice-content">
          <div className="Office-Detials">
            <div className="officeMain-img">
              <img src={OfficeMainIMage} />
            </div>
            <div className="office-detials-inner">
              <div className="office-detail-inner-div">
                <p className="office-roomno"> {office.contact_number}</p>
                <a className="office-dashboard-contact-button">
                  {" "}
                  Contact Building Admin <img src={PhoneCallIcon} />
                </a>
              </div>
              <div className="second-div-invoiceDetails">
                <h5> {office.office_name}</h5>
                <p> {office.office_address} </p>
              </div>
              <div>
                <div className="Invoicedetail-amount office-Invoicedetail-amount">
                  <h5>
                    {" "}
                    Overdue Amount : <span>$51,000 </span>
                  </h5>
                  <p> Invoice Amount : $60,000</p>
                </div>
                <p className="InvoiceDetail-pending-amount">
                  {" "}
                  Pending Amount : $3,500
                </p>
              </div>
            </div>
          </div>

          <div className="Invoice-details-main-wrapper">
            <h3 className="Invoice-details-heading"> Invoice Details</h3>
            <div className="Invoice-months-detials">
              <h4> November Invoice</h4>
              <div
                className="InvoiceDetials-Main-inner"
                onClick={() => {
                  handleInvoicedata();
                }}
              >
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
                          <h4>
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
                              <a className="Office-InvoiceData-MainAll">
                                {" "}
                                Pay Now{" "}
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
              <div
                className="InvoiceDetials-Main-inner"
                onClick={() => {
                  handleInvoicedata();
                }}
              >
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
                                ? "Overdue"
                                : "Pending"
                            }
                          >
                            {" "}
                            {item.status}
                          </button>
                        </div>

                        <div>
                          <h4>
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
                              <a className="Office-InvoiceData-MainAll">
                                {" "}
                                Pay Now{" "}
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
              <div
                className="InvoiceDetials-Main-inner"
                onClick={() => {
                  handleInvoicedata();
                }}
              >
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
                                ? "Overdue"
                                : "Pending"
                            }
                          >
                            {" "}
                            {item.status}
                          </button>
                        </div>
                        <div>
                          <h4>
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
                            <div className="InvoiceData-MainAll-a  Office-InvoiceData-Main">
                              <a className="Download-btn">
                                <img src={Downloadbtn} /> Download
                              </a>
                              <a className="Office-InvoiceData-MainAll">
                                {" "}
                                Pay Now{" "}
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
    </div>
  );
}

export default InvoiceDetailsIndividual;
