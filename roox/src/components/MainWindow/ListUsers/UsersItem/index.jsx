import React, { useContext } from 'react';
import './index.scss'
import { Link } from 'react-router-dom';
import context from '../../../../contex.js'

export default function UsersItem() {
  const { users } = useContext(context)
  const list = users.map( user => 
    <div className='userCard'
         key={user.id + user.username}>
      <div className='row'>
        <p>ФИО:&nbsp;&nbsp;</p>
        <p>{user.name}</p>
      </div>
      <div className='row'>
        <p>Город:&nbsp;&nbsp;</p>
        <p>{user.address.city}</p>
      </div>
      <div className='row'>
        <p>Компания:&nbsp;&nbsp;</p>
        <p>{user.company.name}</p>
      </div>
      <div className='btnDetailed'>
        <Link 
          to={`/user/${user.id}`}>
          Подробнее
        </Link>
      </div>
    </div>
  )

  return (
    <div>
      {list}
    </div>
    )
}
