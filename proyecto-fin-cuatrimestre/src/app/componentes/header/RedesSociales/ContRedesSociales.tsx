import React from "react";
import { BotonRedesHeader } from "./Botones/BotonesHeader";
import "./ContRedesSociales.css";
import { iconRedes } from "../../../../../public/redes/Redes.js";


export const ContRedesSociales = () => {
  return (
    <>
      
        <nav className="ContRedesSociales">
          <BotonRedesHeader
            imageSrc = {iconRedes.Facebook.src}
            linkTo="https://www.facebook.com/municipiodeolavarria"
            altText="Facebook"
          />
          <BotonRedesHeader
            imageSrc= {iconRedes.Instagram.src}
            linkTo="https://www.instagram.com/muniolav/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=="
            altText="Instagram"
          />
          <BotonRedesHeader
            imageSrc={iconRedes.X.src}
            linkTo="https://twitter.com/MuniOlav"
            altText="X"
          />
          <BotonRedesHeader
            imageSrc={iconRedes.Youtube.src}
            linkTo="https://www.youtube.com/@CiudadOlavarria"
            altText="Youtube"
          />
        </nav>
      
    </>
  );
};
