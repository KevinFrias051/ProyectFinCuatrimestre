"use client"
import { useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Slider from '@mui/material/Slider';
import InputLabel from '@mui/material/InputLabel';
import './Filtro.css'

export function Filtro({ filtrarCandidatos, cargarCandidato }: any) {

  const [disponibilidad, setDisponibilidad] = useState<boolean>();
  const [movilidad, setMovilidad] = useState<boolean>();
  const [edad, setEdad] = useState([18, 65]);

  const handleDisponibilidadChange = (e) => {
    e.target.value == "Full-Time" ? setDisponibilidad(true) : setDisponibilidad(false);
  };

  const handleMovilidadChange = (e) => {
    e.target.value == "Si" ? setMovilidad(true) : setMovilidad(false);
  };

  const handleEdadChange = (e) => {
    setEdad(e.target.value);

  };



  return (
    <div className='divFiltroCandidatos'>
      <InputLabel id="Disponibilidad">Disponibilidad</InputLabel>
      <Select value={disponibilidad} onChange={handleDisponibilidadChange}>
        <MenuItem value="Full-Time">Full-time</MenuItem>
        <MenuItem value="Part-Time">Part-Time</MenuItem>
      </Select>
      <InputLabel id="Movilidad">Movilidad</InputLabel>
      <Select label="Movilidad" onChange={handleMovilidadChange}>
        <MenuItem value="Si">Si</MenuItem>
        <MenuItem value="No">No</MenuItem>
      </Select>
      <InputLabel id="RangoEdad">Rango de Edad (18-65)</InputLabel>
      <Slider value={edad} onChange={handleEdadChange} min={18} max={65} valueLabelDisplay="auto" />
      <button className='btn' onClick={() => filtrarCandidatos({ name: null, edad, disponibilidad, movilidad })}>Buscar</button>
      <div>
        <button className="btn" onClick={cargarCandidato} >Reset</button>
      </div>
    </div>
  );
}