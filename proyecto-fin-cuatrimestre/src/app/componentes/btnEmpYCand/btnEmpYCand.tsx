"use client";
import { useRouter, usePathname } from "next/navigation";

//Ruteo para navegar a Empleos y Candidatos
export const BtnEmpYCand = () => {
  const router = useRouter();
  const pathname = usePathname();

  const navegarAEmpleos = () => {
    if (pathname !== "/portal/empleos") {
      router.push("/portal/empleos");
    }
  };

  const navegarACandidatos = () => {
    if (pathname !== "/portal/candidatos") {
      router.push("/portal/candidatos");
    }
  };

  //Botones para la navegacion desde el Home hasta las paginas de Empleos y Candidatos
  return (
    <div className="contBtnEmpYCand ">
      <button className="btn" onClick={() => navegarAEmpleos()}>
        Empleos
      </button>
      <button className="btn" onClick={() => navegarACandidatos()}>
        Candidatos
      </button>
    </div>
  );
};
