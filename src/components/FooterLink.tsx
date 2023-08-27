import {Link} from 'react-router-dom'

type Props = {
  linkTo: string;
  elementName: string;
};

const FooterLink:React.FC<Props> = ({linkTo, elementName}) => {
  return (
    <Link to={linkTo} className='font-bold flex items-center'>{elementName}</Link>
  )
}

export default FooterLink