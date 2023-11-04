

import React from 'react'
import BrandExample from './navMenu/Nav';
import Carrousel from './carrousel/Carrousel';
import { Menu } from './menu/Menu';

import "./Main.css"


export const Main = () => {
  return (
    <>
      <div className='cuerpo'>

        <div className='divNav'>
          <BrandExample />
        </div>

        <div className='divContMenuCarrousel'>

          <div className='divMenu'>
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