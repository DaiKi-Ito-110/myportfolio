import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter} from 'react-router-dom'

import App from './App.tsx'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='text-gray-950'>
      <BrowserRouter>
        <Header />
        <App />
        <Footer />
      </BrowserRouter>
    </div>
  </React.StrictMode>,
)
