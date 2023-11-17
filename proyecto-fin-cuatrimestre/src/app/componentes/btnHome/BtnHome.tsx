"use client";
import "../btnEmpYCand/btnEmpYCand.css";
import { useRouter, usePathname } from "next/navigation";

export const BtnHome = () => {
  const router = useRouter();
  const pathname = usePathname();

  const navegarAHome = () => {
    if (pathname !== "/home") {
      router.push("/home");
    }
  };

  return (
    <>
      <div className="contBtnHome"></div>
      <button className="btn btn-info" onClick={() => navegarAHome()}>
        Home
      </button>
    </>
  );
};