import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom'
import './index.scss'
import SidePanel from '../../SidePanel/SidePanel.jsx';
import context from '../../../contex.js';

export default function Layout() {
  const { users, setUsers } = useContext(context)
  const sortCity = () => {
    const clone = JSON.parse(JSON.stringify(users))
    setUsers(clone.sort((a,b) => ('' + a.address.city).localeCompare(b.address.city)))
  }

  const sortCompany = () => {
    const clone = JSON.parse(JSON.stringify(users))
    setUsers(clone.sort((a,b) => ('' + a.company.name).localeCompare(b.company.name)))
  }
  return (
    <div className='container'>
      <SidePanel 
        sortCity={sortCity}
        sortCompany={sortCompany}
      />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
