import TransitionFromBottom from "./TransitionFromBottom";

type Props = {
  image: string;
  title: string;
  delay: number;
};

const Thumbnail:React.FC<Props> = ({image, title, delay}) => {
  return (
    <TransitionFromBottom delay={delay}>
      <div className="w-3/5 md:w-2/5 m-auto mt-10 mb-10">
        <img src={image} alt='thumbnail' />
        <p className="font-bold text-xs md:text-sm">{title}</p>
      </div>
    </TransitionFromBottom>
  )
}

export default Thumbnail