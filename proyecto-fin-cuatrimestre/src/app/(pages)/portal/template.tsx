import type { Metadata } from 'next';
import { BtnEmpYCand } from '@/app/componentes/btnEmpYCand/BtnEmpYCand';
import { BtnHome } from '@/app/componentes/btnHome/BtnHome';

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
    <div className='divBtn'>
    <BtnHome/>
    <BtnEmpYCand/>
    </div>
      <main>
        {children}
      </main>
    </>
  );
}