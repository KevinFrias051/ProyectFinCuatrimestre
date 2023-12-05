import React from 'react'
import BrandExample from './navMenu/Nav';
import Carrousel from './carrousel/Carrousel';
import { Menu } from './menu/Menu';
import { MenuHamburguesa } from './menuHamburguesa/MenuHamburguesa';
import "./Main.css"

// Componente main, unifica: barra de navegacion + menu hamburguesa + menu + corrousel
export const Main = () => {
  return (
    <>
      <div className='cuerpo'>
        {/* Barra de navegacion */}
        <div className='divNav'>
          <BrandExample />
        </div>

        <div className='divContMenuCarrousel'>
          <div className='divContenedorHamburguesa'>
            <MenuHamburguesa />
          </div>

          <div className='divContenedorMenu'>
            <Menu />
          </div>

          <div className='divCarrousel'>
            <Carrousel />
          </div>
        </div>

      </div>
    </>
  )
}