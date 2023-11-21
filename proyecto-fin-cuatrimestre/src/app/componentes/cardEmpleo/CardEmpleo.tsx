import { useState } from "react";
import "./cardEmpleo.css"
import CargarArchivo from "../cargarArchivos/CargarArchivos";

export function CardEmpleo(props: any) {
    const { srcImg, cardName, cardPuesto, cardDescripcion, cardRequisitos,cardHorario } = props;
    
    const [contrato,setContrato] = useState<String>("Postularse");
    const contratar = () => {
        if (contrato == "Postularse"){
        setContrato("Renunciar");
        } else {
            setContrato("Postularse");
        }
    }



    return (
        <>
            <div className="card-container">
                <img className="round" src={srcImg} alt="user" />
                <h3>{cardName}</h3>
                <p>Puesto: {cardPuesto}</p>
                <p>Descripcion: {cardDescripcion}</p>
                <p>Carga Horaria: {cardHorario}</p>
                <div className="buttons">
                    <button className="primary" onClick={contratar}>
                        {contrato}
                    </button>
                    <button className="primary ghost">
                        <CargarArchivo/>
                    </button>
                </div>
                <div className="skills">
                    <ul>
                        <li>Requisitos</li>
                        <li>Requisitos</li>
                        <li>Requisitos</li>
                        <li>Requisitos</li>
                        <li>Requisitos</li>
                        <li>Requisitos</li>
                    </ul>
                </div>
            </div>
        </>
    )
}