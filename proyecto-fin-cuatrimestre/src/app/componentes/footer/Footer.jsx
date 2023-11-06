import React from 'react'
import "./Footer.css"

export const Footer = () => {
  return (
    <>
    <div className='footer'>
      <div className='pie-enlaces'>
        <p>Enlaces de Interes</p>
        <a href="http://www.olavarria.gov.ar/olavarria-interactiva/">Olavarria Interactiva</a>
        <a href="https://gobiernoabierto.olavarria.gov.ar/tramites-y-servicios/#licencias-de-conducir">Licencia de Conducir</a>
        <a href="http://https://gobiernoabierto.olavarria.gov.ar/tramites-y-servicios/">Guía de Trámites</a>
        <a href="http://https://hcd.olavarria.gov.ar/">Concejo Deliberante</a>
      </div>
      <div className='pie-areas'>
        <p>Areas de Gobierno</p>
        {/* <a href="http://gobiernoabierto.olavarria.gov.ar/visualizaciones-4/organigrama/">Organigrama</a> */}
        <a href="https://www.olavarria.gov.ar/desarrollo-economico/empresas/">Desarrollo Económico</a>
        <a href="https://www.olavarria.gov.ar/agenda-municipal/">Cultura</a>
        <a href="https://www.olavarria.gov.ar/turismo/">Turismo</a>
        <a href="https://gobiernoabierto.olavarria.gov.ar/tramites-y-servicios/#salud/">Salud</a>
      </div>
      <div className='pie-telefonos'>
        <p>Telefonos Utiles</p>
        <a>Policia  - 101</a>
        <a>Bomberos - 100</a>
        <a>SAME     - 107</a>
        <a>Emergencias - 911</a>
      </div>
      </div>

    </>


  )
}
