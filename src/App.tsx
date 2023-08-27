import {Routes, Route} from 'react-router-dom'

import Home from "./pages/Home"
import About from './pages/About'
import Works from './pages/Works'
import Contact from './pages/Contact'
import PageNotFound from './pages/PageNotFound'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/works' element={<Works />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App