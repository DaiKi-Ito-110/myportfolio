import {Link} from 'react-router-dom'

type Props = {
  linkTo: string;
  elementName: string;
};

const NavElement:React.FC<Props> = ({linkTo, elementName}) => {
  return (
      <Link to={linkTo} className='w-10/12 h-1/3 flex items-center justify-center'>
        {elementName}
      </Link>
  )
}

export default NavElement