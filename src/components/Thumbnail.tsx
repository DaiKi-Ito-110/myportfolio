import { Link} from "react-router-dom";
import TransitionFromBottom from "./TransitionFromBottom";

type Props = {
  image: string;
  title: string;
  delay: number;
  pageLink: string;
};

const Thumbnail:React.FC<Props> = ({image, title, delay, pageLink}) => {
  return (
    <TransitionFromBottom delay={delay}>
        <Link to={pageLink}>
          <div className="w-3/5 md:w-2/5 m-auto mt-10">
            <img src={image} alt='thumbnail' />
            <p className="font-bold text-xs md:text-sm">{title}</p>
          </div>
        </Link>
    </TransitionFromBottom>
  )
}

export default Thumbnail