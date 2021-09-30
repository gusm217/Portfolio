import React from "react";
import { Link, BrowserRouter } from "react-router-dom";
import "../styles/style.css";

export default function Header() {
  return (
    <div className="header d-flex justify-content-end p-3 pe-5">
      <BrowserRouter>
        <section className="mx-4">
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            HOME
          </Link>
        </section>
        <section className="mx-4">
          <Link style={{ textDecoration: "none", color: "black" }} to="/about">
            ABOUT
          </Link>
        </section>
        <section className="mx-4">
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/portfolio"
          >
            PORTFOLIO
          </Link>
        </section>
        <section className="mx-4">
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/contact"
          >
            CONTACT
          </Link>
        </section>
      </BrowserRouter>
    </div>
  );
}
