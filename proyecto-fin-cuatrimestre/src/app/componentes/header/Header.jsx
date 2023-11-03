import React from 'react';
import "./Header.css";
import { ContRedesSociales } from "./RedesSociales/ContRedesSociales";
import Logo1 from "../../../../public/Logo1.png"
import Logo2 from "../../../../public/Logo2.png"

export const Header = () => {
  return (
    <>
      <div className="cabecera">
        <div className='DivNombreYRedes'>
          <img className="LogoMunicipio2" src={Logo2.src} alt="LogoMunicipio2" />
          <ContRedesSociales className='Redes' />
        </div>
        <h1>Bienvenidos a Olavarria</h1>
        <div className='DivLogo'>
          <img className="LogoMunicipio1" src={Logo1.src} alt="LogoMunicipio1" />
        </div>
      </div>
    </>
  )
}
