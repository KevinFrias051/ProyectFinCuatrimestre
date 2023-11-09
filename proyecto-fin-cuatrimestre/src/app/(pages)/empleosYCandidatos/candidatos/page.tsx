"use client"
import { CardPersona } from "../../.././componentes/card/CardPersona";
import { useRouter } from 'next/navigation';

export default function Candidatos() {
    const router = useRouter();

    return (
        <>
            <div className="cardsContenedores">
                <CardPersona />
                <CardPersona />
                <CardPersona />
                <CardPersona />
                <CardPersona />
                <CardPersona />
                <CardPersona />
                <CardPersona />
            </div>
        </>
    );
}
