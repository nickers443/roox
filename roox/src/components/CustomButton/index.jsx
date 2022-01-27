import React from 'react';
import './index.scss'

export default function CustomButton( {text='', buttonColor='blue', func, disabled} ) {
  return (
    <button
      className={`defaulStyle ${buttonColor}`}
      onClick={func}
      disabled={disabled}
    >
      {text}
    </button>
  )
}