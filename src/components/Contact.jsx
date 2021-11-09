import React from 'react';
// import githubIcon from "../images/github.png";
// import linkedinIcon from "../images/linkedin.jpg";
import * as allImages from '../components/AllImages';

export default function Contact() {
  return (
    <div className="d-none d-xl-block">
      <section
        id="contact-me-section"
        className=" gap-top bg-black container-fluid d-flex flex-column"
      >
        <h3
          style={{ fontWeight: '700', color: 'white' }}
          className="align-self-center"
        >
          contact me
        </h3>
        <form
          className="w-50 d-flex flex-column align-self-center"
          action="https://formsubmit.co/gusm217@gmail.com"
          method="POST"
        >
          <input
            className="form-control mt-2"
            type="text"
            name="name"
            placeholder="your full name, please"
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
            name="number"
            placeholder="your best phone number"
          />
          <textarea
            className="form-control mt-2"
            placeholder="your text here..."
            name="textarea"
            minLength="50"
            required
          />
          <button className="col-2 btn btn-primary mt-2" type="submit">
            Submit
          </button>
        </form>
        <div className="gap-bot d-flex justify-content-center align-items-center mt-2">
          <a href="https://github.com/gusm217" target="_blank" rel="noreferrer">
            <img
              width="40px"
              src={allImages.github}
              alt="imagem ícone github"
            />
          </a>
          <a
            href="https://linkedin.com/in/gusm217"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="ps-2"
              width="95px"
              src={allImages.linkedin}
              alt="imagem ícone github"
            />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5531980108617"
            target="_blank"
            rel="noreferrer"
          >
            <img
              width="60px"
              src={allImages.whatsBranco}
              alt="imagem ícone github"
            />
          </a>
        </div>
      </section>
    </div>
  );
}
