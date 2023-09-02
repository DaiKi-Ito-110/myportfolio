import { Link} from "react-router-dom";
import TransitionFromBottom from "./TransitionFromBottom";
import TransitionScaleUpOnHover from "./TransitionScaleUpOnHover";

type Props = {
  image: string;
  title: string;
  delay: number;
  pageLink: string;
};

const Thumbnail:React.FC<Props> = ({image, title, delay, pageLink}) => {
  return (
    <TransitionFromBottom delay={delay}>
        <div className="w-3/5 md:w-2/5 m-auto mt-10">
          <Link to={pageLink}>
            <div className="overflow-hidden">
              <TransitionScaleUpOnHover>
                <img src={image} alt='thumbnail' />
              </TransitionScaleUpOnHover>
            </div>
            <p className="mt-1 font-bold text-xs">{title}</p>
          </Link>
        </div>
    </TransitionFromBottom>
  )
}

export default Thumbnail