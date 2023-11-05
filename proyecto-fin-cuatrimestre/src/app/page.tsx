import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from "./componentes/header/Header"
import { Main } from "./componentes/main/Main"
import { Footer } from "./componentes/footer/Footer"


export default function Home() {
  return (
    <>
      {/* Header */}
      <Header />
      {/* Main */}
      <Main />
      {/* Footer */}
      <Footer />
    </>

  )
}
