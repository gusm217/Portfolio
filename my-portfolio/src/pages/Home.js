import React from "react";
// import { Link } from "react-router-dom";
import Header from "../components/Header";
import profilepic from "../images/profilepic.png";
import Contact from "../components/Contact";
import "../styles/style.css";

export default function Home() {
  return (
    <div>
      <Header />
      <section className="bg-black container-fluid">
        <div className="d-flex flex-column align-items-center">
          <section className="col-6 d-flex justify-content-center mt-5">
            <img
              className="profilepic"
              src={profilepic}
              alt="Foto do profile"
            />
          </section>
          <section className="col-6 px-5 mt-5">
            <p style={{ color: "white" }}>
              "Hi there! I'm a Fullstack Developer to be from Brazil, currently
              studying Back-end at a fulltime coding school called Trybe. Here
              are some stacks I have learned and worked with and at the top you
              can find some projects I developed throughout the course. Feel
              free to contact me about any related subject. Thanks for the
              visit."
            </p>
          </section>
          {/* colocar as stacks */}
          {/* <section></section> */}
        </div>
        <Contact />
      </section>
    </div>
  );
}
