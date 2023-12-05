"use client"
import React from 'react'
import './MenuHamburguesa.css'
export const MenuHamburguesa = () => {
    // Renderiza el menu hamburguesa lista las opciones - no tiene funcionalidad
    return (
        <>
            <nav className='Burguer'>
                {/* Input tipo checkbox desplegable */}
                <input type="checkbox" id="menu"></input>
                {/* Boton de menu */}
                <label htmlFor="menu"> ☰ Menu </label>
                <ul>
                    <a href="#">Novedades</a>
                    <a href="#">Servicios</a>
                    <a href="#">Transportes</a>
                    <a href="#">Cultura</a>
                    <a href="#">Turismo</a>
                    <a href="#">Deportes</a>
                    <a href="#">Educacion</a>
                    <a href="#">Novedades</a>
                    <a href="#">Deportes</a>
                    <a href="#">Educacion</a>
                </ul>
            </nav>
        </>
    )
}