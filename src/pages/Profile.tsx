import React from 'react';
import prof from '../profileInfo';

const Profile:React.FC = () => {
  return (
    <div className='w-5/6 sm:w-2/3 md:w-1/2 lg:w-2/5 flex flex-col items-center m-auto mt-10 mb-20'>
      <img src={prof.myImg} alt='image' />
      <div className='w-full mt-10'>
        <h1 className='text-right font-bold'>{prof.name}</h1>
        <p className='whitespace-pre-wrap font-normal text-left mt-5 text-sm w-full break-words'>{prof.statement}</p>
      </div>
      <div className='w-full mt-16'>
        <p className='text-left font-bold mb-5'>BIO</p>
        {prof.bio.map((bio, i) => (
          <p key={i} className='whitespace-pre-wrap text-xs mb-2'>{bio}</p>
        )
        )}
      </div>
      <div className='w-full mt-16'>
        <p className='text-left font-bold mb-5'>EXHIBITS</p>
        {prof.exhibits.map((exhibit, i) => (
          <div key={i} className='mb-2'>
            <p className='whitespace-pre-wrap text-xs'>{exhibit.year}</p>
            <a href={exhibit.link} className='underline underline-offset-2 whitespace-pre-wrap text-xs'>{exhibit.title}</a>
          </div>
        )
        )}
      </div>
      <div className='w-full mt-16'>
        <p className='text-left font-bold mb-5'>PAPER</p>
        {prof.paper.map((paper, i) => (
          <div key={i} className='mb-2'>
            <p className='whitespace-pre-wrap text-xs'>{paper.year}</p>
            <a href={paper.link} className='underline underline-offset-2 whitespace-pre-wrap text-xs'>{paper.title}</a>
          </div>
        )
        )}
      </div>
      <div className='w-full mt-16'>
        <p className='text-left font-bold mb-2'>SNS</p>
        {prof.sns.map((sns, i) => (
          <div key={i} className=''>
            <a href={sns.link} className='underline underline-offset-2 hover:opacity-50 whitespace-pre-wrap text-xs'>{sns.title}</a>
          </div>
        )
        )}
      </div>
      <div className='w-full mt-16'>
        <p className='text-left font-bold mb-2'>CONTACT</p>
        <p className='text-xs'>{prof.contact}</p>
      </div>
    </div>
  )
}

export default Profile