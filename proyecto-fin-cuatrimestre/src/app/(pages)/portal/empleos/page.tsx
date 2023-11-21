"use client";
import { useEffect, useState } from "react";
import "../portal.css";
import { Empleo, EmpleoFiltro } from "@/app/model/Empleo";
import { GetEmpleosFromAPI } from "@/app/services/data";
import { FiltroEmpleos } from "@/app/componentes/filtros/FiltroEmpleos";
import { CardEmpleo } from "@/app/componentes/cardEmpleo/CardEmpleo";

export default function Empleos() {

  const [Empleo, setEmpleo] = useState<Empleo[]>([]);
  const [EmpleosAux, setEmpleosAux] = useState<Empleo[]>([]);

  const cargarEmpleos = async () => {
    try {
      const rtaEmpleos = await GetEmpleosFromAPI();
      const listaEmpleos: Empleo[] = rtaEmpleos.Empleos.map((emp: any) => {
        return {
          id: emp.id,
          descripcion: emp.descripcion,
          puesto: emp.puesto,
          empresa: emp.empresa,
          avatar: emp.avatar,
          requisitos: emp.requisitos,
          cargaHoraria: emp.cargaHoraria,
        }
      });
      console.log(rtaEmpleos)
      setEmpleosAux(listaEmpleos)
      setEmpleo(listaEmpleos);
    } catch (error: any) {
      alert(error.message)
    }
  }


  const filtrarEmpleos = (filtroEmpleos: EmpleoFiltro) => {
    const result = EmpleosAux.filter(emp =>
      emp.puesto === filtroEmpleos.puesto
    );
    setEmpleo(result);
  }



  useEffect(() => {
    cargarEmpleos();
  }, [])

  return (
    <>
      <div className="divContenedorMain">
        <div className="divFiltro">
          <FiltroEmpleos filtrarEmpleos={filtrarEmpleos}/>
        </div>
        <div className="divContenedorCard">
          {Empleo.map((emp: Empleo) => (
            <CardEmpleo
              key={emp.id}
              srcImg={emp.avatar}
              cardName={emp.empresa}
              cardPuesto={emp.puesto}
              cardDescripcion={emp.descripcion}
              cardHorario={emp.cargaHoraria}
              cardRequisitos = {emp.requisitos}
            />
          ))}
        </div>
      </div>
    </>
  );
}
