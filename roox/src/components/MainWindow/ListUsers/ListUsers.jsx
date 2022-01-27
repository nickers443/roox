import React from 'react'
import UsersItem from './UsersItem/index.jsx'
import './index.scss'

export default function ListUsers( {users} ) {
  
  return (
    <div>
      <h3
        className='title'>
        Список пользователей
      </h3>
      <UsersItem />
      <p className='counter'>Найденно {users.length} пользователей</p>
    </div>
  ) 
}
