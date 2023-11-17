import { useState } from "react";
import "./cardCandidato.css"

export function CardEstilada(props: any) {
    const { srcImg, cardName, cardPuesto, cardLocalication, cardSkills, } = props;
    
    const [contrato,setContrato] = useState<String>("Contratar");
    const contratar = () => {
        if (contrato == "Contratar"){
        setContrato("Despedir");
        } else {
            setContrato("Contratar");
        }
    }
    return (
        <>
            <div className="card-container">
                <img className="round" src={srcImg} alt="user" />
                <h3>{cardName}</h3>
                <p>{cardPuesto}</p>
                <p>Edad</p>
                <p>Movilidad</p>
                <p>disponibilidad</p>
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
                        <li>Front End Development</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Node</li>
                    </ul>
                </div>
            </div>
        </>
    )
}