import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck, faHourglassHalf, faUserInjured, faPlus } from '@fortawesome/free-solid-svg-icons'
import { WindowSizeContext } from "../WindowSizeContext";
import style from "./Sidebar.module.css";
import Logo from '../../assets/Logo.png'

const Sidebar = () => {
  const location = useLocation();
  const windowWidth = useContext(WindowSizeContext);

  return (
    <div className={style.sidebar}>
      <div>
        <img src={Logo} alt="logo" />
      </div>
      <hr />
      <ul className={style.navList}>
        <li>
          <Link
            aria-label="Book List"
            to="/BookList"
            className={`${style.Link} ${
              location.pathname === "/BookList" ? style.active : ""
            }`}
          >
            {windowWidth > 767 ? 'Booking List' : <FontAwesomeIcon icon={faCalendarCheck} size="2x"/>}
          </Link>
        </li>
        <li>
          <Link
            aria-label="Waiting List"
            to="/WaitingList"
            className={`${style.Link} ${
              location.pathname === "/WaitingList" ? style.active : ""
            }`}
          >
          {windowWidth > 767 ? 'Waiting List' : <FontAwesomeIcon icon={faHourglassHalf} size="2x"/>}
          </Link>
        </li>
        <li>
          <Link
            aria-label="Current Patient"
            to="/CurrentPatient"
            className={`${style.Link} ${
              location.pathname === "/CurrentPatient" ? style.active : ""
            }`}
          >
            {windowWidth > 767 ? 'Current Patient' : <FontAwesomeIcon icon={faUserInjured} size="2x"/>}
          </Link>
        </li>
      </ul>
      <hr />
      <Link
          aria-label="Reservation Page"
          to="/Reservation"
          className={`${style.Link} 
                      ${(location.pathname === "/Reservation" | location.pathname === "/") ? style.active : ""}
                    `}
      >
            <FontAwesomeIcon icon={faPlus} size="2x"/> {windowWidth > 767 ? 'Add Patient' : ''}
      </Link>
    </div>
  );
};

export default Sidebar;