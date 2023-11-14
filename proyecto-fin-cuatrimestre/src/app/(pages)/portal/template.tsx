import type { Metadata } from 'next';
import { BtnEmpYCand } from '@/app/componentes/btnEmpYCand/btnEmpYCand';

export const metadata: Metadata = {
  title: 'Portal de Empleos de Olavarria',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <BtnEmpYCand/>
      <main>
        {children}
      </main>
    </>
  );
}