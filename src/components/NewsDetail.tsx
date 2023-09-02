import { Link } from "react-router-dom";
import { newsInfoContentType } from "../newsInfo.ts"
import {HiOutlineExternalLink} from 'react-icons/hi'
import OnHoverBar from "./OnHoverBar.tsx";

type Props = {
  news: newsInfoContentType;
}

const NewsDetail:React.FC<Props> = ({news}) => {
  return (
    <div className="w-10/12 flex flex-col items-center m-auto md:w-1/2">
      {news.thumbnailImg ?
        <img className="w-full mt-10" src={news.thumbnailImg} alt='thumbnail'/>:
        <p className="mt-10 bg-gray-100 text-center flex justify-center items-center font-bold text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl h-48 sm:h-72 md:h-72 lg:h-72 xl:h-80 2xl:h-96 w-full">{news.title}</p>
      }
      <div className="w-full mt-10">
        <p className="text-lg font-bold">{news.title}</p>
        <p className="text-sm mt-1 text-gray-500">{news.year}</p>
        <p className="text-sm text-gray-500 leading-loose tracking-wide mt-5 whitespace-pre-wrap">{news.explanation} </p>
        <div className="mt-20">
          {news.internalRelatedLink && news.internalRelatedLink.map((link, i) =>
            <div key={i}>
              <Link className="inline-block" to={link.link}>
                <OnHoverBar>
                  <div className="flex items-end gap-x-1.5">
                    <p className="text-xs font-bold">{link.title}</p>
                    <HiOutlineExternalLink className='text-base'/>
                  </div>
                </OnHoverBar>
              </Link>
            </div>
          )}
          {news.externalRelatedLink && news.externalRelatedLink.map((link, i) =>
            <div key={i}>
              <a className="inline-block" href={link.link}>
                <OnHoverBar>
                  <div className="flex items-end gap-x-1.5">
                    <p className="text-xs font-bold">{link.title}</p>
                    <HiOutlineExternalLink className='text-base'/>
                  </div>
                </OnHoverBar>
              </a>
            </div>
          )}
        </div>
        </div>
    </div>
  )
}

export default NewsDetail