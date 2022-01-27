import React, { useContext, lazy, Suspense } from 'react';
import './index.scss'
import CustomButton from './../CustomButton/index.jsx'
import axios from 'axios'
import context from '../../contex.js';
import AnimateLoading from '../AnimateLoading/index.jsx'

export default function MainWindow () {
  const { users, setUsers } = useContext(context)
  const apiURL = 'https://jsonplaceholder.typicode.com/users'
  const fetchData = async () => {
    const response = await axios.get(apiURL)
    setUsers(response.data)
  } 
  const ListUsers = lazy(() => import('./ListUsers/ListUsers.jsx'))
  return (
    <div
      className='content'>
        {
          users 
          ? <Suspense fallback={<AnimateLoading />}>
              <ListUsers users={users}/>
            </Suspense>
          : <CustomButton 
              text='Загрузить'
              buttonColor='blue'
              func={fetchData} 
            /> 
        }
    </div>
  )
}
