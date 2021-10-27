import React from "react";
import Header from "../components/Header";
import * as AllImages from "../components/AllImages";
import trivia from "../images/trivia.gif";
import receitas from "../images/receitas.gif";

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
            src={receitas}
            alt="imagem vazia a ser preenchida por um print de um projeto"
          />
          <section className="col-6 d-flex align-items-center flex-column">
            <h3 style={{ color: "yellow", fontSize: "22px", fontWeight: 700 }}>
              Recipes Project
            </h3>
            <p className="ms-5">
              O projeto de receitas é um trabalho em equipe para mobile, onde
              por meio de uma api, listamos uma variedade de refeições nas
              categorias: comidas e bebidas; contando também com features como:
              autenticação de login, preferências por perfil de usuário, lista
              de favoritos e pesquisa de pratos por localidade.
              <br />
              <img width="30px" src={AllImages.react} alt="icone react" />
              <img width="30px" src={AllImages.redux} alt="icone redux" />
              <img width="30px" src={AllImages.css} alt="icone css" />
            </p>
          </section>
        </div>
        <div className="col d-flex justify-content-center align-items-center">
          {/* colocar gifs dos projetos */}
          <img
            className="col-3 mb-3"
            style={{ width: "20%" }}
            src={trivia}
            alt="imagem vazia a ser preenchida por um print de um projeto"
          />
          <section className="col-6 d-flex align-items-center flex-column">
            <h3 style={{ color: "yellow", fontSize: "22px", fontWeight: 700 }}>
              Trivia Project
            </h3>
            <p className="ms-5">
              Trivia é um jogo de perguntas e respostas, onde por meio de uma
              api, são disponibilizadas questões sobre conhecimentos gerais.
              Vence aquele que pontuar mais rapidamente e no final, há um
              ranking com as melhores pontuaçoẽs.
              <br />
              <img width="30px" src={AllImages.react} alt="icone react" />
              <img width="30px" src={AllImages.redux} alt="icone redux" />
              <img width="30px" src={AllImages.css} alt="icone css" />
            </p>
          </section>
        </div>
        <div className="col d-flex justify-content-center align-items-center">
          {/* colocar gifs dos projetos */}
          <img
            className="col-3"
            style={{ width: "20%" }}
            src={AllImages.vazio}
            alt="imagem vazia a ser preenchida por um print de um projeto"
          />
          <section className="col-6 d-flex align-items-center flex-column">
            <h3 style={{ color: "yellow", fontSize: "22px", fontWeight: 700 }}>
              Trivia Project
            </h3>
            <p className="ms-5">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              "
            </p>
          </section>
        </div>
      </section>
    </div>
  );
}
