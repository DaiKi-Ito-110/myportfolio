import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter} from 'react-router-dom'

import App from './App.tsx'
import ScrollTop from './components/ScrollTop'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollTop />
      <div className="text-gray-950 overflow-x-hidden">
      <App />
      </div>
    </BrowserRouter>
  </React.StrictMode>
)
