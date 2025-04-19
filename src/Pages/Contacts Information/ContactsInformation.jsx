import React from 'react'
import TableTeam from './Components/TableTeam'
import style from './ContactsInformation.module.css'
import MainLayout from '../../Components/layouts/MainLayouts'

export default function ContactsInformation()
{
  return (
    <MainLayout>
      <div className={style.container} >
        <TableTeam />
      </div>
    </MainLayout>
  )
}
