import React from "react";
import { Link, BrowserRouter } from "react-router-dom";
import "../styles/style.css";

export default function Header() {
  return (
    <div className="header navbar d-flex justify-content-end p-3 pe-5">
      <BrowserRouter>
        <section className="mx-4">
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            home
          </Link>
        </section>
        <section className="mx-4">
          <Link style={{ textDecoration: "none", color: "white" }} to="/about">
            about
          </Link>
        </section>
        <section className="mx-4">
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/portfolio"
          >
            projects
          </Link>
        </section>
        <section>
          <a
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
