import React from "react";
import Button from "../common/button.tsx";
import { useButtonMenu } from "../../hooks/useButtonMenu";

const MenuButtonIsland = () => {
  const { setSelectedButton } = useButtonMenu(); // Accede a la función de estado

  return (
    <div
      className="button-menu"
      style={{
        position: "absolute" /* Superponer los botones sobre el header */,
        top: "50%" /* Alinearlo verticalmente al centro */,
        right: "2rem" /* Espacio a la derecha */,
        transform: "translateY(-50%)" /* Centramos el menú verticalmente */,
        display: "flex",
        flexDirection: "column" /* Alinear botones verticalmente */,
        gap: "10px" /* Espacio entre botones */,
      }}
    >
      <Button
        onClick={() => {
          setSelectedButton("general"); // Guarda el botón seleccionado
        }}
        style={{
          background:
            "linear-gradient(45deg, rgba(51, 51, 51, 1), rgba(5, 151, 242, 1), rgba(5, 151, 242, 0.8), rgba(5, 151, 242, 0.6), rgba(5, 151, 242, 0.4), rgba(5, 151, 242, 0.2), rgba(51, 51, 51, 0))",
          boxShadow: "0 0 10px #0000001a",
          color: "white",
          border: "none",
          borderRadius: "5px",
          padding: "10px 15px",
          cursor: "pointer",
          fontSize: "90%",
          clipPath: "border-box",
          fontWeight: "bold",
        }}
        hoverStyle={{
          background:
            "linear-gradient(45deg, rgba(255, 255, 255, 0.3), rgba(0, 149, 255, 0.7))", // Gradiente para el hover
          boxShadow: "0 0 15px rgba(0, 149, 255, 0.7)", // Efecto de brillo
        }}
      >
        General
      </Button>

      <Button
        onClick={() => {
          setSelectedButton("politica y privacidad"); // Guarda el botón seleccionado
        }}
        style={{
          background:
            "linear-gradient(45deg, rgba(51, 51, 51, 1), rgba(5, 151, 242, 1), rgba(5, 151, 242, 0.8), rgba(5, 151, 242, 0.6), rgba(5, 151, 242, 0.4), rgba(5, 151, 242, 0.2), rgba(51, 51, 51, 0))",
          color: "white",
          border: "none",
          borderRadius: "5px",
          padding: "10px 15px",
          cursor: "pointer",
          fontSize: "90%",
          clipPath: "border-box",
          fontWeight: "bold",
        }}
        hoverStyle={{
          background:
            "linear-gradient(45deg, rgba(255, 255, 255, 0.3), rgba(0, 149, 255, 0.7))", // Gradiente para el hover
          boxShadow: "0 0 15px rgba(0, 149, 255, 0.7)", // Efecto de brillo
        }}
      >
        Políticas y Privacidad
      </Button>

      <Button
        onClick={() => {
          setSelectedButton("terminos y condiciones"); // Guarda el botón seleccionado
        }}
        style={{
          background:
            "linear-gradient(45deg, rgba(51, 51, 51, 1), rgba(5, 151, 242, 1), rgba(5, 151, 242, 0.8), rgba(5, 151, 242, 0.6), rgba(5, 151, 242, 0.4), rgba(5, 151, 242, 0.2), rgba(51, 51, 51, 0))",
          color: "white",
          border: "none",
          borderRadius: "5px",
          padding: "10px 15px",
          cursor: "pointer",
          fontSize: "90%",
          clipPath: "border-box",
          fontWeight: "bold",
        }}
        hoverStyle={{
          background:
            "linear-gradient(45deg, rgba(255, 255, 255, 0.3), rgba(0, 149, 255, 0.7))", // Gradiente para el hover
          boxShadow: "0 0 15px rgba(0, 149, 255, 0.7)", // Efecto de brillo
        }}
      >
        Términos y Condiciones
      </Button>

      <Button
        onClick={() => {
          setSelectedButton("gestion de cuenta"); // Guarda el botón seleccionado
        }}
        style={{
          background:
            "linear-gradient(45deg, rgba(51, 51, 51, 1), rgba(5, 151, 242, 1), rgba(5, 151, 242, 0.8), rgba(5, 151, 242, 0.6), rgba(5, 151, 242, 0.4), rgba(5, 151, 242, 0.2), rgba(51, 51, 51, 0))",
          color: "white",
          border: "none",
          borderRadius: "5px",
          padding: "10px 15px",
          cursor: "pointer",
          fontSize: "90%",
          clipPath: "border-box",
          fontWeight: "bold",
        }}
        hoverStyle={{
          background:
            "linear-gradient(45deg, rgba(255, 255, 255, 0.3), rgba(0, 149, 255, 0.7))", // Gradiente para el hover
          boxShadow: "0 0 15px rgba(0, 149, 255, 0.7)", // Efecto de brillo
        }}
      >
        Gestion de cuenta
      </Button>
      <Button
        onClick={() => {
          setSelectedButton("gestion de datos del usuario"); // Guarda el botón seleccionado
        }}
        style={{
          background:
            "linear-gradient(45deg, rgba(51, 51, 51, 1), rgba(5, 151, 242, 1), rgba(5, 151, 242, 0.8), rgba(5, 151, 242, 0.6), rgba(5, 151, 242, 0.4), rgba(5, 151, 242, 0.2), rgba(51, 51, 51, 0))",
          color: "white",
          border: "none",
          borderRadius: "5px",
          padding: "10px 15px",
          cursor: "pointer",
          fontSize: "90%",
          clipPath: "border-box",
          fontWeight: "bold",
        }}
        hoverStyle={{
          background:
            "linear-gradient(45deg, rgba(255, 255, 255, 0.3), rgba(0, 149, 255, 0.7))", // Gradiente para el hover
          boxShadow: "0 0 15px rgba(0, 149, 255, 0.7)", // Efecto de brillo
        }}
      >
        Gestion de datos del usuario
      </Button>
    </div>
  );
};

export default MenuButtonIsland;
