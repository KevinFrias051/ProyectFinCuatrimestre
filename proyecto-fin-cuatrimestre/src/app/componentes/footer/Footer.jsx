import React from 'react'
import "./Footer.css"

export const Footer = () => {
  return (
    <>
    <div className='footer'>
      <div className='pie-enlaces'>Enlaces de Interes
        <a href="http://www.olavarria.gov.ar/olavarria-interactiva/">Olavarria Interactiva</a>
        <a href="https://gobiernoabierto.olavarria.gov.ar/tramites-y-servicios/#licencias-de-conducir">Licencia de Conducir</a>
        <a href="http://https://gobiernoabierto.olavarria.gov.ar/tramites-y-servicios/">Guía de Trámites</a>
        <a href="http://https://hcd.olavarria.gov.ar/">Concejo Deliberante</a>
      </div>
      <div className='pie-areas'>Areas de Gobierno
        {/* <a href="http://gobiernoabierto.olavarria.gov.ar/visualizaciones-4/organigrama/">Organigrama</a> */}
        <a href="https://www.olavarria.gov.ar/desarrollo-economico/empresas/">Desarrollo Económico</a>
        <a href="https://www.olavarria.gov.ar/agenda-municipal/">Cultura</a>
        <a href="https://www.olavarria.gov.ar/turismo/">Turismo</a>
        <a href="https://gobiernoabierto.olavarria.gov.ar/tramites-y-servicios/#salud/">Salud</a>
      </div>
      <div className='pie-telefonos'>Telefonos Utiles
        <p>Policia - 101</p>
        <p>Bomberos - 100</p>
        <p>SAME - 107</p>
        <p>Emergencias - 911</p>
      </div>
      </div>

    </>


  )
}
