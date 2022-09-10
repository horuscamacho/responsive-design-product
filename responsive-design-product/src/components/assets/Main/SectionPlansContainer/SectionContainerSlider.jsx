import React from 'react'



const SectionContainerSlider = () => {
    var newArray = [
        {
            recommended: "Recomendado",
            title: "Pago anual",
            cost: "99",
            saving: "* Ahorras $129 comparado al plan mensual.",
        },
        {
            recommended: "Mensual",
            title: "Pago Mensual",
            cost: "109",
            saving: "* Lo sentimos en este plan no ahorras."
        },
        {
            recommended: "Trimestral",
            title: "Pago Trimestral",
            cost: "104",
            saving: "* Ahorras $15 comparado al plan mensual",
        }
    ]

    return (
        <section className='plans-container--slider'>
            {
                newArray.map((e) => {
                    return (
                        <article className='plans-container--card'>
                            <p className='recommended'>{e.recommended}</p>
                            <div className='plan-info-container'>
                                <h3 className='plan-card--title'>{e.title}</h3>
                                <p className='plan-card--price'><spa>$</spa>{e.cost}</p>
                                <p className='plan-card--saving'>{e.saving}</p>
                                <button className='plan-card--ca'>Escoger este <span></span></button>
                            </div>
                        </article>
                    )
                })
            }
        </section>
    )
}

export default SectionContainerSlider