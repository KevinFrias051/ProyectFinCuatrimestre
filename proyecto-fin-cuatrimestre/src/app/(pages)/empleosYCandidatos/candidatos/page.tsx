"use client"
import { CardEstilada } from "../../.././componentes/cardEstilada/cardEstilada";
import { useRouter } from 'next/navigation';
import './candidatos.css'

import Candidato1 from "../../../../../public/FotosCandidatos/Candidato1.jpg"
import Candidato2 from "../../../../../public/FotosCandidatos/Candidato2.jpg"
import Candidato3 from "../../../../../public/FotosCandidatos/Candidato3.jpg"

export default function Candidatos() {
    const router = useRouter();

    return (
        <>
            <div className="divContCardEst">
                <p>Cards Candidatos</p>
                <CardEstilada
                    srcImg = {Candidato1.src}
                    cardName = 'Kevin Frias'
                    cardDesc = 'Fotografo'
                />
                <CardEstilada
                    srcImg = {Candidato2.src}
                    cardName = 'Kevin Frias'
                    cardDesc = 'Compositor de el biza'
                />
                <CardEstilada
                    srcImg = {Candidato3.src}
                    cardName = 'Kevin Frias'
                    cardDesc = 'Proyect Manager'
                />
            </div>
        </>
    );
}
