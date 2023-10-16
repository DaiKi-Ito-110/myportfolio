import React from 'react';
import {Link} from 'react-router-dom'
import OnHoverBar from './OnHoverBar';

type Props = {
  linkTo: string;
  elementName: string;
};

const FooterLink:React.FC<Props> = ({linkTo, elementName}) => {
  return (
    <div className='flex items-center'>
      <OnHoverBar>
        <Link to={linkTo} className='font-bold'>{elementName}</Link>
      </OnHoverBar>
    </div>
  )
}

export default FooterLink