import { useState } from "react";
import "./CardEmpleo.css"
import CargarArchivo from "../cargarArchivos/CargarArchivos";
import { FormularioModal } from '../forumularioModal/FormularioModal'

export function CardEmpleo(props: any) {
    const { srcImg, cardName, cardDescripcion, cardRequisitos, cardHorario } = props;

    const [contrato, setContrato] = useState<String>("Postularse");
    const contratar = () => {
        if (contrato == "Postularse") {
            setContrato("Renunciar");
        } else {
            setContrato("Postularse");
        }
    }

    const cargaHorario: string = cardHorario ? "Full-Time" : "Part-Time";

    return (
        <>
            <div className="card-container">
                <img className="round" src={srcImg} alt="user" />
                <h3>{cardName}</h3>
                <p>Descripcion: {cardDescripcion}</p>
                <p>Carga Horaria: {cargaHorario}</p>
                <div className="buttons">
                    {/* <button className="primary" onClick={contratar}>
                        {contrato}
                    </button> */}
                <FormularioModal />
                    {/* <div className="divCargaArchivo">
                        <CargarArchivo />
                    </div> */}
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
    )
}