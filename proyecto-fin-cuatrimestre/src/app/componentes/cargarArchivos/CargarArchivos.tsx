import React from 'react';

function CargarArchivo() {
 const handleFileUpload = (e) => {
   const files = e.target.files;
   // Aquí puedes manejar los archivos cargados
 };

 return (
   <input type="file" multiple onChange={handleFileUpload} />
 );
}

export default CargarArchivo;
