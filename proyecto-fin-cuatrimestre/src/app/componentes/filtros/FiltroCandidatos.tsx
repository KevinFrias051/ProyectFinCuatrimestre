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
      <Select className='selectorFiltro' value={disponibilidad} defaultValue={"Seleccione"} onChange={handleDisponibilidadChange}>
        <MenuItem className='selectorFiltro' value="Seleccione">Seleccione</MenuItem>
        <MenuItem className='selectorFiltro' value="Full-Time">Full-Time</MenuItem>
        <MenuItem className='selectorFiltro' value="Part-Time">Part-Time</MenuItem>
      </Select>
      <InputLabel id="Movilidad">Movilidad</InputLabel>
      <Select className='selectorFiltro' label="Movilidad" defaultValue={"Seleccione"} onChange={handleMovilidadChange}>
        <MenuItem className='selectorFiltro' value="Seleccione">Seleccione</MenuItem>
        <MenuItem className='selectorFiltro' value="Si">Si</MenuItem>
        <MenuItem className='selectorFiltro' value="No">No</MenuItem>
      </Select>
      <InputLabel id="RangoEdad">Edad (18-65)</InputLabel>
      <Slider className='sliderEdad' value={edad} onChange={handleEdadChange} min={18} max={65} valueLabelDisplay="auto" />
      <button className='btn' onClick={() => filtrarCandidatos({ name: null, edad, disponibilidad, movilidad })}>Buscar</button>
      <button className="btn" onClick={cargarCandidato} >Reset</button>
    </div>
  );
}