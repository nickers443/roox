import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import App from './App/App.jsx'
import { BrowserRouter } from "react-router-dom"
import context from './contex'

function Main() {
  const [ users, setUsers ] = useState()

  return (
    <React.StrictMode>
      <BrowserRouter>
        <context.Provider value={{ users, setUsers }}>
          <App />
        </context.Provider>
      </BrowserRouter>
    </React.StrictMode>
  )
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
reportWebVitals();
