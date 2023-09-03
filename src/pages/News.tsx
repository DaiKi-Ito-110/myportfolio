import React from "react"
import NewsCard from "../components/NewsCard"
import {newsInfo, newsInfoContentType} from '../newsInfo'

const News = () => {
  return (
    <div className="mb-20 mt-10">
      {newsInfo.map((news:newsInfoContentType, i) =>
        <NewsCard delay={i*0.1} key={i} image={news.thumbnailImg ? news.thumbnailImg : undefined} title={news.title} pageLink={news.pageLink} year={news.year} explanation={news.explanation}  />
      )}
    </div>
  )
}

export default News