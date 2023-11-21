export interface Candidato {
    id: number,
    name : string
    edad : number,
    disponibilidad : boolean,
    movilidad : boolean,
    avatar : any,
    skills : string[],
};

export interface CandidatoFiltro {
    
    name : string
    edad : number[],
    disponibilidad : boolean,
    movilidad : boolean,
    
};

