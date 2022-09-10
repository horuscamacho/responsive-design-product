import React from 'react'
import SectionCardsContainer from './SectionProductDetail/SectionCardsContainer'


const SectionProductDetail = () => {
  return (
    <section className='main-product-detail'>
        <span className='product-detail--batata-logo'></span>
        <div className='product-detail--title'>
            <h2>Creamos un producto sin comparación.</h2>
        </div>
        <SectionCardsContainer />
    </section>
  )
}

export default SectionProductDetail