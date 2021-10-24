import React from "react";
import Header from "../components/Header";
import vazia from "../images/vazia.jpg";
import * as allImgs from "../components/AllImgs";

export default function Portfolio() {
  return (
    <div>
      <Header />
      <section className="grad-background container-fluid vh-100 pt-5">
        <div className="col d-flex justify-content-center align-items-center">
          {/* colocar gifs dos projetos */}
          <img
            className="col-3 my-3"
            style={{ width: "20%" }}
            src={vazia}
            alt="imagem vazia a ser preenchida por um print de um projeto"
          />
          <p className="col-6 ms-5">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor"
            <img width="30px" src={allImgs.html} alt="icone html" />
          </p>
        </div>
        <div className="col d-flex justify-content-center align-items-center">
          {/* colocar gifs dos projetos */}
          <img
            className="col-3 mb-3"
            style={{ width: "20%" }}
            src={vazia}
            alt="imagem vazia a ser preenchida por um print de um projeto"
          />
          <p className="col-6 ms-5">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in"
          </p>
        </div>
        <div className="col d-flex justify-content-center align-items-center">
          {/* colocar gifs dos projetos */}
          <img
            className="col-3"
            style={{ width: "20%" }}
            src={vazia}
            alt="imagem vazia a ser preenchida por um print de um projeto"
          />
          <p className="col-6 ms-5">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in "
          </p>
        </div>
      </section>
    </div>
  );
}
