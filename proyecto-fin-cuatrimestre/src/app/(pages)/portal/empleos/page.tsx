"use client";
import { CardEmpleo } from "../../../componentes/card/CardEmpleo";
import "../portal.css";


export default function Empleos() {
  return (
    <>
      <div className="divContenedorMain">
        <div className="divFiltro">
          <p>ACA VA EL FILTRO</p>
        </div>
        <div className="divContenedorCard">
          <CardEmpleo />
          <CardEmpleo />
          <CardEmpleo />
          <CardEmpleo />
        {/*  poner mind width para que cuando sean muchas no se achiquen
         <CardEmpleo />
          <CardEmpleo />
          <CardEmpleo />
          <CardEmpleo />
          <CardEmpleo />
          <CardEmpleo />
          <CardEmpleo />
          <CardEmpleo /> */}
        </div>
      </div>
    </>
  );
}
