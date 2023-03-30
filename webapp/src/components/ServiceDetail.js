import React from "react";
import { useParams } from "react-router-dom";
import { service } from "../utils/service";
import "../styles/servicedetail.css";
const ServiceDetail = () => {
  const { category } = useParams();
  return (
    <>
      <div keys={category}>
        {service
          .filter((list) => list.category === category)
          .map((service) => (
            <div key={category} className="detailContainer">
              <h1>{service.name}</h1>
              <img src={service.img} alt={service.name} />
              <h3>
                Estamos actualizando la página para darte una mejor atención.
                Por favor te invitamos a nos dejes un mensaje a través de
                whatsapp o en la seccion de contacto y un experto te brindará
                ayudaa la brevedad.
              </h3>
            </div>
          ))}
      </div>
    </>
  );
};

export default ServiceDetail;
