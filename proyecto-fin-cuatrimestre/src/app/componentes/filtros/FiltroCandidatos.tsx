import React, { useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Slider from '@mui/material/Slider';
import InputLabel from '@mui/material/InputLabel';
import './Filtro.css';

export function Filtro({ filtrarCandidatos, cargarCandidato }: any) {
  const [disponibilidad, setDisponibilidad] = useState<boolean | undefined>(undefined);
  const [movilidad, setMovilidad] = useState<boolean | undefined>(undefined);
  const [edad, setEdad] = useState([18, 65]);

  const handleDisponibilidadChange = (e) => {
    if (e.target.value === '') {
      setDisponibilidad(undefined);
    } else {
      e.target.value === 'Full-Time' ? setDisponibilidad(true) : setDisponibilidad(false);
    }
  };

  const handleMovilidadChange = (e) => {
    if (e.target.value === '') {
      setMovilidad(undefined);
    } else {
      e.target.value === 'Si' ? setMovilidad(true) : setMovilidad(false);
    }
  };

  const handleEdadChange = (e, newValue) => {
    setEdad(newValue);
  };

  const reset = () => {
    setDisponibilidad(undefined);
    setMovilidad(undefined);
    setEdad([18, 65]);
    cargarCandidato();
  };

  return (
    <div className='divFiltroCandidatos'>
      <InputLabel id="Disponibilidad">Disponibilidad</InputLabel>
      <Select
        className='selectorFiltro'
        value={disponibilidad === undefined ? 'Seleccione' : disponibilidad ? 'Full-Time' : 'Part-Time'}
        onChange={handleDisponibilidadChange}
      >
        <MenuItem className='selectorFiltro' value='Seleccione'>Seleccione</MenuItem>
        <MenuItem className='selectorFiltro' value='Full-Time'>Full-time</MenuItem>
        <MenuItem className='selectorFiltro' value='Part-Time'>Part-Time</MenuItem>
      </Select>
      <InputLabel id="Movilidad">Movilidad</InputLabel>
      <Select
        className='selectorFiltro'
        value={movilidad === undefined ? 'Seleccione' : movilidad ? 'Si' : 'No'}
        onChange={handleMovilidadChange}
      >
        <MenuItem className='selectorFiltro' value='Seleccione'>Seleccione</MenuItem>
        <MenuItem className='selectorFiltro' value='Si'>Si</MenuItem>
        <MenuItem className='selectorFiltro' value='No'>No</MenuItem>
      </Select>
      <InputLabel id="RangoEdad">Edad (18-65)</InputLabel>
      <Slider className='sliderEdad' value={edad} onChange={handleEdadChange} min={18} max={65} valueLabelDisplay='auto' />
      <button className='btn' onClick={() => filtrarCandidatos({ name: null, edad, disponibilidad, movilidad })}>Buscar</button>
      <button className="btn" onClick={reset}>Reset</button>
    </div>
  );
}
