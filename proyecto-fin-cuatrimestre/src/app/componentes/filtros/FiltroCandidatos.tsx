"use client"

import { useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Slider from '@mui/material/Slider';
import InputLabel from '@mui/material/InputLabel';
import './Filtro.css'

export function Filtro({filtrarCandidatos} : any) {
 
 const [disponibilidad, setDisponibilidad] = useState(false);
 const [movilidad, setMovilidad] = useState(false);
 const [edad, setEdad] = useState([18, 65]);

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
   <div className='divFiltroCandidatos'>
    <InputLabel id="Disponibilidad">Disponibilidad</InputLabel>
     <Select value={disponibilidad} onChange={handleDisponibilidadChange}>
       <MenuItem value="Full-time">Full-time</MenuItem>
       <MenuItem value="Part-Time">Part-Time</MenuItem>
     </Select>
     <InputLabel id="Movilidad">Movilidad</InputLabel>
     <Select label="Movilidad" onChange={handleMovilidadChange}>
       <MenuItem value="Si">Si</MenuItem>
       <MenuItem value="No">No</MenuItem>
     </Select>
     <InputLabel id="RangoEdad">Rango de Edad (18-65)</InputLabel>
     <Slider value={edad} onChange={handleEdadChange} min={18} max={65} valueLabelDisplay="auto" />
     <button className='btn' onClick = {()=>filtrarCandidatos({name:null,edad, disponibilidad,movilidad})}>Buscar</button>
   </div>
 );
}