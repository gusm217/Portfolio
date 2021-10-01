import React from "react";
import Header from "../components/Header";
import * as allImgs from "../components/AllImgs";

export default function About() {
  return (
    <div>
      <Header />
      <section className="bg-black container-fluid pt-5 vh-100">
        <section className="d-flex align-items-center">
          <div className="col-6 d-flex justify-content-center">
            <img
              className="ouropreto-img mt-5"
              width="50%"
              src={allImgs.ouropreto}
              alt="foto minha em ouro preto"
            />
          </div>
          <div className="col-6 px-5">
            <p className="about">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p>Stacks I have studied:</p>
            <img width="50px" src={allImgs.linux} alt="icone do linux" />;
            <img width="50px" src={allImgs.githubicon} alt="icone do github" />;
            <img width="50px" src={allImgs.css} alt="icone do css" />;
            <img width="50px" src={allImgs.js} alt="icone do javascript" />;
            <img width="50px" src={allImgs.react} alt="icone do react" />;
            <img width="50px" src={allImgs.redux} alt="icone do redux" />;
            <img width="50px" src={allImgs.html} alt="icone do html" />;
            <img width="50px" src={allImgs.mysql} alt="icone do mysql" />;
            <img width="50px" src={allImgs.mongo} alt="icone do mongo" />;
            <p className="mt-3">Stacks that I'm currently studying:</p>
            <img width="110px" src={allImgs.node} alt="icone do mongo" />;
            <img width="100px" src={allImgs.express} alt="icone do mongo" />;
          </div>
        </section>
      </section>
    </div>
  );
}
