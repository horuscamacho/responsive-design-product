import React from 'react'
import logo from './img/logo.svg'

const Header = () => {
  return (
    <header>
        <img src={logo} alt=''/>
        <div className='header--title-container'>
            <h1>La próxima revolución en el intercambio de criptomonedas</h1>
            <p>Batatabit te ayuda a navegar entre los diferentes precios y tendencias.</p>
            <a href='#plans' className='header--button'>Conoce nuestros planes <span></span></a>
        </div>
    </header>
  )
}

export default Header