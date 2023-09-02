import { workInfoContentType } from "../workInfo"
import {useInView} from 'react-intersection-observer'
import TransitionFromBottom from "../components/TransitionFromBottom";
import { useState } from "react";
import OnHoverBar from "../components/OnHoverBar";
import {VscTriangleDown, VscTriangleUp} from 'react-icons/vsc'

type Props = {
  work: workInfoContentType;
};

const WorkDetail:React.FC<Props> = ({work}) => {
  const [ref, inView] = useInView({rootMargin: '-100px', triggerOnce: true});
  const [isVisible, setIsVisible] = useState<boolean>(false);


  return (
    <div className="relative w-10/12 md:w-4/5 flex flex-col items-center m-auto">
      <img className="w-full mt-10" src={work.thumbnailImg} alt='thumbnail'/>
      <div className="w-full mt-24 md:mt-36 ">
        <p className="text-sm text-gray-500">{work.year}</p>
        <h3 className="text-lg mt-5 font-bold">{work.title}</h3>
        <div ref={ref}>
          {inView &&
          <TransitionFromBottom>
            <p  className="text-sm text-gray-500 leading-loose tracking-wide mt-5 whitespace-pre-wrap">{work.caption}</p>
          </TransitionFromBottom>
          }
        </div>
      </div>
      <div className="mt-24 grid grid-cols-2 gap-5">
        {work.detailImgs.map((img,i)=>
          ( i < 4  ?
            <img key={i} className="" src={img} alt={`detail img${i}`} />:
            <img key={i} className={`${!isVisible && 'hidden'}`} src={img} alt={`detail img${i}`} />
          )
        )}
      </div>
      <div className="absolute -bottom-10 left-0">
          <button onClick={()=>setIsVisible(!isVisible)} className={`font-bold`}>
            <OnHoverBar>
                <div className="flex items-end gap-x-2.5">
                  {!isVisible ? 'load more' : 'collapse'}
                  {!isVisible ? <VscTriangleDown className='text-sm -translate-y-0.5' /> : <VscTriangleUp className='text-sm -translate-y-0.5' />}
                </div>

            </OnHoverBar>
          </button>
      </div>
    </div>
  )
}

export default WorkDetail