import React from "react";
import githubIcon from "../images/github.png";
import linkedinIcon from "../images/linkedin.jpg";

export default function Contact() {
  return (
    <div>
      <section
        id="contact-me-section"
        className="gap container d-flex flex-column"
      >
        <h3
          style={{ fontWeight: "700", color: "white" }}
          className="align-self-center"
        >
          CONTACT ME
        </h3>
        <form
          className="w-50 d-flex flex-column align-self-center"
          action="https://formsubmit.co/el/dumowe"
          method="POST"
        >
          <input
            className="form-control mt-2"
            type="text"
            name="name"
            placeholder="your full name please"
            required
          />
          <input
            className="form-control mt-2"
            type="email"
            name="email"
            placeholder="mybestemail@teste.com"
            required
          />
          <input
            className="form-control mt-2"
            type="number"
            name="phone-number"
            placeholder="your best phone number"
          />
          <input
            type="text"
            className="form-control mt-2"
            placeholder="your text here..."
            minLength="50"
            required
          />
          <button className="col-2 btn btn-primary mt-2" type="submit">
            Submit
          </button>
        </form>
        <div className="d-flex justify-content-center align-items-center mt-2">
          <a href="https://github.com/gusm217" target="_blank" rel="noreferrer">
            <img width="50px" src={githubIcon} alt="imagem ícone github" />
          </a>
          <a
            href="https://linkedin.com/in/gusm217"
            target="_blank"
            rel="noreferrer"
          >
            <img width="100px" src={linkedinIcon} alt="imagem ícone github" />
          </a>
        </div>
      </section>
    </div>
  );
}
