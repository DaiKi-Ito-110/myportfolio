import {Routes, Route} from 'react-router-dom'

import Home from "./pages/Home"
import Works from './pages/Works'
import News from './pages/News'
import PageNotFound from './pages/PageNotFound'
import Profile from './pages/Profile'
import WorkDetail from './pages/WorkDetail'
import { workInfo } from './workInfo'
import { newsInfo } from './newsInfo'
import NewsDetail from './components/NewsDetail'

const App: React.FC = () => {
  return (
      <div>
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/works' element={<Works />} />
          <Route path='/news' element={<News />} />
          {workInfo.map((work, i) =>
            <Route key={i} path={work.pageLink} element={<WorkDetail work={work} />} />
          )}
          {newsInfo.map((news, i) =>
            <Route key={i} path={news.pageLink} element={<NewsDetail news={news} />} />
          )}
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
  )
}

export default App