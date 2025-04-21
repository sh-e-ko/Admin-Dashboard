import React from 'react'
import style from './Nav.module.css'
import { CiMenuFries } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { GrSettingsOption } from "react-icons/gr";
import { HiUserCircle } from "react-icons/hi";
import { CiBellOn } from "react-icons/ci";
export default function Nav({ show, setshow })
{
  return (
    <div className={show ? style.NavClose : style.Nav}>


      <div className={style.btn} onClick={() => setshow(!show)}>
        <CiMenuFries />
      </div>

      {/* input search */}
      <div className={style.inputSearch}>
        <input type="text" placeholder='search' />
        <CiSearch className={style.inputicon} />
      </div>

      {/* icons nav bar */}
      <div className={style.Navicons}>
        <CiBellOn />
        <GrSettingsOption />
        <HiUserCircle />
      </div>


    </div>
  )
}
