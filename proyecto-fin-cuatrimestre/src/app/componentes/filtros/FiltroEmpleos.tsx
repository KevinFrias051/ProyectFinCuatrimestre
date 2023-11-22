"use client"

import { useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

export function FiltroEmpleos({filtrarEmpleos} : any) {
 
 const [cargaHoraria, setCargaHoraria] = useState <boolean>();
 
 const handleDisponibilidadChange = (e) => {
  e.target.value == "Full-Time" ? setCargaHoraria(true) : setCargaHoraria(false);
 };

 return (
   <div className='divFiltroEmpleos'>
    <InputLabel id="Disponibilidad">Carga Horaria</InputLabel>
     <Select value={cargaHoraria} onChange={handleDisponibilidadChange}>
       <MenuItem value="Full-Time">Full-time</MenuItem>
       <MenuItem value="Part-Time">Part-Time</MenuItem>
     </Select>
     <button className='btn' onClick = {()=>filtrarEmpleos({cargaHoraria,puesto:null})}>Buscar</button>
   </div>
 );
}