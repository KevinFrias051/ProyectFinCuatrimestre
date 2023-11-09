"use client"
import { CardPersona } from "../../.././componentes/card/CardPersona";
import { useRouter } from 'next/navigation';

export default function Empleos() {
    const router = useRouter();

    return (
        <>
            <div className="cardsContenedores">
                <p>Cards Empleos</p>
                <CardPersona />
                <CardPersona />
                <CardPersona />
                <CardPersona />
            </div>
        </>
    );
}