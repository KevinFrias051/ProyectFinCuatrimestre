"use client";
import { useRouter, useSearchParams } from 'next/navigation';
import { Header } from "../../componentes/header/Header";
import { Footer } from '@/app/componentes/footer/Footer';

export default function EmpleosYCandidatosTemplate({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter();
  const navegarAEmpleos = () => {
    if (router.pathname !== '/empleosYCandidatos/empleos') {
      router.push('empleosYCandidatos/empleos');
    }
  }
  
  const navegarACandidatos = () => {
    if (router.pathname !== 'empleosYCandidatos/candidatos') {
      router.push('empleosYCandidatos/candidatos');
    }
  }

  return (
    <>
      <Header />
      <main>
      <div className='contBtnEmpYCand '>
        <button className='btn btn-info'
          onClick={() => navegarAEmpleos()}>
          Empleos
        </button>
        <button className='btn btn-info'
          onClick={() => navegarACandidatos()}>
          Candidatos
        </button>
      </div>
        {children}
      </main>
      <Footer />
    </>
  );
}