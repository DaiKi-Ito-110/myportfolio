import {Routes, Route} from 'react-router-dom'

import Home from "./pages/Home.tsx"
import Works from './pages/Works.tsx'
import News from './pages/News.tsx'
import PageNotFound from './pages/PageNotFound.tsx'
import Profile from './pages/Profile.tsx'
import WorkDetail from './pages/WorkDetail.tsx'
import { workInfo } from './workInfo.ts'
import { newsInfo } from './newsInfo.ts'
import NewsDetail from './components/NewsDetail.tsx'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'

const App: React.FC = () => {
  return (
      <div>
        <Header />
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
        <Footer />
      </div>
  )
}

export default App