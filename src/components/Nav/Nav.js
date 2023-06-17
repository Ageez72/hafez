import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import $ from "jquery";
import Card from "../Card/Card";
import "./Nav.scss";
function Nav() {
  return (
    <nav>
      <Card className="nav-container">
        <ul>
          <li>
              <NavLink to="/salah">
                <i className="icon-mosque-solid"></i>
              </NavLink>
          </li>
          <li>
              <NavLink to="/moshaf">
                <i className="icon-book-open-solid"></i>
              </NavLink>
          </li>
          <li>
              <NavLink to="/">
                <i className="icon-compact"></i>
              </NavLink>
          </li>
          <li>
              <NavLink to="/hadeeth">
                <i className="icon-quote-right-solid"></i>
              </NavLink>
          </li>
          <li>
              <NavLink to="/tafseer">
                <i className="icon-receipt-solid"></i>
              </NavLink>
          </li>
          <li>
              <NavLink to="/bookmarks">
                <i className="icon-bookmark-solid"></i>
              </NavLink>
          </li>
          <Outlet />
        </ul>
      </Card>
    </nav>
  );
}

export default Nav;
