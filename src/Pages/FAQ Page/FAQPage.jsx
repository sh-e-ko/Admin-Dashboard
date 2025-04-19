import React from 'react'
import MainLayouts from '../../Components/layouts/MainLayouts'
import Faq from './Components/Faq'
import style from './FAQ.module.css'

export default function FAQPage()
{
  return (
    <MainLayouts>
      <div className={style.container}>
        <Faq />
      </div>
    </MainLayouts>
  )
}
