import React from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import '../styles/style.css';

export default function Header() {
  let history = useHistory();
  function contactRoute() {
    if (window.location.pathname !== '/') {
      history.push('/Portfolio/home');
    }
  }

  return (
    <div className="d-none d-xl-block">
      <section className="header navbar bg-black d-flex justify-content-end p-3 pe-5">
        <section className="mx-5">
          <NavLink
            activeStyle={{ color: 'white' }}
            className="neonFont"
            style={{ textDecoration: 'none', color: 'white' }}
            to="/Portfolio/home"
          >
            HOME
          </NavLink>
        </section>
        <section className="mx-5">
          <a
            onClick={() => contactRoute()}
            className="neonFont"
            style={{ textDecoration: 'none', color: 'white' }}
            href="#contact-me-section"
          >
            SOBRE
          </a>
        </section>
        <section className="mx-5">
          <NavLink
            activeStyle={{ color: 'white' }}
            className="neonFont"
            style={{ textDecoration: 'none', color: 'white' }}
            to="/Portfolio/projects"
          >
            PROJETOS
          </NavLink>
        </section>
      </section>
    </div>
  );
}
