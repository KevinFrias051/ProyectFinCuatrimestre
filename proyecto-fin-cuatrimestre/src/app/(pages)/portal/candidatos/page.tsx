"use client";
import { useEffect, useState } from "react";
import { CardCandidato } from "../../../componentes/cardCandidato/CardCandidato";
import "../portal.css";
import { Candidato, CandidatoFiltro } from "@/app/model/Candidato";
import { GetCandidatosFromAPI } from "@/app/services/data";
import { Buscador } from "../../../componentes/buscador/Buscador";
import { Filtro } from "../../../componentes/filtros/FiltroCandidatos";


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
                }
            });
            console.log(rtaCandidato);
            setCandidatosAux(listaCandidatos)
            setCandidatos(listaCandidatos);
        } catch (error: any) {
            alert(error.message)
        }
    }

    const filtrarCandidatos = (filtroCandidatos: CandidatoFiltro) => {
        console.log(filtroCandidatos);
        const result = CandidatoAux.filter(cand =>
            /* cand.name.includes(search) || */
            cand.disponibilidad === filtroCandidatos.disponibilidad ||
            cand.movilidad === filtroCandidatos.movilidad ||
            cand.edad >= filtroCandidatos.edad[0] && cand.edad <= filtroCandidatos.edad[1]

        );
        setCandidatos(result);
        console.log(result);
    }

    useEffect(() => {
        cargarCandidato();
    }, []);

    return (
        <>
            <div className="divContenedorMain">
                <div className="divFiltro">
                    {/* <Buscador setSearch={setSearch} /> */}
                    <Filtro filtrarCandidatos={filtrarCandidatos} />
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
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

