import React from 'react'
import style from './SideBar.module.css'
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import img from '../../assets/Untitled-1.png'
export default function SideBar({ show })
{
  const sec1 = [

    { text: "Dashboard", icon: <FaHome />, path: "/" },
    { text: "Manage Team", icon: <FaHome />, path: "/Manage Team" },
    { text: "Information", icon: <FaHome />, path: "/Contacts Information" },
    { text: "Invoices Balances", icon: <FaHome />, path: "/Invoices Balances" },
  ]
  const sec2 = [

    { text: "Profile Form", icon: <FaHome />, path: "/Profile Form" },
    { text: "Calendar", icon: <FaHome />, path: "/Calendar" },
    { text: "FAQ Page", icon: <FaHome />, path: "/FAQ Page" },

  ]
  const sec3 = [

    { text: "Bar Chart", icon: <FaHome />, path: "/Bar Chart" },
    { text: "Pie Chart", icon: <FaHome />, path: "/Pie Chart" },
    { text: "Line Chart", icon: <FaHome />, path: "/Line Chart" },
    { text: "Geography Chart", icon: <FaHome />, path: "/Geography Chart" }
  ]
  return (
    <div className={show ? style.sidebarClose : style.sidebar}>

      <div>

        <div className={style.profile}>
          <img className={show ? style.imgclose : style.img} src={img} alt='photo' />
          {show ? "" : <h5>Sheko</h5>}
          {show ? "" : <p>Admin</p>}

        </div>
        <hr />

        {/* section 1 in sidebar */}
        <div>
          <ul>
            <li>
              {sec1.map((item, i) =>
              {
                return (
                  <div className={show ? style.ulclose : style.ul} key={i}>
                    <Link title={item.text} to={item.path} className={style.icons}> {item.icon} </Link>
                    {show ? "" : <Link to={item.path}> {item.text}</Link>}
                  </div>
                )

              })}
            </li>

          </ul>
        </div>
        <hr />

        {/* section 2 in sidebar */}
        <div>
          <ul>
            <li>
              {sec2.map((item, i) =>
              {
                return (
                  <div className={show ? style.ulclose : style.ul} key={i}>
                    <Link title={item.text} to={item.path} className={style.icons}> {item.icon} </Link>
                    {show ? "" : <Link to={item.path}> {item.text}</Link>}
                  </div>
                )

              })}
            </li>

          </ul>
        </div>
        <hr />

        {/* section 3 in sidebar */}
        <div>
          <ul>
            <li>
              {sec3.map((item, i) =>
              {
                return (
                  <div className={show ? style.ulclose : style.ul} key={i}>
                    <Link title={item.text} to={item.path} className={style.icons}> {item.icon} </Link>
                    {show ? "" : <Link to={item.path}> {item.text}</Link>}
                  </div>
                )

              })}
            </li>

          </ul>
        </div>

      </div>




    </div >
  )
}
