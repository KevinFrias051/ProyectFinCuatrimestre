"use client";
import { useEffect, useState } from "react";
import { CardEmpleo } from "../../../componentes/card/CardEmpleo";
import "../portal.css";
import Empleos from "@/app/model/Empleos";
import { GetEmpleosFromAPI } from "@/app/services/data";


export default function Empleos() {

  const [Empleo, setEmpleo] = useState<Empleos[]>([]);

  const cargarEmpleos = async () => {
    try {
      const rtaEmpleos = await GetEmpleosFromAPI();
      const listaEmpleos: Empleos[] = rtaEmpleos.Empleos.map((emp: any) => {
        return {
          id: emp.id,
          descripcion: emp.descripcion,
          puesto: emp.puesto,
          empresa: emp.empresa,
          avatar:emp.avatar,
        }
      });
      setEmpleo(listaEmpleos);
    } catch (error: any) {
      alert(error.message)
    }
  }






  useEffect(() => {

  })

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
