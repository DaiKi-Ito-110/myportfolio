import NavElement from './NavElement';

type Props = {
  onClick: ()=>void;
};

const NavMenu:React.FC<Props> = ({onClick}) => {
  return (
    <nav  className="pt-10 fixed w-screen h-screen bg-white  flex justify-center">
      <div onClick={onClick} className='text-lg font-bold mt-10 w-10/12 h-1/3 flex flex-col justify-between items-center divide-y divide-dotted divide-gray-500'>
        <NavElement linkTo='/works' elementName='WORKS'/>
        <NavElement linkTo='/about' elementName='ABOUT' />
        <NavElement linkTo='/contact' elementName='CONTACT' />
      </div>
    </nav>
  )
}

export default NavMenu