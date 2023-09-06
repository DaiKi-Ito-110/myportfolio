import React from "react";
import { useState } from "react";

import { workInfoContentType } from "../workInfo"
import {useInView} from 'react-intersection-observer'
import TransitionFromBottom from "../components/TransitionFromBottom";
import OnHoverBar from "../components/OnHoverBar";
import {VscTriangleDown, VscTriangleUp} from 'react-icons/vsc'
import YoutubeVideo from "../components/YoutubeVideo";

type Props = {
  work: workInfoContentType;
};

const WorkDetail:React.FC<Props> = ({work}) => {
  const [ref, inView] = useInView({rootMargin: '-100px', triggerOnce: true});
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <div className="relative w-10/12 md:w-4/5 flex flex-col items-center m-auto mt-10 mb-20">
      <img className="w-full" src={work.thumbnailImg} alt='thumbnail'/>
      <div className="w-full mt-24 md:mt-36 mb-24 md:mb-36 ">
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
      <YoutubeVideo videoSrc={work.youtubeUrl} thumbnail={work.thumbnailImg}/>
      <div className="mt-5 grid grid-cols-2 gap-5">
        {work.detailImgs.map((img,i)=>
          ( i < 4  ?
            <img key={i} className="" src={img} alt={`detail img${i}`} />:
            <img key={i} className={`${!isVisible && 'hidden'}`} src={img} alt={`detail img${i}`} />
          )
        )}
      </div>
      {!work.notNeedLoadMoreButton &&
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
      }
    </div>
  )
}

export default WorkDetail