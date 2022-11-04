import "./Css/HomePage.css";
import HomePage from "./Pages/HomePage";
import { testimonial } from "./DataFolder/Testimonial";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import { Routes, Route } from "react-router-dom";
import CreateAccount from "./Pages/CreateAccount";
import BuildingDetails from "./Pages/BuildingDetails";
import ForgotPassword from "./Pages/ForgotPassword";
import BankDetail from "./Pages/BankDetail";
import Login from "./Pages/Login";
import Dashbaord from "./Pages/Dashboard";
import BuildingOffices from "./Pages/BuildingOffices";
import CreateInvoice from "./Pages/CreateInvoice";
import InvoiceDetailsIndividual from "./Pages/InvoiceDetailsIndividual";
import InvoiceData from "./Pages/InvoiceData";
import DashboardOffice from "./Pages/DashboardOffice";
import OfficeDetails from "./Pages/OfficeDetails";
import BankDetailOffice from "./Pages/BankDetailOffice";
import InvoiceDetailsIndividualOffice from "./Pages/InvoiceDetailsIndividualOffice";
import InvoiceDataOffice from "./Pages/InvoiceDataOffice";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<HomePage testimonial={testimonial} />}
        ></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/create-account" element={<CreateAccount />}></Route>
        <Route path="/BuildingDetails" element={<BuildingDetails />}></Route>
        <Route path="/BankDetail" element={<BankDetail />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/DashBoard" element={<Dashbaord />}></Route>
        {/* <Route path="/forgotpassword" element={<forgotPassword />} /> */}
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route
          path="/BuildingOffices/:id"
          element={<BuildingOffices />}
        ></Route>
        <Route
          path="/InvoiceDetailsIndividual/:id"
          element={<InvoiceDetailsIndividual />}
        ></Route>
        <Route path="/InvoiceData" element={<InvoiceData />}></Route>
        <Route path="/CreateInvoice" element={<CreateInvoice />}></Route>
        <Route path="/DashboardOffice" element={<DashboardOffice />}></Route>
        <Route path="/OfficeDetails" element={<OfficeDetails />}></Route>
        <Route path="/BankDetailOffice" element={<BankDetailOffice />}></Route>
        <Route
          path="/InvoiceDetailsIndividualOffice/:id"
          element={<InvoiceDetailsIndividualOffice />}
        ></Route>
        <Route
          path="/InvoiceDataOffice"
          element={<InvoiceDataOffice />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
