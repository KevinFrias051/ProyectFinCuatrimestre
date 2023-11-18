"use client";
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
      <div className="contBtnHome">
        <button className="btn" onClick={() => navegarAHome()}>
          Home
        </button>
      </div>
    </>
  );
};