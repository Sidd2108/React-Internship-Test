import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Show from './components/Show.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='/post/:name' element={<Show />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
