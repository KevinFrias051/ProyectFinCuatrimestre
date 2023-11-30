'use client'

import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import CargarArchivo from '../cargarArchivos/CargarArchivos';
import './FormularioModal.css';

export function FormularioModal(props:any) {

  interface Client {
    nombre: string;
    apellido: string;
    email: string;
  }

  const { register, handleSubmit, reset, formState: { errors } } = useForm<Client>();

  const onSubmit: SubmitHandler<Client> = (data) => {
    console.log('Nombre Trabajo Aplicado:',props.empleo);
    console.log('Candidato postulado:', data.nombre, data.apellido);
    
    console.log('Email:', data.email);
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
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row divBody">
                    <div className="form-group col-lg-6">
                      <label className="font-weight-bold text-small" htmlFor="firstname">
                        Nombre<span className="text-primary ml-1">*</span>
                      </label>
                      <input
                        {...register('nombre', {
                          required: 'El nombre es requerido',
                          minLength: { value: 3, message: 'El nombre debe tener al menos 3 caracteres' },
                        })}
                        className="form-control"
                        id="firstname"
                        type="text"
                        placeholder="..."
                      />
                      {errors.nombre && <p className="text-danger">{errors.nombre.message}</p>}
                    </div>
                    <div className="form-group col-lg-6">
                      <label className="font-weight-bold text-small" htmlFor="lastname">
                        Apellido<span className="text-primary ml-1">*</span>
                      </label>
                      <input
                        {...register('apellido', {
                          required: 'El apellido es requerido',
                          minLength: { value: 3, message: 'El apellido debe tener al menos 3 caracteres' },
                        })}
                        className="form-control"
                        id="lastname"
                        type="text"
                        placeholder="..."
                      />
                      {errors.apellido && <p className="text-danger">{errors.apellido.message}</p>}
                    </div>
                    <div className="form-group col-lg-12">
                      <label className="font-weight-bold text-small labelEstilo" htmlFor="email">
                        Email<span className="text-primary ml-1">*</span>
                      </label>
                      <input
                        {...register('email', {
                          required: 'El email es requerido',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Ingresa un email válido',
                          },
                        })}
                        className="form-control"
                        id="email"
                        type="email"
                        placeholder="..."
                      />
                      {errors.email && <p className="text-danger">{errors.email.message}</p>}
                    </div>
                    <div className="divCargaArchivo">
                      <CargarArchivo />
                    </div>
                    <button type="submit" className="btn btn-primary btnPostularme" onClick={() => { }}>
                      Postularme
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-warning" data-bs-dismiss="modal">
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
