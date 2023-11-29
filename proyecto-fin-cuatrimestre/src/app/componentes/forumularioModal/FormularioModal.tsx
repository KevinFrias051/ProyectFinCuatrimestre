'use client'

import React from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import CargarArchivo from "../cargarArchivos/CargarArchivos";
import './FormularioModal.css';
export function FormularioModal() {

  interface Client {
    nombre: string;
    apellido: string;
    email: string;
  }


  const { register, handleSubmit, reset } = useForm<Client>();
  const onSubmit: SubmitHandler<Client> = (event) => {
    console.log(
      "Candidato postulado:" + " " + event.nombre + " " + event.apellido
    );
    console.log("Email: " + event.email);
    reset();
  };


  return (
    <div className="App">
      <div className="container">
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Postularse
        </button>
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modalGeneral">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-danger" id="exampleModalLabel">Carga tus datos para postularte</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form action="#" onSubmit={handleSubmit(onSubmit)}>
                  <div className="row divBody">
                    <div className="form-group col-lg-6">
                      <label className="font-weight-bold text-small" htmlFor="firstname">Nombre<span className="text-primary ml-1">*</span></label>
                      <input {...register("nombre")} className="form-control" id="firstname" type="text" placeholder="..." required={true} />
                    </div>
                    <div className="form-group col-lg-6">
                      <label className="font-weight-bold text-small" htmlFor="lastname">Apellido<span className="text-primary ml-1">*</span></label>
                      <input {...register("apellido")} className="form-control" id="lastname" type="text" placeholder="..." required={true} />
                    </div>
                    <div className="form-group col-lg-12">
                      <label className="font-weight-bold text-small labelEstilo" htmlFor="email">Email<span className="text-primary ml-1">*</span></label>
                      <input {...register("email")} className="form-control" id="email" type="email" placeholder="..." required={true} />
                    </div>
                    <div className="divCargaArchivo">
                      <CargarArchivo />
                    </div>
                    <button type="submit" className="btn btn-primary btnPostularme" onClick={() => {
                      console.log("")
                    }} >Postularme</button>
                  </div>
                </form>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-warning" data-bs-dismiss="modal">Cerrar</button>
              </div>


            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

