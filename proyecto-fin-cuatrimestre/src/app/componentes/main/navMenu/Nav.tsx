import React from "react";
import { BotonNav } from "./botonNav/BotonNav";
import "./Nav.css";
import { iconsBotonNavs } from "../../../../../public/Imagenes";

export const Nav = () => {
  return (
    <>
      <div>
        <nav className="navContenedor">
          <BotonNav
            imagenSrc={iconsBotonNavs.busquedaDeTrabajo.src}
            linkTo="https://invertir.olavarria.gov.ar/servicios/portal-de-empleo/"
            altText="Empleos"
          />
          <BotonNav
            imagenSrc={iconsBotonNavs.licencia.src}
            linkTo="https://gobiernoabierto.olavarria.gov.ar/tramites-y-servicios/#licencias-de-conducir"
            altText="Licensias"
          />
             <BotonNav
            imagenSrc={iconsBotonNavs.licencia.src}
            linkTo="https://gobiernoabierto.olavarria.gov.ar/tramites-y-servicios/#licencias-de-conducir"
            altText="Licensias"
          />
             <BotonNav
            imagenSrc={iconsBotonNavs.licencia.src}
            linkTo="https://gobiernoabierto.olavarria.gov.ar/tramites-y-servicios/#licencias-de-conducir"
            altText="Licensias"
          />
          <BotonNav
            imagenSrc={iconsBotonNavs.turnos.src}
            linkTo="https://www.docturno.com/"
            altText="Turnos"
          />
          <BotonNav
            imagenSrc={iconsBotonNavs.impuestos.src}
            linkTo="https://www.olavarria.gov.ar/gobierno-local/dependencias-municipales/"
            altText="Impuestos"
          />
          <BotonNav
            imagenSrc={iconsBotonNavs.secretaria.src}
            linkTo="https://www.w3schools.com/js/js_window_location.asp.com"
            altText="Secretaria"
          />
        </nav>
      </div>
    </>
  );
};
