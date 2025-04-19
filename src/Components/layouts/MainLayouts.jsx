import React, { useState } from 'react'
import style from './MainLayout.module.css'
import Nav from '../NavBar/Nav'
import SideBar from '../SideBar/SideBar'

export default function MainLayouts({ children })
{
    const [show, setshow] = useState(true);

    return (
        <div className={style.header} >
            
            <SideBar show={show} />

            <div className={style.nav}>
                <Nav  show={show} setshow={setshow} />
                
                <div className={show  ? style.containerclose   : style.container}>
                    {children}
                </div>

            </div>

        </div>

    )
}
