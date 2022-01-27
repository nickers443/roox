import React from 'react';
import User from '../../User/index.jsx';
import './index.scss'

export default function UserPage() {

  return (
    <div className='conteiner'>
      <h3>Профиль пользователя</h3>
      <User />
    </div>
  )
}
