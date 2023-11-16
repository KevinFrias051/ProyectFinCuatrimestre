import "./cardCandidato.css"

export function CardEstilada(props: any) {
    const { srcImg, cardName, cardPuesto, cardLocalication, cardSkills, } = props;
    return (
        <>
            <div className="card-container">
                <img className="round" src={srcImg} alt="user" />
                <h3>{cardName}</h3>
                <h6>{cardLocalication}</h6>
                <p>{cardPuesto}</p>
                <div className="buttons">
                    <button className="primary">
                        Contratar
                    </button>
                    <button className="primary ghost">
                        Saber Mas
                    </button>
                </div>
                <div className="skills">
                    <h6>Skills</h6>
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