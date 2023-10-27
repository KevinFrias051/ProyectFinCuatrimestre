import React from 'react'
import { Nav } from './navMenu/Nav';
import "./Main.css"

export const Main = () => {

  return (
    <>    
      <div className='cuerpo' >Main
        <div>
        <h1 className='tituloCuerpo'>Municipio de Olavarria</h1>
        </div>
        <div>
          <Nav/>
        </div>
      </div>      
    </>
  )
}

