import React, { useState } from "react";
import OfficepayLogo from "../Images/Office Pay - Logo.png";
import MenuBars from "../Images/MenuBar-new.png";
import Closeicon from "../Images/Closeicon.png";
import { Link, useNavigate } from "react-router-dom";
function HeaderTwo(props) {
  const [toggleMenu, setToggleMenu] = useState(true);
  const navigate = useNavigate();
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };
  const handlelogoClick = () => {
    navigate("/");
  };
  return (
    <header>
      <div className="Header-logo">
        <img onClick={handlelogoClick} src={OfficepayLogo} />
      </div>

      <nav>
        <ul className={toggleMenu ? "" : "header-navbar"}>
          <li className="header-links">
            {" "}
            <Link to="/">Home </Link>{" "}
          </li>
          <li className="header-links">
            {" "}
            <Link to="/about">
              {" "}
              <span>About </span>
            </Link>{" "}
          </li>
          <li className="header-links">
            <Link to="/contact">
              {" "}
              <span>Contact Us</span>{" "}
            </Link>
          </li>
          <li className="Login-btn-header">
            <Link
              to={
                props.dashboardpath == "office"
                  ? "/DashboardOffice"
                  : "/Dashboard"
              }
            >
              DashBoard
            </Link>{" "}
          </li>
        </ul>
      </nav>

      <button onClick={toggleNav} className="btn-NavMenu">
        {toggleMenu ? (
          <img className="Menu-icons" src={MenuBars} />
        ) : (
          <img className="Menu-icons-close" src={Closeicon} />
        )}
      </button>
    </header>
  );
}

export default HeaderTwo;
