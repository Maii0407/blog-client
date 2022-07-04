import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ( props ) => {
  const navigate = useNavigate();

  return (
    <div className='Header' onClick={ () => { navigate( '/' ) } }>
      <h1>{ props.textContent }</h1>
    </div>
  );
};

export { Header };