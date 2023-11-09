"use client";
import { CardEmpleo } from "../../../componentes/card/CardEmpleo";
import { useRouter } from "next/navigation";

export default function Empleos() {
  const router = useRouter();

  return (
    <>
      <div className="cardsContenedores">
        <p>Cards Empleos</p>
        <CardEmpleo />
        <CardEmpleo />
        <CardEmpleo />
        <CardEmpleo />
      </div>
    </>
  );
}
