import React from 'react'
import SectionExchangeContainer from './Main/SectionExchangeContainer'
import SectionImgContainer from './Main/SectionImgContainer/SectionImgContainer'
import SectionPlansContainer from './Main/SectionPlansContainer'
import SectionProductDetail from './Main/SectionProductDetail'

const Main = () => {
  return (
    <main>
        <SectionExchangeContainer />
        <SectionProductDetail />
        <SectionImgContainer />
        <SectionPlansContainer />
    </main>
  )
}

export default Main