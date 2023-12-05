'use client'
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import CargarArchivo from '../cargarArchivos/CargarArchivos';
import './FormularioModal.css';

// Componente de Formulario para poder postularse a un Empleo y cargar el CV
export function FormularioModal(props: any) {

  // Datos que obtiene procesara el fromulario
  interface Client {
    nombre: string;
    apellido: string;
    email: string;
  }

  // errores que utilizara el componente Formulario
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Client>();

  // Funcion para imprimir por consola los datos ingresados al Formulario para simular un envio de datos
  const onSubmit: SubmitHandler<Client> = (data) => {
    console.log('Nombre Trabajo Aplicado:', props.empleo);
    console.log('Candidato postulado:', data.nombre, data.apellido);
    console.log('Email:', data.email);
    reset();
  };

  // Renderizacion del componente Formulario.
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
                      {/* Input para Nombre con validacion */}
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
                      {/* En caso de no ingresar datos validos al imput se genera y visualiza el error */}
                      {errors.nombre && <p className="text-danger">{errors.nombre.message}</p>}
                    </div>
                    <div className="form-group col-lg-6">
                      <label className="font-weight-bold text-small" htmlFor="lastname">
                        Apellido<span className="text-primary ml-1">*</span>
                      </label>
                      {/* Input para Apellido con validacion */}
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
                      {/* En caso de no ingresar datos validos al imput se genera y visualiza el error */}
                      {errors.apellido && <p className="text-danger">{errors.apellido.message}</p>}
                    </div>
                    <div className="form-group col-lg-12">
                      <label className="font-weight-bold text-small labelEstilo" htmlFor="email">
                        Email<span className="text-primary ml-1">*</span>
                      </label>
                      {/* Input para email con validacion */}
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
                      {/* En caso de no ingresar datos validos al imput se genera y visualiza el error */}
                      {errors.email && <p className="text-danger">{errors.email.message}</p>}
                    </div>
                    {/* Componente de Carga de Archivos */}
                    <div className="divCargaArchivo">
                      <CargarArchivo />
                    </div>

                    <button type="submit" className="btn btn-primary btnPostularme" >
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
