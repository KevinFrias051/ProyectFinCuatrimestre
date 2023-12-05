"use client";
import { FormularioModal } from "../forumularioModal/FormularioModal";
import "./CardEmpleo.css";

//Componente Card Empleo
export function CardEmpleo(props: any) {
  //Desestructuracion de props
  const { srcImg, cardName, cardDescripcion, cardRequisitos, cardHorario } =
    props;

  //Constante que se utiliza para definir el valor de Carga horaria dependiendo de la props que se resiva por parametro
  const cargaHorario: string = cardHorario ? "Full-Time" : "Part-Time";

  return (
    <>
      <div className="card-container">
        <img className="round" src={srcImg} alt="user" />
        <h3>{cardName}</h3>
        <p>Descripcion: {cardDescripcion}</p>
        <p>Carga Horaria: {cargaHorario}</p>
        <div className="buttons">
          <FormularioModal empleo={cardName} />
        </div>
        <div className="skills">
          <h5>Requisitos: </h5>
          <ul>
            {cardRequisitos.map((cardRequisitos, index) => (
              <li key={index}>{cardRequisitos}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
