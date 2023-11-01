import React from 'react';
import "./Header.css";
import { ContRedesSociales } from "./RedesSociales/ContRedesSociales";

export const Header = () => {
  return (
    <>
      <div className="cabecera">
        <div>
          <h1>Municipio</h1>
          <ContRedesSociales />
        </div>
        <div className="LogoMunicipio">
          <img  src="" alt="Logo" />
        </div>
      </div>
    </>
  )
}
