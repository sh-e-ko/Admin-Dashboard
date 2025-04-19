import React from 'react'
import "bootstrap/dist/css/bootstrap.css"
import MainLayouts from './Components/layouts/MainLayouts'
import './App.css'
import { useRoutes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard/Dashboard'
import ManageTeam from './Pages/Manage Team/ManageTeam'
import ContactsInformation from './Pages/Contacts Information/ContactsInformation'
import InvoicesBalances from './Pages/Invoices Balances/InvoicesBalances'
import ProfileForm from './Pages/Profile Form/ProfileForm'
import Calendar from './Pages/Calendar/Calendar'
import FAQPage from './Pages/FAQ Page/FAQPage'
import BarChart from './Pages/Bar Chart/BarChart'
import PieChart from './Pages/Pie Chart/PieChart'
import LineChart from './Pages/Line Chart/LineChart'
import GeographyChart from './Pages/Geography Chart/GeographyChart'




function App()
{

  const routs = useRoutes([
    {
      path: "/",
      element: <Dashboard />
    },
    {
      path: "/Manage Team",
      element: <ManageTeam />
    },
    {
      path: "/Contacts Information",
      element: <ContactsInformation />
    },
    {
      path: "/Invoices Balances",
      element: <InvoicesBalances />
    },

    {
      path: "/Profile Form",
      element: < ProfileForm />
    },
    {
      path: "/FAQ Page",
      element: < FAQPage />
    },

    {
      path: "/Bar Chart",
      element: < BarChart />
    },
    {
      path: "/Pie Chart",
      element: <PieChart />
    },
    {
      path: "/Line Chart",
      element: <LineChart />
    },
    {
      path: "/Geography Chart",
      element: <GeographyChart />
    },
    {
      path: "/Calendar",
      element: <Calendar />
    },

  ])
  return (
    <>
      <div className='app'>
        {routs}
      </div>

    </>
  )
}

export default App
