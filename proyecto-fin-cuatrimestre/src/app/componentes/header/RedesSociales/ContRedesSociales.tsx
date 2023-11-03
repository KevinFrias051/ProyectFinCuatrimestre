import React from "react";
import { BotonRedesHeader } from "./Botones/BotonesHeader";
import "./ContRedesSociales.css";
import Facebook from "../../../../../public/Facebook.png";

export const ContRedesSociales = () => {
  return (
    <>
      <div>
        <nav className="ContRedesSociales">
          <BotonRedesHeader
            imageSrc = {Facebook.src}
            linkTo="https://www.facebook.com/municipiodeolavarria"
            altText="Facebook"
          />
          <BotonRedesHeader
            imageSrc="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
            linkTo="https://www.instagram.com/muniolav/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=="
            altText="Instagram"
          />
          <BotonRedesHeader
            imageSrc="https://upload.wikimedia.org/wikipedia/commons/6/61/Logo_X.png"
            linkTo="https://twitter.com/MuniOlav"
            altText="X"
          />
          <BotonRedesHeader
            imageSrc="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png"
            linkTo="https://www.youtube.com/@CiudadOlavarria"
            altText="Youtube"
          />
        </nav>
      </div>
    </>
  );
};
