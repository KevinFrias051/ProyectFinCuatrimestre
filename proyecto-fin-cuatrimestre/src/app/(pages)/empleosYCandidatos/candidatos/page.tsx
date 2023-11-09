"use client"
import { CardEstilada } from "../../.././componentes/cardEstilada/cardEstilada";
import { useRouter } from 'next/navigation';

export default function Candidatos() {
    const router = useRouter();

    return (
        <>
            <div className="divContCardEst">
                <p>Cards Candidatos</p>
                <CardEstilada />
                <CardEstilada />
            </div>
        </>
    );
}
