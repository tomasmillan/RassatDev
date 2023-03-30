import React, { useState } from "react";
import "./form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("message", formData.message);

    fetch("contact_form.php", {
      method: "POST",
      body: data,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "ok") {
          alert(data.message);
          window.location.href = data.redirect;
        } else {
          alert(data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Hubo un error al enviar el formulario.");
      });
  };

  return (
    <div className="container-f">
      <h1>Contacto</h1>
      <form
        id="custom-contact-form"
        name="#subscribe-form"
        method="post"
        action="contact_form.php"
        noValidate
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label htmlFor="name">Nombre Completo</label>
          <input
            type="text"
            className="form-control"
            id="ccf-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            data-display="Nombre"
            required
            placeholder="Nombre y Apellido"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="ccf-email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            data-display="e-mail"
            required
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Telefono</label>
          <input
            type="tel"
            className="form-control"
            id="ccf-phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            data-display="phone"
            required
            pattern="[0-9]{10}"
            placeholder="Numero"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensaje</label>
          <textarea
            className="form-control"
            id="ccf-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            data-display="Mensaje"
            required
            placeholder="Mensaje"
          ></textarea>
        </div>
        <button type="submit" id="ccf-send" className="btnForm">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Form;
