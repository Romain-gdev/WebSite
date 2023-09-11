import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/index.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import {Home} from './components/Home'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
  </React.StrictMode>,
)
