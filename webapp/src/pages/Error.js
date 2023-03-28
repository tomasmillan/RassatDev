import React from "react";

const Error = () => {
  const url =
    "https://img.freepik.com/vector-gratis/ups-error-404-ilustracion-concepto-robot-roto_114360-5529.jpg?w=740&t=st=1680031287~exp=1680031887~hmac=0d387a1f1a92f44ce199ec6f840de51df82347e90ff89cb2d6b7b9c9e6214618";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src={url}
        alt="Error"
        style={{
          marginTop: "50px",
          maxWidth: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};

export default Error;
