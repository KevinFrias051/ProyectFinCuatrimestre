"use client";
import React, { useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Slider from "@mui/material/Slider";
import InputLabel from "@mui/material/InputLabel";
import "./Filtro.css";

//Componente Filtro de Candidatos
export function Filtro({ filtrarCandidatos, cargarCandidato }: any) {
  //Estado: disponibilidad, Utilizado para filtrar por disponibilidad = true('Full-Time') y false('Part-Time')
  //Estado: movilidad, Utilizado para filtrar por movilidad = true(Si) y false(No)
  //Estado: edad, Utilizado para filtrar por edad = Min 18 y Max 65
  const [disponibilidad, setDisponibilidad] = useState<boolean | undefined>(undefined);
  const [movilidad, setMovilidad] = useState<boolean | undefined>(undefined);
  const [edad, setEdad] = useState([18, 65]);

  //Funcion donde evaluamos la disponibilidad seleccionada para pasarle al filtro
  const handleDisponibilidadChange = (e) => {
    if (e.target.value === "") {
      setDisponibilidad(undefined);
    } else { 
      e.target.value === "Full-Time"  ? setDisponibilidad(true)  : setDisponibilidad(false); 
    }};

  //Funcion donde evaluamos la movilidad seleccionada para pasarle al filtro
  const handleMovilidadChange = (e) => {
    if (e.target.value === "") {
      setMovilidad(undefined);
    } else {
      e.target.value === "Si" ? setMovilidad(true) : setMovilidad(false);
    }
  };

  //Funcion donde evaluamos la edad seleccionada para pasarle al filtro
  const handleEdadChange = (e, newValue) => {
    setEdad(newValue);
  };

  //Funcion para volver a los valores por defecto del filtro y volver a mostrar el arreglo completo de los Candidatos
  const reset = () => {
    setDisponibilidad(undefined);
    setMovilidad(undefined);
    setEdad([18, 65]);
    cargarCandidato();
  };

  return (
    <div className="divFiltroCandidatos">

      <InputLabel id="Disponibilidad">Disponibilidad</InputLabel>
      <Select
        className="selectorFiltro"
        value={ disponibilidad === undefined ? "Seleccione" : disponibilidad ? "Full-Time" : "Part-Time" }
        onChange={handleDisponibilidadChange}
      >
        <MenuItem className="selectorFiltro" value="Seleccione">
          Seleccione
        </MenuItem>
        <MenuItem className="selectorFiltro" value="Full-Time">
          Full-time
        </MenuItem>
        <MenuItem className="selectorFiltro" value="Part-Time">
          Part-Time
        </MenuItem>
      </Select>

      <InputLabel id="Movilidad">Movilidad</InputLabel>
      <Select
        className="selectorFiltro"
        value={movilidad === undefined ? "Seleccione" : movilidad ? "Si" : "No"}
        onChange={handleMovilidadChange}
      >
        <MenuItem className="selectorFiltro" value="Seleccione">
          Seleccione
        </MenuItem>
        <MenuItem className="selectorFiltro" value="Si">
          Si
        </MenuItem>
        <MenuItem className="selectorFiltro" value="No">
          No
        </MenuItem>
      </Select>

      <InputLabel id="RangoEdad">Edad (18-65)</InputLabel>
      <Slider
        className="sliderEdad"
        value={edad}
        onChange={handleEdadChange}
        min={18}
        max={65}
        valueLabelDisplay="auto"
      />
      {/* Boton para filtar/buscar los candidatos */}
      <button
        className="btn"
        onClick={() => filtrarCandidatos({ name: null, edad, disponibilidad, movilidad })}> 
        Buscar
      </button>

      <button className="btn" onClick={reset}>
        Reset
      </button>

    </div>
  );
}
