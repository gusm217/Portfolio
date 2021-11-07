import React from 'react';
// import { Link } from "react-router-dom";
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import profilepic from '../images/profilepic.png';
import Contact from '../components/Contact';
import '../styles/style.css';
import * as allImgs from '../components/AllImages';

export default function Home() {
  return (
    <div>
      <Header />
      <section className="d-none d-xl-block d-xxl-none grad-background container-fluid">
        <div
          style={{ paddingBottom: '200px' }}
          className="d-flex flex-column align-items-center pt-3"
        >
          <section className="col-6 d-flex justify-content-center mt-3">
            <img
              className="profilepic"
              src={profilepic}
              alt="Foto do profile"
            />
          </section>
          <section style={{ textAlign: 'justify' }} className="col-6 px-5 mt-4">
            <p>
              Olá, seja bem vindo! Sou Gustavo Mendes, desenvolvedor de software
              Fullstack pela Trybe, uma escola com foco na formação de pessoas
              desenvolvedoras, conciliando soft-skills, hard-skills e
              metodologias ágeis. Abaixo estão algumas stacks que já tive e
              estou atualmente em contato. Fique a vontade para entrar em
              contato e obrigado pela visita =D
            </p>
          </section>
          <section>
            <img width="50px" src={allImgs.linux} alt="icone do linux" />;
            <img width="50px" src={allImgs.githubicon} alt="icone do github" />;
            <img width="50px" src={allImgs.css} alt="icone do css" />;
            <img width="50px" src={allImgs.js} alt="icone do javascript" />;
            <img width="50px" src={allImgs.react} alt="icone do react" />;
            <img width="50px" src={allImgs.redux} alt="icone do redux" />;
            <img width="50px" src={allImgs.html} alt="icone do html" />;
            <img width="50px" src={allImgs.mysql} alt="icone do mysql" />;
            <img width="50px" src={allImgs.mongo} alt="icone do mongo" />;
            <div className="d-flex flex-column align-items-center mt-2">
              <p className="ms-4 mt-3">Atualmente estudando:</p>
              <div>
                <img width="110px" src={allImgs.node} alt="icone do mongo" />;
                <img width="100px" src={allImgs.express} alt="icone do mongo" />
                ;
              </div>
            </div>
          </section>
        </div>
      </section>
      {/* MOBILE */}
      <section className="d-xl-none grad-background container-fluid">
        <section className="d-flex flex-column align-items-center justify-content-center vh-100">
          <img
            className="profilepic mb-3"
            src={profilepic}
            alt="Foto do profile"
          />
          <h2 style={{ color: 'white', fontWeight: 600 }}>Hi! </h2>
          <p style={{ textAlign: 'center', fontWeight: 600 }} className="mb-5">
            Sou Gustavo Mendes <br /> desenvovedor fullstack!
          </p>
          <section className="d-flex flex-column justify-content-center ms-4 mb-2 ps-5">
            <div className="col mb-4 ms-1">
              <a
                href="https://linkedin.com/in/gusm217"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="neonIcon me-3"
                  width="30%"
                  src={allImgs.linkedin}
                  alt="icone do linkedin"
                />
                ;
              </a>
              <Link to="/projects">
                <img
                  className="neonIcon p-2"
                  width="30%"
                  src={allImgs.project2}
                  alt="icone de projetos"
                />
              </Link>
            </div>
            <div className="col ms-1">
              <a
                href="https://github.com/gusm217"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="neonIcon p-2 me-3"
                  width="30%"
                  src={allImgs.github}
                  alt="icone do github"
                />
                ;
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=5531980108617"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="neonIcon"
                  width="30%"
                  src={allImgs.whatsBranco}
                  alt="icone do whatsapp"
                />
                ;
              </a>
            </div>
          </section>
        </section>
      </section>
      <Contact />
    </div>
  );
}
