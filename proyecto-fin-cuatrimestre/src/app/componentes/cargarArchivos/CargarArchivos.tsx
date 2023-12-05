"use client";
import React from "react";

//Componente cargar archivos
function CargarArchivo() {
  const handleFileUpload = (e) => {
    //Constante para almacenar y manejar los archivos cargados
    const files = e.target.files;
  };
  return <input type="file" multiple onChange={handleFileUpload} />;
}
export default CargarArchivo;
