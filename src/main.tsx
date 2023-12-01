import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { Helmet } from 'react-helmet';

import App from './App.tsx'
import ScrollTop from './components/ScrollTop'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Helmet>
        <link rel="icon" href="/src/assets/images/favicon/favicon.webp" />
        <title>DaiKi Ito Portfolio</title>
        <meta name="description" content="圧倒的な変数を持つ自然環境をうまく受け入れる関数となるような、システムや作品の制作を行っています。" />
      </Helmet>
      <ScrollTop />
      <div className="text-gray-950 overflow-x-hidden">
      <App />
      </div>
    </BrowserRouter>
  </React.StrictMode>
)
