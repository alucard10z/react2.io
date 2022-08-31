import React from 'react'
import CardWideget from './CardWidget'
import "./styles.css"

const Navbar = () => {
  return (
    <div>

<ul className='list'>
                        <li><a href="#header">Inicio</a></li>
                        <li><a href="./galeria.html">Galeria</a></li>
                        <li><a href="#">Nosotros</a></li>
                        <li><a href="./contacto.html" >Contacto</a></li>
                        
                        
                        
                        
                    </ul>
   <CardWideget />                 

  </div>
  )
}

export default Navbar