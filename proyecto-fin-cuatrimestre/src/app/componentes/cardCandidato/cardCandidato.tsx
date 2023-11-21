import { useState } from "react";
import "./cardCandidato.css"

export function CardCandidato(props: any) {
    const { srcImg, cardName, cardEdad, cardMovilidad, cardDisponibilidad, cardSkills } = props;

    const [contrato, setContrato] = useState<String>("Contratar");
    const contratar = () => {
        if (contrato == "Contratar") {
            setContrato("Despedir");
        } else {
            setContrato("Contratar");
        }
    }

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
                        <a href="https://www.linkedin.com/home" target="_blank">Linkedin</a>
                    </button>
                </div>
                <div className="skills">
                    <ul>
                        <h6>Skills:</h6>
                        {cardSkills.map((cardSkills, index) => (
                            <li key={index}>{cardSkills}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}