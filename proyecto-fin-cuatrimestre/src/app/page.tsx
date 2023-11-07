import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./componentes/header/Header";
import { Main } from "./componentes/main/Main";
import "../app/componentes/main/Main.css";
import { Footer } from "./componentes/footer/Footer";
import { CardPersona } from "./componentes/card/CardPersona";
import { Menu } from "../app/componentes/main/menu/Menu";

export default function Home() {
  return (
    <>
      {/* Header */}
      <Header />
      {/* Main */}
      <Main />
      {/* Footer */}
      <Footer />
      {/* ------------------------------------------------ */}
      {/* Tarea para las Cards */}
      {/* <div className="divContMenuCarrousel">
        <div className="divContenedorMenu">
          <Menu />
        </div>

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
      </div> */}
      {/* ------------------------------------------------ */}
    </>
  );
}
