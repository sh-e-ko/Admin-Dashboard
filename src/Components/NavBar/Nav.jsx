import React from 'react'
import style from './Nav.module.css'
import { CiMenuFries } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
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
        <FaHome className={style.inputicon} />
      </div>

      {/* icons nav bar */}
      <div className={style.Navicons}>
        <FaHome />
        <FaHome />
        <FaHome />
      </div>


    </div>
  )
}
