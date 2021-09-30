import React from "react";
// import { Link } from "react-router-dom";
import Header from "../components/Header";
import "../styles/style.css";

export default function Home() {
  return (
    <div>
      <Header />
      <section>
        <section className="col-6">
          <img src="../public/profilepic.jpeg" alt="Foto do profile" />
        </section>
        <section></section>
      </section>
    </div>
  );
}
