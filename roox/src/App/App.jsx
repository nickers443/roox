import React from 'react';
import './style.scss'
import { Route, Routes } from "react-router-dom";
import NotFoundPage from '../components/pages/NotFoundPage/index.jsx';
import UserPage from '../components/pages/UserPage/index.jsx';
import Layout from '../components/pages/Layout/index.jsx';
import MainWindow from '../components/MainWindow/MainWindow.jsx';


export default function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<MainWindow />} />
        <Route path='user/:id' element={<UserPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
