import { useEffect } from "react";
import { workInfoType } from "../workInfo"
import {useInView} from 'react-intersection-observer'
import TransitionFromBottom from "../components/TransitionFromBottom";

type Props = {
  work: workInfoType;
};

const WorkDetail:React.FC<Props> = ({work}) => {
  const {ref, inView} = useInView({rootMargin: '-100px', triggerOnce: true});

  useEffect(()=>
    {
      console.log(inView)
    }
    ,[inView])

  return (
    <div className="w-10/12 md:w-3/5 flex flex-col items-center m-auto">
      <img className="mt-10" src={work.thumbnailImg} alt='thumbnail'/>
      <div className="w-full mt-24 md:mt-36 ">
        <p className="text-sm text-gray-500">{work.year}</p>
        <h3 ref={ref} className="text-lg mt-5 font-bold">{work.title}</h3>
        <div>
          {inView &&
          <TransitionFromBottom>
            <p  className="text-sm text-gray-500 leading-loose tracking-wide mt-5 whitespace-pre-wrap">{work.caption}</p>
          </TransitionFromBottom>
        }
        </div>
      </div>
      <div className="mt-10">
          {work.detailImgs.map((img, i)=>
            <img key={i} className="mt-10 mb-10" src={img} alt={`detail img${i}`} />
          )
          }
      </div>
    </div>
  )
}

export default WorkDetail