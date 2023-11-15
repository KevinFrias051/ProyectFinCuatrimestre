"use client";
import React from "react";
import "./Header.css";
import { ContRedesSociales } from "./RedesSociales/ContRedesSociales";
import Logo3 from "../../../../public/Logo3.png";
import Logo2 from "../../../../public/Logo2.png";
import { useRouter, usePathname } from "next/navigation";

export const Header = () => {
  //Constantes para navegar (router, pathname)
  const router = useRouter();
  const pathname = usePathname();

  const navegarAHome = () => {
    if (pathname !== "/home") {
      router.push("/home");
    }
  };

  return (
    <>
      <div className="cabecera">
        <div className="DivNombreYRedes">
          <img
            className="LogoMunicipio2"
            onClick={() => navegarAHome()}
            src={Logo2.src}
            alt="LogoMunicipio2"
          />
          <ContRedesSociales className="Redes" />
        </div>
        <div className="divTitulo">
          <h1>Bienvenidos a Olavarria</h1>
        </div>
        <div className="DivLogo">
          <img
            className="LogoMunicipio1"
            src={Logo3.src}
            alt="LogoMunicipio1"
          />
        </div>
      </div>
    </>
  );
};
