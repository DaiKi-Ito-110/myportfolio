import {Routes, Route} from 'react-router-dom'

import Home from "./pages/Home"
import Works from './pages/Works'
import Contact from './pages/Contact'
import PageNotFound from './pages/PageNotFound'
import Profile from './pages/Profile'

const App: React.FC = () => {
  return (
    <>
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/works' element={<Works />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App