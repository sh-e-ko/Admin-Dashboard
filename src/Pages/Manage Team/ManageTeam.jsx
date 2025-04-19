import React from 'react'
import MainLayouts from '../../Components/layouts/MainLayouts'
import TableTeam from './Components/TableTeam'
import style from './ManageTeam.module.css'

export default function ManageTeam()
{
  return (
    <MainLayouts>
      <div className={style.container} >
        <TableTeam />
      </div>
    </MainLayouts>
  )
}
