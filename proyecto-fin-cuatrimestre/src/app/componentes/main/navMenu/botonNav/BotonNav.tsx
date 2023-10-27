"use client";
import React from "react";
import "./BotonNav.css";

export const BotonNav = (props: any) => {
  const { imagenSrc, linkTo, altText } = props;
  const navegarALinkTo = () => {
    window.location.href = linkTo;
  };
  return (
    <>
      <div>
        <button className="botonNav" onClick={() => navegarALinkTo()}>
          <img src={imagenSrc} alt={altText} />
        </button>
      </div>
    </>
  );
};
