"use client";
import React from "react";
import "./RedesHeader.css";

export const BotonRedesHeader = (props: any) => {
  const { imageSrc, linkTo, altText } = props;
  const navegarALinkTo = () => {
    window.location.href = linkTo;
  };
  return (
    <>
      <div>
        <button className="BotonesHeader" onClick={() => navegarALinkTo()}>
          <img className= "img" src={imageSrc} alt={altText} />
        </button>
      </div>
    </>
  );
};