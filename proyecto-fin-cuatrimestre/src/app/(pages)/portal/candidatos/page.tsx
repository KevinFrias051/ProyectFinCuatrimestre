"use client";
import { useEffect, useState } from "react";
import { CardCandidato } from "../../../componentes/cardCandidato/cardCandidato";
import "../portal.css";
import { Candidato, CandidatoFiltro } from "@/app/model/Candidato";
import { GetCandidatosFromAPI } from "@/app/services/Data";
// import { Buscador } from "../../../componentes/buscador/Buscador";
import { Filtro } from "../../../componentes/filtros/FiltroCandidatos";

//llama a la funcion que trae los candidatos del api y los carga en pantalla
export default function Candidatos() {
  const [Candidato, setCandidatos] = useState<Candidato[]>([]);
  const [CandidatoAux, setCandidatosAux] = useState<Candidato[]>([]);
  /* const [search, setSearch] = useState(''); */
  const cargarCandidato = async () => {
    try {
      const rtaCandidato = await GetCandidatosFromAPI();
      const listaCandidatos: Candidato[] = rtaCandidato.map((cand: any) => {
        return {
          id: cand.id,
          name: cand.name,
          edad: cand.years,
          disponibilidad: cand.disponibilidad,
          movilidad: cand.movilidad,
          avatar: cand.avatar,
          skills: cand.skills,
        };
      });
      setCandidatosAux(listaCandidatos);
      setCandidatos(listaCandidatos);
    } catch (error: any) {
      alert(error.message);
    }
  };
  //filtro de candidatos
  const filtrarCandidatos = (filtroCandidatos: CandidatoFiltro) => {
    const result = CandidatoAux.filter((cand) => {

      const disponibilidadCheck =
        filtroCandidatos.disponibilidad !== undefined ? cand.disponibilidad === filtroCandidatos.disponibilidad : true;

      const movilidadCheck =
        filtroCandidatos.movilidad !== undefined ? cand.movilidad === filtroCandidatos.movilidad : true;

      const edadCheck =
        filtroCandidatos.edad !== undefined && filtroCandidatos.edad.length === 2 ? cand.edad >= filtroCandidatos.edad[0] && cand.edad <= filtroCandidatos.edad[1]
          : true;
      return disponibilidadCheck && movilidadCheck && edadCheck;
    });

    setCandidatos(result);
    /* console.log("Soy resultado", result); */
  };

  // Efecto de la primera renderizacion que muestra todos los canditatos del arreglo generado por la funcion cargar candidatos
  // utiliza el Get candidatos Api que se genera en Services.

  useEffect(() => {
    cargarCandidato();
  }, []);

  return (
    <>
      <div className="divContenedorMain">
        <div className="divFiltro">
          {/* <Buscador setSearch={setSearch} /> */}
          <Filtro filtrarCandidatos={filtrarCandidatos}
            cargarCandidato={cargarCandidato}
          />
        </div>
        <div className="divContenedorCard">
          {Candidato.map((cand: Candidato) => (
            <CardCandidato
              key={cand.id}
              srcImg={cand.avatar}
              cardName={cand.name}
              cardEdad={cand.edad}
              cardMovilidad={cand.movilidad}
              cardDisponibilidad={cand.disponibilidad}
              cardSkills={cand.skills}
            />
          ))}
        </div>
      </div>
    </>
  );
}
