import prof from '../profileInfo';

const Profile:React.FC = () => {
  return (
    <div className='w-5/6 sm:w-2/3 md:w-1/2 lg:w-2/5 flex flex-col items-center m-auto'>
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