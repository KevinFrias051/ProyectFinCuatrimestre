"use client"

import { useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Slider from '@mui/material/Slider';

export function Filtro({filtrarCandidatos} : any) {
 
 const [disponibilidad, setDisponibilidad] = useState(false);
 const [movilidad, setMovilidad] = useState(false);
 const [edad, setEdad] = useState([18, 60]);

 const handleDisponibilidadChange = (e) => {
   setDisponibilidad(e.target.value);
 };

 const handleMovilidadChange = (e) => {
   setMovilidad(e.target.value);
 };

 const handleEdadChange = (e) => {
   setEdad(e.target.value);
   
 };

 

 return (
   <div>
     <Select value={disponibilidad} onChange={handleDisponibilidadChange}>
       <MenuItem value="Full-time">Full-time</MenuItem>
       <MenuItem value="Part-Time">Part-Time</MenuItem>
     </Select>
     <Select value={movilidad} onChange={handleMovilidadChange}>
       <MenuItem value="Si">Si</MenuItem>
       <MenuItem value="No">No</MenuItem>
     </Select>
     <Slider value={edad} onChange={handleEdadChange} min={18} max={60} valueLabelDisplay="auto" />
     <button   onClick = {()=>filtrarCandidatos({name:null,edad, disponibilidad,movilidad})}>Buscar</button>

   </div>
 );
}