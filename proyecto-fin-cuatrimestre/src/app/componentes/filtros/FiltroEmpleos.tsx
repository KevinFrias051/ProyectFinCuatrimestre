"use client"
import React, { useState, useRef } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import './Filtro.css';

export function FiltroEmpleos({ filtrarEmpleos, cargarEmpleos }) {
  const [cargaHoraria, setCargaHoraria] = useState(null);
  const [selected, setSelected] = useState('Seleccione');
  const selectRef = useRef(null);

  const handleDisponibilidadChange = (e) => {
    setSelected(e.target.value);
    e.target.value === 'Full-Time' ? setCargaHoraria(true) : setCargaHoraria(false);
  };

  const handleReset = () => {
    setSelected('Seleccione');
    setCargaHoraria(null);
    selectRef.current.value = 'Seleccione'; // Seteando el valor del select al primer elemento
    cargarEmpleos();
  };

  return (
    <div className='divFiltroEmpleos'>
      <InputLabel id='Disponibilidad'>Carga Horaria</InputLabel>
      <Select
        className='selectorFiltro'
        value={selected}
        onChange={handleDisponibilidadChange}
        inputProps={{ ref: selectRef }}
      >
        <MenuItem className='selectorFiltro' value='Seleccione'>
          Seleccione
        </MenuItem>
        <MenuItem className='selectorFiltro' value='Full-Time'>
          Full-Time
        </MenuItem>
        <MenuItem className='selectorFiltro' value='Part-Time'>
          Part-Time
        </MenuItem>
      </Select>
      <button className='btn' onClick={() => filtrarEmpleos({ cargaHoraria, puesto: null })}>
        Buscar
      </button>
      <button type='reset' className='btn' onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

/* import { useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

export function FiltroEmpleos({ filtrarEmpleos, cargarEmpleos }: any) {

  const [cargaHoraria, setCargaHoraria] = useState(null);
  const [disponibilidad, setDisponibilidad] = useState('Seleccione');

  const resetDisponibilidadChange = (e) => {
    setDisponibilidad(e.target.value);
  };

  const handleDisponibilidadChange = (e) => {
    e.target.value == "Full-Time" ? setCargaHoraria(true) : setCargaHoraria(false);
  };

  const reset = () => {
    setDisponibilidad('Seleccione'); // Restablecer el select de disponibilidad a 'Seleccione'
    cargarEmpleos(); // Llamar a la función cargarCandidato al hacer clic en "Reset"
  };

  return (
    <div className='divFiltroEmpleos'>
      <InputLabel id="Disponibilidad">Carga Horaria</InputLabel>
      <Select className='selectorFiltro' value={disponibilidad} onChange={handleDisponibilidadChange}>
        <MenuItem  className='selectorFiltro' value='Seleccione'>Seleccione</MenuItem>
        <MenuItem  className='selectorFiltro' value='Full-Time'>Full-Time</MenuItem>
        <MenuItem  className='selectorFiltro' value='Part-Time'>Part-Time</MenuItem>
      </Select>
      <button className='btn' onClick={() => filtrarEmpleos({ cargaHoraria, puesto: null })}>Buscar</button>
      <button className="btn" onClick={reset} >Reset</button>
    </div>

  );
} */