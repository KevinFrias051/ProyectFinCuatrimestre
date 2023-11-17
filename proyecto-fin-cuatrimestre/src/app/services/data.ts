import axios, {AxiosInstance, AxiosResponse} from "axios";
const URLDatos = "https://653af3bf2e42fd0d54d49572.mockapi.io/Proyectofinal";

const Candidatos: AxiosInstance = axios.create({
    baseURL:URLDatos,
});

const Empleos: AxiosInstance = axios.create({
    baseURL:URLDatos,
});

export const GetCandidatosFromAPI = async () => {
    try {
        const respuestaCandidatos:AxiosResponse<any, any> = await Candidatos.get('/Candidatos');
        return respuestaCandidatos.data;
    }   catch (err) {
        throw new Error('Error consultando Candidatos')
    }
}


export const GetEmpleosFromAPI = async () => {
    try {
        const respuestaEmpleos:AxiosResponse<any, any> = await Empleos.get('/Empleos');
        return respuestaEmpleos.data;
    }   catch (err) {
        throw new Error('Error consultando Empleos')
    }
}