import React, { useEffect, useState } from "react";
import DashBoardSideBar from "./DashBoardSideBar";
import "../Css/CreateInvoice.css";
import officepaylogosecond from "../Images/Dashboard-side-logo-2.png";
import DownloadIcon from "../Images/DownlodArrowIcon.png";
import PdfIcon from "../Images/PdfIcon.png";
import DeleteIcon from "../Images/DeleteIcon.png";
import "../Css/InvoiceData.css";
// import BootstrapSelect from 'react-bootstrap-select-dropdown';
import "bootstrap/dist/css/bootstrap.min.css";
import Select from "react-select";
import AdditemIcon from "../Images/dashboard-plus-sign.png";
import Popuptwo from "./Popuptwo";
import axios from "axios";
import { API_STRING } from '../WebService';
import ApiCallback from './ApiCallback';

function CreateInvoice() {
  const baseURL = "https://cassidyblinds.ie/officepay/api";

  const [popupvalue, setpopupvalue] = useState(false);

  const options = [
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const handleChange = (selectedOptions) => {
    //console.log(selectedOptions);
  };

  const [newtablerow, setnewtablerow] = useState([{ index: 1 }]);

  const [office, setOfficeDetails] = useState([]);

  const [building, setBuildingList] = useState([{ value: "hello", label: "test" }]);
  const [wing, setWing] = useState([{ value: "", label: "" }]);
  const [floor, setFloor] = useState([{ value: "", label: "" }]);
  const [officeName, setOfficeName] = useState([{ value: "", label: "" }]);

  //console.log("=> First :", newtablerow);
  const [invoice, setInvoiceField] = useState({
    building: "",
    wing: "",
    floor: "",
    office: "",
    invoice_number: "",
    invoice_date: "",
    invoice_due_date: "",
    invoice_total: "",
    invoice_items: "",
    bank_name: "",
    holder_name: "",
    acc_num: "",
    ifsc_code: "",
    invoice_subject: "",
    attachment: "",
  });

  const handleInvoiceInputchange = (e) => {
    console.log("=> e :", e.target.name, e.target.value);
    setInvoiceField({
      ...invoice,
      [e.target.name]: e.target.value,
    });
  };

  const handleDescriptionInputchange = (e) => {
    console.log("=> e :", e.target.name, e.target.value);
    setDescriptionField({
      ...invoiceItems,
      [e.target.name]: e.target.value,
    });
  };

  const [invoiceItems, setDescriptionField] = useState({
    desc: "",
    qty: "",
    rate: "",
    total: "",
  });
  //console.log("invoiceItems :", invoiceItems);

  const [bankField, setBankDetails] = useState({
    bank_name: "",
    holder_name: "",
    acc_num: "",
    ifsc_code: "",
  });


  useEffect(()=>{
    getBuildingList();
  },[])

  const getBuildingList=async()=>{
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

    setBuildingList(data)
    //setOffice(apiCallbackRepsonse.data);
  } 


  }
  const handleBankInputchange = (e) => {
    setBankDetails({
      ...bankField,
      [e.target.name]: e.target.value,
    });
  };

  //console.log("bankField :", bankField);

  const handleAddItem = () => {
    var newitem = newtablerow.length;
    console.log(newtablerow.length - 1);
    setnewtablerow([
      ...newtablerow,
      {
        index: Math.random() * 10,
      },
    ]);
    //console.log("old =>", newtablerow);
  };

  const handleremoveItem = (item) => {
    //console.log("New==>", newtablerow);
    setnewtablerow(newtablerow.filter((k) => k.index !== item.index));
  };

  const handlePopup = (e) => {
    console.log("-- click function --");
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("building", invoice.building);
    formdata.append("wing", invoice.wing);
    formdata.append("floor", invoice.floor);
    formdata.append("office", invoice.office);

    formdata.append("invoice_number", invoice.invoice_number);
    formdata.append("invoice_date", invoice.invoice_date);
    formdata.append("invoice_due_date", invoice.invoice_due_date);
    formdata.append("invoice_total", invoice.invoice_total);

    formdata.append("desc", invoiceItems.desc);
    formdata.append("qty", invoiceItems.qty);
    formdata.append("rate", invoiceItems.rate);
    formdata.append("total", invoiceItems.total);

    formdata.append("bank_name", bankField.bank_name);
    formdata.append("holder_name", bankField.holder_name);
    formdata.append("acc_num", bankField.acc_num);
    formdata.append("ifsc_code", bankField.ifsc_code);

    formdata.append("invoice_subject", "bankField");

    try {
      axios
        .post(`https://goinvoicy.com/api/invoice-create`, formdata)
        .then((response) => {
          console.log("response: ", response);
          setpopupvalue(!popupvalue);
          // if (response) {
          // } else {
          //   console.log("api not responding");
          // }
        });
    } catch (error) {
      console.log(error);
    }

    // try {
    //   axios.post(baseURL + `/invoice-create`);
    //   setpopupvalue(!popupvalue);
    // } catch (error) {
    //   console.log(error);
    // }
  };
  //console.log("=> invoice :", invoice);

  useEffect(() => {
    var token = localStorage.getItem("access_token");
    try {
      axios
        .get(`https://cassidyblinds.ie/officepay/api/offices-new/2`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          //console.log("-> res :", res);
          if (res.status === 200) {
            const buildingData = res.data.data.map((result) => {
              return {
                value: result.building_name,
                label: result.building_name,
              };
            });
            setBuildingList(buildingData);
            const wingData = res.data.data.map((result) => {
              return {
                value: result.wing,
                label: result.wing,
              };
            });
            setWing(wingData);
            const floorData = res.data.data.map((result) => {
              return {
                value: result.floor_number,
                label: result.floor_number,
              };
            });
            setFloor(floorData);
            const officeName = res.data.data.map((result) => {
              return {
                value: result.office_name,
                label: result.office_name,
              };
            });
            setOfficeName(officeName);
          } else {
            console.log("api not responding");
          }
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="CreateInvoice-wrapper">
      <div className="CreateInvoice-sideBar">
        <DashBoardSideBar
          dashboardboolean={false}
          createinvoiceboolean={true}
        />
      </div>
      <div className="CreateInvoice-inner-wrapper">
        <div className="dashboard-heading">
          <h2> Create Invoice</h2>
        </div>

        <div className="CreateInvoice-addattacment">
          <a> Add Attachment</a>
        </div>

        <div className="InvoiceData-inner-wrapper">
          <div className="InvoiceData-form-1-wrapper">
            <div className="InvoiceData-form-header">
              <div className="Header-left-side">
                <img src={officepaylogosecond} alt="" />
                <h5>{office.office_address}</h5>
              </div>
              <div className="Header-right-side">
                <ul>
                  <li> GST No. {office.gst_number}</li>
                  <li> {office.contact_number} </li>
                  <li> {office.email_address} </li>
                </ul>
              </div>
            </div>
            <div className="Billing-section-create-invoice">
              <p> Bill to</p>
              <div className="Billing-section-inner">
                <div className="Select-option-section">
                  <Select
                    options={building}
                    placeholder="Select Building"
                    styles={customStyles}
                    value={invoice.building}
                    onChange={handleInvoiceInputchange}
                    name="building"
                  />
                  <Select
                    options={wing}
                    placeholder="Select Wing"
                    styles={customStyles}
                    value={invoice.wing}
                    onChange={handleInvoiceInputchange}
                    name="wing"
                  />
                  <Select
                    options={floor}
                    placeholder="Select Floor"
                    styles={customStyles}
                    value={invoice.floor}
                    onChange={handleInvoiceInputchange}
                    name="floor"
                  />
                  <Select
                    options={officeName}
                    placeholder="Select Office"
                    styles={customStyles}
                    value={invoice.office}
                    onChange={handleInvoiceInputchange}
                    name="office"
                  />
                </div>
                <div className="Other-details">
                  <ul>
                    <li>
                      Invoice Number:
                      <span>
                        <input
                          type="text"
                          name="invoice_number"
                          value={invoice.invoice_number}
                          onChange={handleInvoiceInputchange}
                        />
                      </span>
                    </li>
                    <li>
                      Invoice Date:
                      <span>
                        <input
                          type="text"
                          name="invoice_date"
                          value={invoice.invoice_date}
                          onChange={handleInvoiceInputchange}
                        />
                      </span>
                    </li>
                    <li>
                      Due Date:
                      <span>
                        <input
                          type="text"
                          name="invoice_due_date"
                          value={invoice.invoice_due_date}
                          onChange={handleInvoiceInputchange}
                        />
                      </span>
                    </li>
                    <li>
                      Total Amount:
                      <span>
                        <input
                          type="text"
                          name="invoice_total"
                          value={invoice.invoice_total}
                          onChange={handleInvoiceInputchange}
                        />
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <table className="Description-table">
                <thead>
                  <th> Description</th>
                  <th> Qty.</th>
                  <th> Rate</th>
                  <th> Total</th>
                </thead>

                <tbody>
                  {newtablerow.map((item, key) => {
                    return (
                      <tr key={item.index}>
                        <td>
                          <input
                            type="text"
                            onChange={handleDescriptionInputchange}
                            name="desc"
                            value={invoiceItems.desc}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            onChange={handleDescriptionInputchange}
                            name="qty"
                            value={invoiceItems.qty}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            onChange={handleDescriptionInputchange}
                            name="rate"
                            value={invoiceItems.rate}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            onChange={handleDescriptionInputchange}
                            name="total"
                            value={invoiceItems.total}
                          />
                        </td>
                        <td className="removeItem-td">
                          <div className="remove-btn-create-invoice">
                            <button onClick={() => handleremoveItem(item)}>
                              Remove
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <button
                className="additem-btn-create-invoice"
                onClick={handleAddItem}
              >
                <img src={AdditemIcon} alt="" />
                Add an Item
              </button>
              <table className="total-table">
                <tbody>
                  <tr>
                    <td> Total Amount</td>
                    <td> 0</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="InvoiceData-BankDetails">
              <h5> Bank Details</h5>
              <table className="BankDetails-div">
                <ul>
                  <li>
                    Bank Name:
                    <span>
                      <input
                        type="text"
                        name="bank_name"
                        value={bankField.bank_name}
                        onChange={handleBankInputchange}
                      />
                    </span>
                  </li>
                  <li>
                    Account Holder :
                    <span>
                      <input
                        type="text"
                        name="holder_name"
                        value={bankField.holder_name}
                        onChange={handleBankInputchange}
                      />
                    </span>
                  </li>
                </ul>
                <ul>
                  <li>
                    Account Number:
                    <span>
                      <input
                        className="second-inputBankDetails"
                        type="text"
                        name="acc_num"
                        value={bankField.acc_num}
                        onChange={handleBankInputchange}
                      />
                    </span>
                  </li>
                  <li>
                    IFSC Code:
                    <span>
                      <input
                        className="second-inputBankDetails"
                        type="text"
                        name="ifsc_code"
                        value={bankField.ifsc_code}
                        onChange={handleBankInputchange}
                      />
                    </span>
                  </li>
                </ul>
              </table>
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
                    <img src={DownloadIcon} alt="" /> Download
                  </li>
                  <li className="Delete-li">
                    <img src={DeleteIcon} alt="" /> Delete
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="Download-invoice-btn">
            <button onClick={handlePopup}> Send Invoice </button>
          </div>
        </div>
      </div>
      {popupvalue ? (
        <Popuptwo closePopup={handlePopup} text="Invoice Sent Successfully." />
      ) : null}
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
    width: "520px",
    height: "35px",
    background: "#FFFFFF",
    border: "1px solid #C2C2C2",
    paddingLeft: "10px",
    paddingRight: "10px",
  }),
};

export default CreateInvoice;
