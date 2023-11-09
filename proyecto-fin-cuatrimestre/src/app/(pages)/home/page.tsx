"use client"
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "../.././componentes/header/Header";
import { Main } from "../.././componentes/main/Main";
import { Footer } from "../.././componentes/footer/Footer";
import { CardPersona } from "../.././componentes/card/CardPersona";
import { Menu } from "../../../app/componentes/main/menu/Menu";
import { useRouter } from 'next/navigation';

export default function Home() {
    const router = useRouter();
  return (
    <>
      <Main />      
    </>
  );
}