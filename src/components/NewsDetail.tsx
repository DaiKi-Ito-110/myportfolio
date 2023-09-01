import { Link } from "react-router-dom";
import { newsInfoContentType } from "../newsInfo"
import {HiOutlineExternalLink} from 'react-icons/hi'
import OnHoverBar from "./OnHoverBar";

type Props = {
  news: newsInfoContentType;
}

const NewsDetail:React.FC<Props> = ({news}) => {
  return (
    <div className="w-10/12 flex flex-col items-center m-auto md:w-1/2">
      <img className="w-full mt-10" src={news.thumbnailImg} alt='thumbnail'/>
      <div className="w-full mt-10">
        <p className="text-lg font-bold">{news.title}</p>
        <p className="text-sm mt-1 text-gray-500">{news.year}</p>
        <p className="text-sm text-gray-500 leading-loose tracking-wide mt-5 whitespace-pre-wrap">{news.explanation} </p>
        <div className="mt-20">
          {news.internalRelatedLink && news.internalRelatedLink.map((link, i) =>
            <div>
              <Link className="inline-block" key={i} to={link.link}>
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
            <div>
              <a className="inline-block" key={i} href={link.link}>
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