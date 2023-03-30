import React from "react";
import "../styles/footer.css";
import Form from "../components/form/Form";
import {
  AiOutlinePhone,
  AiOutlineCopyrightCircle,
  AiOutlineMail,
} from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";

const Footer = () => {
  const phoneNumber = "+54 (011) 7045 8176";
  const mail = "info@rassat.com.ar";
  const adress = "Martinez, Buenos Aires, Argentina.";

  return (
    <footer>
      <div className="container">
        <div className="col-1">
          <Form />
        </div>
        <div className="col-2">
          <h1 className="title">Informacion</h1>
          <p className="text">Numero de Telefono</p>
          <div className="row">
            <AiOutlinePhone className="icon" />
            <p className="s-text">{phoneNumber}</p>
          </div>
          <p className="text">Email</p>
          <div className="row">
            <AiOutlineMail className="icon" />
            <p className="s-text">{mail}</p>
          </div>
          <p className="text">Dirreccion</p>
          <div className="row">
            <CiLocationOn className="icon" />
            <p className="s-text">{adress}</p>
          </div>
        </div>
      </div>
      <div className="author">
        <p className="copyrigth">
          <AiOutlineCopyrightCircle />
          <a href="/" className="company">
            {" "}
            Rassat
          </a>{" "}
          - Desarrollada por TML
        </p>
      </div>
    </footer>
  );
};

export default Footer;
