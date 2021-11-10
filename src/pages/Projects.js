import React from 'react';
import Header from '../components/Header';
import * as AllImages from '../components/AllImages';
import trivia from '../images/trivia.gif';
import receitas from '../images/receitas.gif';
import { Link } from 'react-router-dom';

export default function Portfolio() {
  return (
    <div>
      <Header />
      <section className="d-none d-xl-block grad-background container-fluid vh-100 pt-5">
        <div className="col d-flex justify-content-center align-items-center">
          <img
            className="col-3 my-3"
            style={{ width: '20%' }}
            src={receitas}
            alt="imagem vazia a ser preenchida por um print de um projeto"
          />
          <section className="col-6 d-flex align-items-center flex-column">
            <h3
              className="neonHeader-effect"
              style={{ color: 'yellow', fontSize: '22px', fontWeight: 700 }}
            >
              cook time
            </h3>
            <p style={{ textAlign: 'justify' }} className="ms-5">
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
            style={{ width: '20%' }}
            src={trivia}
            alt="imagem vazia a ser preenchida por um print de um projeto"
          />
          <section className="col-6 d-flex align-items-center flex-column">
            <h3
              className="neonHeader-effect"
              style={{ color: 'yellow', fontSize: '22px', fontWeight: 700 }}
            >
              trivia
            </h3>
            <p style={{ textAlign: 'justify' }} className="ms-5">
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
        {/* <div className="col d-flex justify-content-center align-items-center"> */}
        {/* colocar gifs dos projetos */}
        {/* <img
            className="col-3"
            style={{ width: '20%' }}
            src={AllImages.vazio}
            alt="imagem vazia a ser preenchida por um print de um projeto"
          />
          <section className="col-6 d-flex align-items-center flex-column">
            <h3
              className="neonHeader-effect"
              style={{ color: 'yellow', fontSize: '22px', fontWeight: 700 }}
            >
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
        </div> */}
      </section>
      {/* MOBILE */}
      <section className="d-xl-none grad-background container-fluid">
        <section className="d-flex align-items-center">
          <Link to="/Portfolio/home">
            <img
              className="ms-2"
              width="15%"
              src={AllImages.arrowBack}
              alt="seta de voltar para o menu principal"
            />
          </Link>
          <p
            style={{ fontWeight: 700, fontSize: 'large' }}
            className="neonFont p-3"
          >
            projetos
          </p>
        </section>
        <section className="d-flex flex-column align-items-center">
          <h3
            className="neonHeader-effect"
            style={{ color: 'yellow', fontSize: '18px', fontWeight: 700 }}
          >
            cook time
          </h3>
          <img
            className="col-3 my-3"
            style={{ width: '100%' }}
            src={receitas}
            alt="imagem vazia a ser preenchida por um print de um projeto"
          />
          <div className="align-self-center">
            <img width="30px" src={AllImages.react} alt="icone react" />
            <img width="30px" src={AllImages.redux} alt="icone redux" />
            <img width="30px" src={AllImages.css} alt="icone css" />
          </div>
          <p style={{ textAlign: 'justify' }} className="px-2">
            O projeto de receitas é um trabalho em equipe para mobile, onde por
            meio de uma api, listamos uma variedade de refeições nas categorias:
            comidas e bebidas; contando também com features como: autenticação
            de login, preferências por perfil de usuário, lista de favoritos e
            pesquisa de pratos por localidade.
            <br />
          </p>
        </section>
        <section className="d-flex flex-column align-items-center mt-4">
          <h3
            className="neonHeader-effect"
            style={{ color: 'yellow', fontSize: '18px', fontWeight: 700 }}
          >
            trivia
          </h3>
          <img
            className="col-3 my-3"
            style={{ width: '100%' }}
            src={trivia}
            alt="imagem vazia a ser preenchida por um print de um projeto"
          />
          <div>
            <img width="30px" src={AllImages.react} alt="icone react" />
            <img width="30px" src={AllImages.redux} alt="icone redux" />
            <img width="30px" src={AllImages.css} alt="icone css" />
          </div>
          <p style={{ textAlign: 'justify' }} className="px-2 mb-4">
            Trivia é um jogo de perguntas e respostas, onde por meio de uma api,
            são disponibilizadas questões sobre conhecimentos gerais. Vence
            aquele que pontuar mais rapidamente e no final, há um ranking com as
            melhores pontuaçoẽs.
            <br />
          </p>
        </section>
      </section>
    </div>
  );
}
