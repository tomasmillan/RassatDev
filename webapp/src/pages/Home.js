import React from "react";
import { Carousel } from "../components/Carousel";
import { Link } from "react-router-dom";
import "../styles/home.css";
import Partners from "../components/Partners";
import Clients from "../components/Clients";
import Service from "../components/Service";
import About from "../components/About";

const Home = () => {
  return (
    <div>
      <div>
        <Carousel />
        <div className="callToAction">
          <p>Soluciones a medida, entendiendo su necesidad</p>
          <Link to="/services">
            <button className="btnP">Conocenos</button>
          </Link>
        </div>
      </div>
      <div>
        <About />
        <h1 className="sTitle">servicios</h1>
        <Service />
        <Clients />
        <Partners />
      </div>
    </div>
  );
};

export default Home;
