"use client"
import { useEffect, useState } from "react";
import { CardEstilada } from "../../../componentes/cardCandidato/cardCandidato";
import "../portal.css";
import Candidatos from "@/app/model/Candidatos";
import { GetCandidatosFromAPI } from "@/app/services/data";


export default function Candidatos() {

    const [Candidato, setCandidatos] = useState<Candidatos[]>([]);


    const cargarCandidato = async () => {
        try {
            const rtaCandidato = await GetCandidatosFromAPI();
            const listaCandidatos: Candidatos[] = rtaCandidato.map((cand: any) => {
                return {
                    id: cand.id,
                    name: cand.name,
                    years: cand.years,
                    disponibilidad: cand.disponibilidad,
                    movilidad: cand.movilidad,
                    avatar: cand.avatar,
                }
            });
            setCandidatos(listaCandidatos);
        } catch (error: any) {
            alert(error.message)
        }
    }

    useEffect(() => {
        cargarCandidato();
      }, []);

    return (
        <>
            <div className="divContenedorMain">
                <div className="divFiltro">
                    <p>ACA VA EL FILTRO</p>
                </div>
                <div className="divContenedorCard">
                    {Candidato.map((cand:Candidatos) => (
                        <CardEstilada
                            srcImg={cand.avatar}
                            cardName={cand.name}
                            cardYears={cand.years}
                            cardMovilidad={cand.movilidad}
                            cardDisponibilidad = {cand.disponibilidad}
                            /* cardSkills={cand.disponibilidad} */
                        />
                    ))}
                </div>
            </div>
        </>
    );
}