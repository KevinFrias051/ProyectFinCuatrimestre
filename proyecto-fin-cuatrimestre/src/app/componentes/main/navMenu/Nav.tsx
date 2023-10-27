import React from "react";
import { BotonNav } from "./botonNav/BotonNav";
import "./Nav.css";

export const Nav = () => {
  return (
    <>
      <div>
        <nav className="navContenedor">
          <BotonNav
            imagenSrc="https://es.m.wikipedia.org/wiki/Archivo:Logo-PSA.png"
            linkTo="https://invertir.olavarria.gov.ar/servicios/portal-de-empleo/"
            altText="Empleos"
          />
          <BotonNav
            imagenSrc="ruta/a/tu/imagen.png"
            linkTo="https://gobiernoabierto.olavarria.gov.ar/tramites-y-servicios/#licencias-de-conducir"
            altText="Licensias"
          />
          <BotonNav
            imagenSrc="ruta/a/tu/imagen.png"
            linkTo="https://www.docturno.com/"
            altText="Turnos"
          />
          <BotonNav
            imagenSrc="ruta/a/tu/imagen.png"
            linkTo="https://www.olavarria.gov.ar/gobierno-local/dependencias-municipales/"
            altText="Impuestos"
          />
          <BotonNav
            imagenSrc="ruta/a/tu/imagen.png"
            linkTo="https://www.w3schools.com/js/js_window_location.asp.com"
            altText="Secretaria"
          />
        </nav>
      </div>
    </>
  );
};
