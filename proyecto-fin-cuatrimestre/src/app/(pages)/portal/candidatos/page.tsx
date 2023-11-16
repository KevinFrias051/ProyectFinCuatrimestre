"use client"
import { CardEstilada } from "../../../componentes/cardCandidato/cardCandidato";
import "../portal.css";
import Candidato3 from "../../../../../public/FotosCandidatos/Candidato3.jpg"

export default function Candidatos() {

    return (
        <>
            <div className="divContenedorMain">
                <div className="divFiltro">
                    <p>ACA VA EL FILTRO</p>
                </div>
                <div className="divContenedorCard">
                    <CardEstilada
                        srcImg={Candidato3.src}
                        cardName='Kevin Frias'
                        cardPuesto='Proyect Manager'
                        cardLocalication= 'Olavarria'
                        cardSkills=''
                    />
                </div>
            </div>
        </>
    );
}
