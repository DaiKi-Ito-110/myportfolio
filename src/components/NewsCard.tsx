import { Link } from "react-router-dom";
import TransitionFromBottom from "./TransitionFromBottom";
import TransitionScaleUpOnHover from "./TransitionScaleUpOnHover";
import OnHoverBar from "./OnHoverBar";

type Props = {
  image?: string;
  title: string;
  delay: number;
  pageLink: string;
  year: string;
  explanation: string;
};

const NewsCard:React.FC<Props> = ({image, title, delay, pageLink, year, explanation}) => {
  return (
    <div>
      <TransitionFromBottom delay={delay}>
        <div className="w-3/5 md:w-2/5 m-auto mt-10">
          <div className="overflow-hidden">
          <Link to={pageLink}>
            <TransitionScaleUpOnHover>
              {image ?
                <img src={image} alt='thumbnail' />:
                <p className="bg-gray-100 text-center flex justify-center items-center font-bold text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl h-40 sm:h-52 md:h-52 lg:h-60 xl:h-80 2xl:h-96">{title}</p>
            }
            </TransitionScaleUpOnHover>
          </Link>
          </div>
          <p className="mt-3 font-bold">{title}</p>
          <p className="mt-1 font-bold text-xs ">{year}</p>
          <p className="mt-5 text-xs whitespace-pre-wrap line-clamp-3">{explanation}</p>
          <div className="w-20">
          <Link to={pageLink}>
            <div className="inline-block">
              <OnHoverBar>
                <p className="text-xs font-bold mt-2"> READ MORE </p>
              </OnHoverBar>
            </div>
          </Link>
          </div>
        </div>
      </TransitionFromBottom>
    </div>
  )
}

export default NewsCard