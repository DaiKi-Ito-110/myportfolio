import TransitionFromBottom from "../components/TransitionFromBottom";

type Props = {
  title: string;
  thumbnail: string;
  detailImgs: string[];
};

const WorkDetail:React.FC<Props> = ({title, thumbnail, detailImgs}) => {
  return (
    <div>
      <h3>{title}</h3>
      <img src={thumbnail} alt='thumbnail'/>
        {detailImgs.map((img, i)=>
          <TransitionFromBottom delay={i*0.1}>
            <img src={img} alt={`detail img${i}`} />
          </TransitionFromBottom>
        )}
    </div>
  )
}

export default WorkDetail