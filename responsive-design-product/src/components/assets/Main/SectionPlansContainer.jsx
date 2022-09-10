import React from 'react'
import SectionContainerSlider from './SectionPlansContainer/SectionContainerSlider'


const SectionPlansContainer = () => {
  return (
    <section id='plans' className='main-plans-container'>
        <div className='plans--title'>
            <h2>Escoge el plan que mejor se ajuste a ti.</h2>
            <p>Cualquier plan te da acceso completo a nuestra plataforma.</p>
        </div>
        <SectionContainerSlider />
    </section>
  )
}

export default SectionPlansContainer