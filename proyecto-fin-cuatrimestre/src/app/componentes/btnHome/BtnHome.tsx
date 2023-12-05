"use client";
import { useRouter, usePathname } from "next/navigation";

//Ruteo para navegar de Empleos y Candidatos a Home
export const BtnHome = () => {
  const router = useRouter();
  const pathname = usePathname();

  const navegarAHome = () => {
    if (pathname !== "/home") {
      router.push("/home");
    }
  };

  //Boton para navegar a Home
  return (
    <>
      <div className="contBtnHome">
        <button className="btn" onClick={() => navegarAHome()}>
          Home
        </button>
      </div>
    </>
  );
};
