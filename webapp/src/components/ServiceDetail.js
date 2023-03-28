import React from "react";
import { useParams } from "react-router-dom";
import { service } from "../utils/service";

const ServiceDetail = () => {
  const { category } = useParams();
  return (
    <>
      <div>ServiceDetail: {category}</div>
      <div category={category}>
        {service
          .filter((list) => list.category === category)
          .map((service) => (
            <div key={category}>
              <h1>{service.name}</h1>
              <h1>{service.category}</h1>
              <img src={service.img} alt={service.name} />
              <h1>{service.description}</h1>
              <h1>{service.details.barrios}</h1>
            </div>
          ))}
      </div>
    </>
  );
};

export default ServiceDetail;
