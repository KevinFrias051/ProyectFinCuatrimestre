export interface Empleo {
    id: number,
    descripcion : string,
    empresa : string,
    avatar : any
    requisitos : string[];
    cargaHoraria : number;
};



export interface EmpleoFiltro {
    puesto: string;
    cargaHoraria : number;
}