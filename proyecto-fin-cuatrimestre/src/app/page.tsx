"use client";
import { useEffect } from "react";
import { useRouter } from 'next/navigation';

// Page base del proyecto que rutea al grupo de ruteo (pages)
export default function Home() {
  // Rotueo a Home
  const router = useRouter();
  useEffect(() => {
    router.push("/home");
  }, []);

  return (
    <></>
  );
}
