import {Routes, Route} from 'react-router-dom'

import Home from "./pages/Home"
import Works from './pages/Works'
import Contact from './pages/Contact'
import PageNotFound from './pages/PageNotFound'
import Profile from './pages/Profile'
import { workInfo } from './workInfo'

import WorkDetail from './pages/WorkDetail'

const App: React.FC = () => {
  return (
    <>
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/works' element={<Works />} />
        <Route path='/contact' element={<Contact />} />
        {workInfo.map((work, i) =>
          <Route key={i} path={work.pageLink} element={<WorkDetail work={work} />} />
        )}
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App