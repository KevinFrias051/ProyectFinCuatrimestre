"use client"
import React from 'react'
import './MenuHamburguesa.css'
export const MenuHamburguesa = () => {
    return (
        <>
            <nav className='Burguer'>
                <input type="checkbox" id="menu"></input>
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