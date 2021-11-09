import React from "react";
import { BrowserRouter, useHistory, NavLink } from "react-router-dom";
import "../styles/style.css";

export default function Header() {
  let history = useHistory();
  function contactRoute() {
    if (window.location.pathname !== "/") {
      history.push("/");
    }
  }

  return (
    <div className="d-none d-xl-block d-xxl-none">
      <section className="header navbar d-flex justify-content-end p-3 pe-5">
        <BrowserRouter>
          <section className="mx-4">
            <NavLink
              activeStyle={{ color: "yellow" }}
              className="neonFont"
              style={{ textDecoration: "none", color: "white" }}
              to="/home"
            >
              home
            </NavLink>
          </section>
          <section className="mx-4">
            <NavLink
              activeStyle={{ color: "yellow" }}
              className="neonFont"
              style={{ textDecoration: "none", color: "white" }}
              to="/projects"
            >
              projects
            </NavLink>
          </section>
          <section className="mx-4">
            <a
              onClick={() => contactRoute()}
              className="neonFont"
              style={{ textDecoration: "none", color: "white" }}
              href="#contact-me-section"
            >
              contact
            </a>
          </section>
        </BrowserRouter>
      </section>
    </div>
  );
}