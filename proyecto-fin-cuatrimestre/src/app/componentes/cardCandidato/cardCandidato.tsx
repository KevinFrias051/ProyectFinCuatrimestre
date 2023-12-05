"use client";
import { useState } from "react";
import "./CardCandidato.css";

//Componente Card Candidato
export function CardCandidato(props: any) {
  //Desestructuracion de props
  const {
    srcImg,
    cardName,
    cardEdad,
    cardMovilidad,
    cardDisponibilidad,
    cardSkills,
  } = props;

  //Estado: contrato. Utilizado para contratar o despedir candidato
  const [contrato, setContrato] = useState<String>("Contratar");
  const contratar = () => {
    if (contrato == "Contratar") {
      setContrato("Despedir");
    } else {
      setContrato("Contratar");
    }
  };

  //Constante que se utiliza para definir el valor de disponibilidad y movilidad dependiendo de la props que se resiva por parametro
  const disponibilidad: string = cardDisponibilidad ? "Full-Time" : "Part-Time";
  const movilidad: string = cardMovilidad ? "Si" : "No";

  return (
    <>
      <div className="card-container">
        <img className="round" src={srcImg} alt="user" />
        <h3>{cardName}</h3>
        <p>Edad: {cardEdad}</p>
        <p>Movilidad Propia: {movilidad}</p>
        <p>Disponibilidad: {disponibilidad}</p>
        <div className="buttons">
          <button className="primary" onClick={contratar}>
            {contrato}
          </button>
          <button className="primary ghost">
            <a href="https://www.linkedin.com/home" target="_blank">
              Linkedin
            </a>
          </button>
        </div>
        <div className="skills">
          <ul>
            <h5>Skills:</h5>
            {cardSkills.map((cardSkills, index) => (
              <li key={index}>{cardSkills}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
