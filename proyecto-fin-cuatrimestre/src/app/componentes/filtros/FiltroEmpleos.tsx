"use client"

import { useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import './Filtro.css';

export function FiltroEmpleos({ filtrarEmpleos, cargarEmpleos }: any) {

  const [cargaHoraria, setCargaHoraria] = useState<boolean>();
  const [selected, setSelected] = useState("");
  const reseteoSelector =()=>{
    setSelected('Seleccione')
  }

  const handleDisponibilidadChange = (e) => {
    e.target.value == "Full-Time" ? setCargaHoraria(true) : setCargaHoraria(false);
  };

  return (
    <div className='divFiltroEmpleos'>
      <InputLabel id="Disponibilidad">Carga Horaria</InputLabel>
      <Select className='selectorFiltro' value={cargaHoraria} defaultValue={"Seleccione"} onChange={handleDisponibilidadChange}>
      <MenuItem className='selectorFiltro' value="Seleccione">Seleccione</MenuItem>
        <MenuItem className='selectorFiltro' value="Full-Time">Full-Time</MenuItem>
        <MenuItem className='selectorFiltro' value="Part-Time">Part-Time</MenuItem>
      </Select>
      <button className='btn' onClick={() => filtrarEmpleos({ cargaHoraria, puesto: null })}>Buscar</button>
      <button className="btn" onClick={cargarEmpleos} >Reset</button>
    </div>

  );
}