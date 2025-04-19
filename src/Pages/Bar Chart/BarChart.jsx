import React from 'react'
import MainLayouts from '../../Components/layouts/MainLayouts'
import style from './BarChart.module.css'
import Chart from './Components/Chart'
export default function BarChart() {
  return (
    <MainLayouts>
      <div className={style.container}>
      <Chart/>
      </div>
    </MainLayouts>
  )
}
