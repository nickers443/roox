import React, { useState, useContext } from 'react';
import './index.scss'
import CustomButton from '../CustomButton/index.jsx'
import context from '../../contex.js';

export default function User() {

  const { users } = useContext(context)
  const id = +window.location.pathname.split('/').pop()
  const user = users.find(findUser)

  function findUser (u) {
    return u.id === id
  }
  
  const [ isEdit, setIsEdit ] = useState()
  const [ form, setForm ] = useState(user)
  
  function onChangeField (field, value) {
    const cloneForm = JSON.parse(JSON.stringify(form))
    const splited = field.split('.')

    if(splited.length === 2) {
      cloneForm[splited[0]][splited[1]] = value
    } else {
      cloneForm[splited[0]] = value
    }

    setForm(cloneForm)
  }
  
  function toggleEdit () {
    setIsEdit(!isEdit)
  }

  function loadToConsole () {
    let validate = true

    if(form.name.length === 0) validate = false
    if(form.username.length === 0) validate = false
    if(form.email.length === 0) validate = false
    if(form.address.street.length === 0) validate = false
    if(form.address.city.length === 0) validate = false
    if(form.address.zipcode.length === 0) validate = false
    if(form.phone === 0) validate = false
    if(form.website === 0) validate = false

    if(validate) console.log(JSON.stringify(form))
  }

  
  return (
    <div className='userInfo'>
      <form className='form'>  
        <label>Name </label>  
        <input readOnly={!isEdit} 
          className={`${isEdit ? 'eddit' : ''} ${!form.name ? 'error' : ''}`}
          type="text" 
          value={form.name} 
          onChange={(e) => onChangeField('name', e.target.value)}
        /> 
        <label>User name </label>  
        <input readOnly={!isEdit} 
          className={`${isEdit ? 'eddit' : ''} ${!form.username ? 'error' : ''}`}
          type="text" 
          value={form.username}
          onChange={(e) => onChangeField('username', e.target.value)}
        />  
        <label>E-mail</label>  
        <input readOnly={!isEdit} 
          className={`${isEdit ? 'eddit' : ''} ${!form.email ? 'error' : ''}`}
          type="email" 
          value={form.email}
          onChange={(e) => onChangeField('email', e.target.value)}
        /> 
        <label>Street</label>  
        <input readOnly={!isEdit} 
          className={`${isEdit ? 'eddit' : ''} ${!form.address.street ? 'error' : ''}`}
          type="text" 
          value={form.address.street}
          onChange={(e) => onChangeField('address.street', e.target.value)}
        /> 
        <label>City</label>  
        <input readOnly={!isEdit} 
          className={`${isEdit ? 'eddit' : ''} ${!form.address.city ? 'error' : ''}`}
          type="text" 
          value={form.address.city}
          onChange={(e) => onChangeField('address.city', e.target.value)}
        /> 
        <label>Zip-code</label>  
        <input readOnly={!isEdit} 
          className={`${isEdit ? 'eddit' : ''} ${!form.address.zipcode ? 'error' : ''}`}
          type="text" 
          value={form.address.zipcode}
          onChange={(e) => onChangeField('address.zipcode', e.target.value)}
        /> 
        <label>Phone</label>  
        <input readOnly={!isEdit} 
          className={`${isEdit ? 'eddit' : ''} ${!form.phone ? 'error' : ''}`}
          type="text" 
          value={form.phone}
          onChange={(e) => onChangeField('phone', e.target.value)}
        /> 
        <label>Website</label>  
        <input readOnly={!isEdit} 
          className={`${isEdit ? 'eddit' : ''} ${!form.website ? 'error' : ''}`}
          type="text" 
          value={form.website}
          onChange={(e) => onChangeField('website', e.target.value)}
        /> 
        <label>Comment</label>  
        <textarea 
          readOnly={!isEdit} 
          className={isEdit ? 'eddit' : ''}
          value={form.comment}
          onChange={(e) => onChangeField('comment', e.target.value)}
        /> 
      </form> 
      <div className='btnEditPosition'>
        <CustomButton 
          className='btn'
          text='Редактировать'  
          func={toggleEdit}
        />
      </div>
      <div className='btnSavePosition'>
        <CustomButton 
          className='btn'
          disabled={!isEdit}
          buttonColor={isEdit ? 'green' : 'gray'}
          text='Сохранить'  
          func={loadToConsole}
        />
      </div>
    </div>
  )
}
 