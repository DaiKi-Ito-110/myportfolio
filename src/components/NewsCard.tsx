import { Link } from "react-router-dom";
import TransitionFromBottom from "./TransitionFromBottom";
import TransitionScaleUpOnHover from "./TransitionScaleUpOnHover";
import OnHoverBar from "./OnHoverBar";

type Props = {
  image: string;
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
              <img src={image} alt='thumbnail' />
            </TransitionScaleUpOnHover>
          </Link>
          </div>
          <p className="mt-3 font-bold">{title}</p>
          <p className="mt-1 font-bold text-xs ">{year}</p>
          <p className="mt-5 text-xs whitespace-pre-wrap">{explanation}</p>
          <div className="w-20">
          <Link to={pageLink}>
              <p className="inline-block text-xs font-bold mt-2">
            <OnHoverBar>
                READ MORE
            </OnHoverBar>
                </p>
          </Link>
          </div>
        </div>
      </TransitionFromBottom>
    </div>
  )
}

export default NewsCard