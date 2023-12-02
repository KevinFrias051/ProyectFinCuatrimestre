import { BtnEmpYCand } from '@/app/componentes/btnEmpYCand/BtnEmpYCand';
import { BtnHome } from '@/app/componentes/btnHome/BtnHome';

// Template permite que  Boton Home y Empleos y Candidatos este presente en todas las paginas del portal.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className='divBtn'>
        <BtnHome />
        <BtnEmpYCand />
      </div>

      <main>
        {children}
      </main>
    </>
  );
}