import NewsCard from "../components/NewsCard.tsx"
import {newsInfo, newsInfoContentType} from '../newsInfo.ts'

const News = () => {
  return (
    <div>
      {newsInfo.map((news:newsInfoContentType, i) =>
        <NewsCard delay={i*0.1} key={i} image={news.thumbnailImg ? news.thumbnailImg : undefined} title={news.title} pageLink={news.pageLink} year={news.year} explanation={news.explanation}  />
      )}
    </div>
  )
}

export default News