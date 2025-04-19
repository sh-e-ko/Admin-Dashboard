import React from 'react'
import MainLayouts from '../../Components/layouts/MainLayouts'
import Line from './Components/Line'
import style from './Components/Line.module.css'
export default function LineChart() {
  return (
    <MainLayouts>
      <div className={style.container}>
        <Line/>
      </div>
    </MainLayouts>

  )
}
