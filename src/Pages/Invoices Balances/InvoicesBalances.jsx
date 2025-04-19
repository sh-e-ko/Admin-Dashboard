import React from 'react'
import MainLayouts from '../../Components/layouts/MainLayouts'
import TableTeam from './Components/TableTeam'
import style from './Invoices Balances.module.css'


export default function InvoicesBalances()
{


  // const [products, setProducts] = useState([]);

  // useEffect(() =>
  // {
  //   fetch("/iphones.json")
  //     .then((res) => res.json())
  //     .then((data) =>
  //     {
  //       console.log("products :", data);
  //       setProducts(data);
  //     })
  //     .catch((err) => console.error("Error:", err));
  // }, []);

  return (
    <MainLayouts>
      <div className={style.container} >

        <TableTeam />
      </div>


    </MainLayouts >
  )
}
