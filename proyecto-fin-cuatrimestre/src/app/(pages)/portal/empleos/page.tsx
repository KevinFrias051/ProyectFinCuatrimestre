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

  //llama a la funcion que trae los empleos del api y los carga en pantalla
  const cargarEmpleos = async () => {
    try {
      const rtaEmpleos = await GetEmpleosFromAPI();
      const listaEmpleos: Empleo[] = rtaEmpleos.map((emp: any) => {
        return {
          id: emp.id,
          descripcion: emp.descripcion,
          empresa: emp.empresa,
          avatar: emp.avatar,
          requisitos: emp.requisitos,
          cargaHoraria: emp.cargaHoraria,
        };
      });
      /* console.log(rtaEmpleos); */
      setEmpleosAux(listaEmpleos);
      setEmpleo(listaEmpleos);
    } catch (error: any) {
      alert(error.message);
    }
  };
  
  //Filtro de empleos
  const filtrarEmpleos = (filtroEmpleos: EmpleoFiltro) => {
    const result = EmpleosAux.filter((emp) => {
      const cargaHorariaCheck = 
      filtroEmpleos.cargaHoraria !== undefined
        ? emp.cargaHoraria === filtroEmpleos.cargaHoraria
        : true;
        return cargaHorariaCheck
    });
    
    setEmpleo(result);
    /* console.log("Soy resultado", result); */
  };

  useEffect(() => {
    cargarEmpleos();
  }, []);

  return (
    <>
      <div className="divContenedorMain">
        <div className="divFiltro">
          <FiltroEmpleos filtrarEmpleos={filtrarEmpleos} 
          cargarEmpleos={cargarEmpleos}
          />
        </div>
        <div className="divContenedorCard">
          {Empleo.map((emp: Empleo) => (
            <CardEmpleo
              key={emp.id}
              srcImg={emp.avatar}
              cardName={emp.empresa}
              cardDescripcion={emp.descripcion}
              cardHorario={emp.cargaHoraria}
              cardRequisitos={emp.requisitos}
            />
          ))}
        </div>
      </div>
    </>
  );
}
