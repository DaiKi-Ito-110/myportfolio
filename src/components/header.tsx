import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex flex-row w-full justify-between mt-2 sticky top-0 left-0'>
      <Link to='/'>
        <h1 className='text-xl font-bold ml-10'>
          Daiki Ito
        </h1>
      </Link>
      <div className='hidden text-lg md:flex w-1/3 justify-between mr-10'>
        <Link to='/works'>Works</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </div>
      <div className='mr-10 md:hidden'>
        humberger
      </div>
    </div>
  )
}

export default Header