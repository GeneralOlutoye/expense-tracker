import React from 'react'
import './App.css'
import "antd/dist/antd.min.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Dashboard } from './view/dashboard'
import { ErrorPage } from './view/error';
import { Transactions } from './view/transactions/components/transactions';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/Transactions' element={<Transactions />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  )
}
