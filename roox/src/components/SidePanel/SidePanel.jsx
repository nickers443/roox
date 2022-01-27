import React from 'react';
import CustomButton from '../CustomButton/index.jsx';
import './index.scss'

export default function SidePanel( {sortCity, sortCompany} ) {
 
  return (
    <div 
      className='wrap'>
      <p>Сортировка</p>
      <CustomButton 
        text='по городу'
        buttonColor='blue'
        func={sortCity}
      /> 
      <CustomButton
        text='по компании'
        buttonColor='blue' 
        func={sortCompany}
      />
    </div>
  )
}
