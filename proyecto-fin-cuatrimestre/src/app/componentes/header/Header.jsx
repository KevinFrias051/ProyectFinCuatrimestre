import React from 'react';
import "./Header.css";
import { ContRedesSociales } from "./RedesSociales/ContRedesSociales";

export const Header = () => {
  return (
    <>
      <div className="cabecera">
        <div className='DivNombreYRedes'>
          <h1 className='Nombre'>Municipio de Olavarria</h1>
          <ContRedesSociales className='Redes'/>
        </div>
        <div className='DivLogo'>
          <img className="LogoMunicipio" src="https://www.olavarria.gov.ar/wp-content/uploads/2020/09/LOGO-PARA-WEB.png" alt="LogoMunicipio"  />
        </div>
      </div>
    </>
  )
}
