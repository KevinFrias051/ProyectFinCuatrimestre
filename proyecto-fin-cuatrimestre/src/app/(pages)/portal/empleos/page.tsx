"use client";
import { CardEmpleo } from "../../../componentes/card/CardEmpleo";
import "../portal.css";


export default function Empleos() {
  return (
    <>
      <div className="divContCard">
        <CardEmpleo />
        <CardEmpleo />
        <CardEmpleo />
        <CardEmpleo />
      </div>
    </>
  );
}
