"use client";
import React, { useState, useRef } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import "./Filtro.css";

//Componente Filtro de empleos
export function FiltroEmpleos({ filtrarEmpleos, cargarEmpleos }) {
  //Estado: carga horaria, Utilizado para filtrar por carga horaria = Full-Time/Part-Time
  //Estado: selected . Utilizado para mantener el valor (value) del estado del selector = Seleccione/Full-Time/Part-Time
  const [cargaHoraria, setCargaHoraria] = useState(null);
  const [selected, setSelected] = useState("Seleccione");
  const selectRef = useRef(null);

  //Funcion donde evaluamos la carga horaria seleccionada para pasarle al filtro
  const handleDisponibilidadChange = (e) => {
    setSelected(e.target.value);
    e.target.value === "Full-Time"  ? setCargaHoraria(true)  : setCargaHoraria(false);
  };

  //Funcion para volver a los valores por defecto del filtro y volver a mostrar el arreglo completo de los Empleos
  const handleReset = () => {
    setSelected("Seleccione");
    setCargaHoraria(null);
    selectRef.current.value = "Seleccione"; // Seteando el valor del select al primer elemento
    cargarEmpleos();
  };

  return (
    <div className="divFiltroEmpleos">
      <InputLabel id="Disponibilidad">Carga Horaria</InputLabel>
      <Select
        className="selectorFiltro"
        value={selected}
        onChange={handleDisponibilidadChange}
        inputProps={{ ref: selectRef }}
      >
        <MenuItem className="selectorFiltro" value="Seleccione">
          Seleccione
        </MenuItem>
        <MenuItem className="selectorFiltro" value="Full-Time">
          Full-Time
        </MenuItem>
        <MenuItem className="selectorFiltro" value="Part-Time">
          Part-Time
        </MenuItem>
      </Select>
      {/* Boton para filtar/buscar los candidatos */}
      <button className="btn" onClick={() => filtrarEmpleos({ cargaHoraria })}>
        Buscar
      </button>

      <button type="reset" className="btn" onClick={handleReset}>
        Reset
      </button>
      
    </div>
  );
}