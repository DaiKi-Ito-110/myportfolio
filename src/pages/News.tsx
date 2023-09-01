import NewsCard from "../components/NewsCard"
import {newsInfo, newsInfoContentType} from '../newsInfo'

const News = () => {
  return (
    <div>
      {newsInfo.map((news:newsInfoContentType, i) =>
        <NewsCard delay={i*0.1} key={i} image={news.thumbnailImg} title={news.title} pageLink={news.pageLink} year={news.year} explanation={news.explanation}  />
      )}
    </div>
  )
}

export default News