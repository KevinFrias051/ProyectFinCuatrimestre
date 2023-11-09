"use client";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Header } from "../../componentes/header/Header";
import { Footer } from '@/app/componentes/footer/Footer';

export default function HomeTemplate({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}