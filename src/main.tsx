import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter} from 'react-router-dom'

import App from './App.tsx'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="text-gray-950 overflow-x-hidden">
        <Header />
        <App />
        <Footer />
      </div>
    </BrowserRouter>
  </React.StrictMode>
)
