"use client"

import React from "react";
import "./Nav.css";
import { iconsBotonNavs } from "../../../../../public//iconosNavMenu/Imagenes";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function BrandExample() {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>

          <Navbar.Brand href="#home">
            <div className="DivNavBarItem">
              <img
                alt=""
                src={iconsBotonNavs.turnos.src}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              {/* Salud */}
              <p>Salud</p>
            </div>
          </Navbar.Brand>

          <Navbar.Brand href="#home">
            <div className="DivNavBarItem">
              <img
                alt=""
                src={iconsBotonNavs.licencia.src}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              {/* Licencias */}
              <p>Licencias</p>
            </div>
          </Navbar.Brand>

          <Navbar.Brand href="../../portal/empleos">
            <div className="DivNavBarItem">
              <img
                alt=""
                src={iconsBotonNavs.busquedaDeTrabajo.src}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              {/* Empleo */}
              <p>Empleo</p>
            </div>
          </Navbar.Brand>

          <Navbar.Brand href="#home">
            <div className="DivNavBarItem">
              <img
                alt=""
                src={iconsBotonNavs.impuestos.src}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              {/* Tramites */}
              <p>Tramites</p>
            </div>
          </Navbar.Brand>

          <Navbar.Brand href="#home">
            <div className="DivNavBarItem">
              <img
                alt=""
                src={iconsBotonNavs.secretaria.src}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              {/* Secretaria */}
              <p>Secretaria</p>
            </div>
          </Navbar.Brand>

        </Container>
      </Navbar>
    </>
  );
}











// CODIGO ORIGINAL
// export const Nav = () => {
//   return (
//     <>
//       <div>
//         <nav className="navContenedor">
//           <BotonNav
//             imagenSrc={iconsBotonNavs.busquedaDeTrabajo.src}
//             linkTo="https://invertir.olavarria.gov.ar/servicios/portal-de-empleo/"
//             altText="Empleos"
//           />
//           <BotonNav
//             imagenSrc={iconsBotonNavs.licencia.src}
//             linkTo="https://gobiernoabierto.olavarria.gov.ar/tramites-y-servicios/#licencias-de-conducir"
//             altText="Licensias"
//           />
//              <BotonNav
//             imagenSrc={iconsBotonNavs.licencia.src}
//             linkTo="https://gobiernoabierto.olavarria.gov.ar/tramites-y-servicios/#licencias-de-conducir"
//             altText="Licensias"
//           />
//              <BotonNav
//             imagenSrc={iconsBotonNavs.licencia.src}
//             linkTo="https://gobiernoabierto.olavarria.gov.ar/tramites-y-servicios/#licencias-de-conducir"
//             altText="Licensias"
//           />
//           <BotonNav
//             imagenSrc={iconsBotonNavs.turnos.src}
//             linkTo="https://www.docturno.com/"
//             altText="Turnos"
//           />
//           <BotonNav
//             imagenSrc={iconsBotonNavs.impuestos.src}
//             linkTo="https://www.olavarria.gov.ar/gobierno-local/dependencias-municipales/"
//             altText="Impuestos"
//           />
//           <BotonNav
//             imagenSrc={iconsBotonNavs.secretaria.src}
//             linkTo="https://www.w3schools.com/js/js_window_location.asp.com"
//             altText="Secretaria"
//           />
//         </nav>
//       </div>
//     </>
//   );
// };
