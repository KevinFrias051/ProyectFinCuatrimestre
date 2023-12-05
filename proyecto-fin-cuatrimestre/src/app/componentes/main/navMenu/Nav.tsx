"use client"
import React from "react";
import "./Nav.css";
import { iconsBotonNavs } from "../../../../../public/iconosNavMenu/Imagenes";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

// Barra de navegacion dentro del mail
// Unico boton que sirve es Empleos
// Renderiza las imagenes y el texto de cada boton.
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
              <p>Licencias</p>
            </div>
          </Navbar.Brand>

          {/* Unico boton de navegacion que tiene utilidad, no lleva a la seccion de empleos */}
          <Navbar.Brand href="../../portal/empleos">
            <div className="DivNavBarItem">
              <img
                alt=""
                src={iconsBotonNavs.busquedaDeTrabajo.src}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
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
              <p>Secretaria</p>
            </div>
          </Navbar.Brand>

        </Container>
      </Navbar>
    </>
  );
}
