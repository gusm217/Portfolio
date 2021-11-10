import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import profilepic from '../images/profilepic.png';
import About from '../components/About';
import '../styles/style.css';
import * as allImgs from '../components/AllImages';

export default function Home() {
  return (
    <div>
      <Header />
      <section className="d-none d-xl-block bg-black container-fluid vh-100 vw-100">
        <section
          style={{ height: '75%' }}
          className="d-flex align-items-center"
        >
          <div className="col-6 d-flex justify-content-end">
            <img
              className="profilepic"
              src={profilepic}
              alt="Foto do profile"
            />
          </div>
          <div className="col-6 ms-5 justify-content-start ">
            <p
              style={{
                color: 'white',
                fontSize: '120px',
                fontWeight: 600,
              }}
            >
              Hello!
            </p>
            <p
              style={{
                color: 'white',
                fontSize: 'x-large',
              }}
            >
              Sou <span className="myNameFlickering">GUSTAVO MENDES</span>{' '}
              <br /> desenvolvedor fullstack!
            </p>
          </div>
        </section>
        <div className="d-flex justify-content-center align-items-center">
          <a href="https://github.com/gusm217" target="_blank" rel="noreferrer">
            <img width="53px" src={allImgs.github} alt="imagem ícone github" />
          </a>
          <a
            href="https://linkedin.com/in/gusm217"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="ps-2"
              width="105px"
              src={allImgs.linkedin}
              alt="imagem ícone github"
            />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5531980108617"
            target="_blank"
            rel="noreferrer"
          >
            <img
              width="75px"
              src={allImgs.whatsBranco}
              alt="imagem ícone github"
            />
          </a>
        </div>
      </section>
      <About />

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
          <section
            style={{
              width: '100vw',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            className=""
          >
            <div>
              <button className="reset-button-style">
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
                </a>
              </button>
              <Link to="/Portfolio/projects">
                <img
                  className="neonIcon p-2"
                  width="30%"
                  src={allImgs.project2}
                  alt="icone de projetos"
                />
              </Link>
            </div>
            <div>
              <button className="reset-button-style">
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
                </a>
              </button>
              <button className="reset-button-style">
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
                </a>
              </button>
            </div>
          </section>
        </section>
      </section>
    </div>
  );
}
