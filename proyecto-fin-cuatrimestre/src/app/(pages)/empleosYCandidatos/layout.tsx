"use client";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Header } from "../../componentes/header/Header";
import { Footer } from '@/app/componentes/footer/Footer';

export default function EmpleosYCandidatosTemplate({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <main>
        {children}
      </main>
    </>
  );
}