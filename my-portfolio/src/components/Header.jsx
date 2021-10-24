import React from "react";
import { BrowserRouter, Redirect, useHistory, NavLink } from "react-router-dom";
import "../styles/style.css";

export default function Header() {
  let history = useHistory();
  function contactRoute() {
    if (window.location.pathname !== "/") {
      history.push("/")
    }
  }

  
  return (
    <div className="header navbar d-flex justify-content-end p-3 pe-5">
      <BrowserRouter>
        <section className="mx-4">
          <NavLink activeStyle={{ color: 'yellow' }} style={{ textDecoration: "none", color: "white" }} to="/">
            home
          </NavLink>
        </section>
        <section className="mx-4">
          <NavLink activeStyle={{ color: 'yellow' }} style={{ textDecoration: "none", color: "white" }} to="/about">
            about
          </NavLink>
        </section>
        <section className="mx-4">
          <NavLink            
            activeStyle={{ color: 'yellow' }}
            style={{ textDecoration: "none", color: "white" }}
            to="/projects"
          >
            projects
          </NavLink>
        </section>
        <section className="mx-4">
          <a 
              onClick={ () => contactRoute() }            
              style={{ textDecoration: "none", color: "white" }}
              href="#contact-me-section"
            >
              contact
          </a>          
        </section>
      </BrowserRouter>
    </div>
  );
}
