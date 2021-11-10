import React from 'react';
import * as allImgs from './AllImages';
import '../styles/style.css';

export default function About() {
  return (
    <div className="container-fluid grad-background d-flex vh-100">
      <section
        style={{ textAlign: 'justify' }}
        className="col-6 d-flex flex-column align-items-center px-5 py-5"
      >
        <div>
          <p>
            Olá, seja bem vindo! Sou Gustavo Mendes, desenvolvedor de software
            Fullstack pela Trybe, uma escola com foco na formação de pessoas
            desenvolvedoras, conciliando soft-skills, hard-skills e metodologias
            ágeis. Abaixo estão algumas stacks que já tive e estou atualmente em
            contato. Fique a vontade para entrar em contato e obrigado pela
            visita =D
          </p>
        </div>
        <img
          style={{ width: '70%', borderRadius: '4%' }}
          src={allImgs.ouroPreto}
          alt="foto minha de Ouro Preto"
        />
        <div></div>
      </section>
      <section className="col-6 px-5 py-5 d-flex flex-column align-items-center">
        <section className="d-flex flex-column align-items-center">
          <section className="d-flex">
            <div className="d-flex flex-column">
              <img width="50px" src={allImgs.linux} alt="icone do linux" />;
              <img
                width="50px"
                src={allImgs.githubicon}
                alt="icone do github"
              />
              ;
              <img width="50px" src={allImgs.css} alt="icone do css" />;
            </div>
            <div className="d-flex flex-column">
              <img width="50px" src={allImgs.js} alt="icone do javascript" />;
              <img width="50px" src={allImgs.react} alt="icone do react" />;
              <img width="50px" src={allImgs.redux} alt="icone do redux" />;
            </div>
            <div className="d-flex flex-column">
              <img width="50px" src={allImgs.html} alt="icone do html" />;
              <img width="50px" src={allImgs.mysql} alt="icone do mysql" />;
              <img width="50px" src={allImgs.mongo} alt="icone do mongo" />;
            </div>
          </section>
        </section>
        <div className="d-flex flex-column align-items-center mt-2">
          <p className="ms-4 mt-3">Atualmente estudando:</p>
          <div>
            <img width="110px" src={allImgs.node} alt="icone do mongo" />;
            <img width="100px" src={allImgs.express} alt="icone do mongo" />;
          </div>
        </div>
      </section>
    </div>
  );
}
