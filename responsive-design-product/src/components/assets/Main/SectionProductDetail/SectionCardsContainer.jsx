import React from 'react'

const SectionCardsContainer = () => {
    return (
        <section className='product-cards--container'>
            <article className='product-detail--card'>
                <span className='clock'></span>
                <p className='product--card-title'>Tiempo real</p>
                <p className='product--card-body'>Nuestra Api toma información minuto a minuto sobre las tasas que más determinan el comportamiento.</p>
            </article>
            <article className='product-detail--card'>
                <span className='eye'></span>
                <p className='product--card-title'>No hay tasas escondidas</p>
                <p className='product--card-body'>Ni en la compra o al momento de exit, Batatabit siempre te muestra el costo real de lo que estas adquiriendo.</p>
            </article>
            <article className='product-detail--card'>
                <span className='dollar'></span>
                <p className='product--card-title'>No hay tasas escondidas</p>
                <p className='product--card-body'>Ni en la compra o al momento de exit, Batatabit siempre te muestra el costo real de lo que estas adquiriendo.</p>
            </article>
            <article class="product-detail--card">
                <span class="check"></span>
                <p class="product--card-title">Información confiable</p>
                <p class="product--card-body">Nuestras fuentes están 100% verificadas y continuamos auditando su contenido mientras se actualizan.</p>
            </article>
        </section>
    )
}

export default SectionCardsContainer