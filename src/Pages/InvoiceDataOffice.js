import React, { useState } from "react";
import DashBoardSideBar from "./DashBoardSideBar";
import "../Css/InvoiceData.css";
import officepaylogosecond from "../Images/Dashboard-side-logo-2.png";
import DownloadIcon from "../Images/DownlodArrowIcon.png";
import PdfIcon from "../Images/PdfIcon.png";
import DeleteIcon from "../Images/DeleteIcon.png";
import DashBoardSideBarOffice from "./DashboardSideBarOffice";
import Popuptwo from "./Popuptwo";

function InvoiceData() {
  const [popupvalue, setpopupvalue] = useState();

  const handlepopup = () => {
    setpopupvalue(!popupvalue);
  };
  return (
    <div className="InvoiceData-wrapper">
      <div className="InvoiceData-sidebar">
        <DashBoardSideBarOffice />
      </div>
      <div className="InvoiceData-inner-main">
        <div className="InvoiceData-heading-main">
          <h4> Create Invoice</h4>
          <a> Add Attachment</a>
        </div>
        <div className="InvoiceData-inner-wrapper">
          <div className="InvoiceData-form-1-wrapper">
            <div className="InvoiceData-form-header">
              <div className="Header-left-side">
                <img src={officepaylogosecond} alt="" />
                <h5>
                  816, shekher center, palasia Square, Indore, India 452018{" "}
                </h5>
              </div>
              <div className="Header-right-side">
                <ul>
                  <li> GST no. 22AAAAA0000A10J2H</li>
                  <li> +91-9990581540</li>
                  <li>invoice@officepay.com</li>
                </ul>
              </div>
            </div>
            <div className="Bill-Details">
              <p> Bill to</p>
              <table className="InvoiceData-BillDetails-table">
                <thead>
                  <th className="table-header">Codervita</th>
                </thead>
                <tbody>
                  <tr>
                    <td className="address-col">
                      {" "}
                      <p>
                        {" "}
                        101, Shekher Center, A.B. Road, Indore, (M.P.) 452018{" "}
                      </p>
                    </td>
                    <td> Invoice Number: </td>
                    <td className="last-col"> J-003 </td>
                  </tr>
                  <tr>
                    <td> GST no. 22AAAAA0000A10J2H</td>
                    <td className="common-td"> Invoice Date: </td>
                    <td className="last-col"> 05 Jan 2022 </td>
                  </tr>
                  <tr>
                    <td> +91-9990581540</td>
                    <td className="common-td"> Due Date: </td>
                    <td className="last-col"> 05 Jan 2022 </td>
                  </tr>
                  <tr>
                    <td>invoice@officepay.com</td>
                    <td className="common-td"> Total Amount: </td>
                    <td className="last-col"> ₹ 60,000 </td>
                  </tr>
                </tbody>
              </table>
              <table className="table-total">
                <thead className="table-two-thead">
                  <th className="first-col-secondtable"> Description</th>
                  <th> Qty.</th>
                  <th> Rate</th>
                  <th> Total</th>
                </thead>
                <tbody>
                  <tr>
                    <td className="first-col-secondtable paddingtop">
                      {" "}
                      Rent for December Office no. 101{" "}
                    </td>
                    <td className="paddingtop"> 1</td>
                    <td className="paddingtop"> $60,000</td>
                    <td className="paddingtop"> $60,000</td>
                  </tr>
                </tbody>
              </table>
              <table className="Final-total-table">
                <tr className="Final-total-tr">
                  <td className="total-col"> Total Amount </td>
                  <td> $60,000</td>
                </tr>
              </table>
            </div>
            <div className="InvoiceData-BankDetails">
              <h5> Bank Details</h5>
              <ul>
                <li> Bank Name: Bank of India.</li>
                <li> Account Holder: Shekher Central</li>
                <li> Account Number: 8814400001367</li>
                <li> IFSC Code: BOI1405076s</li>
              </ul>
            </div>
          </div>
          <div className="InvoiceData-form-2-wrapper">
            <p> Attachment</p>
            <div className="form-2-inner-wrapper">
              <div>
                <div>
                  <img src={PdfIcon} alt="" />
                </div>
                <div>
                  <p> Rent Receipt</p>
                  <p className="second-p"> 150kb</p>
                </div>
              </div>
              <div>
                <ul>
                  <li className="Download-li">
                    {" "}
                    <img src={DownloadIcon} alt="" /> Download
                  </li>
                  <li className="Delete-li">
                    {" "}
                    <img src={DeleteIcon} alt="" /> Delete
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="Download-invoice-btn">
            <button onClick={handlepopup}> Download Invoice </button>
          </div>
        </div>
      </div>
      {popupvalue ? (
        <Popuptwo
          closePopup={handlepopup}
          text="Invoice Downloaded Successfully."
        />
      ) : null}
    </div>
  );
}

export default InvoiceData;
