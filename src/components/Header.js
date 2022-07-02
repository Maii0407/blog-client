import React from 'react';

const Header = ( props ) => {
  return (
    <div className='Header'>
      <h1>{ props.textContent }</h1>
    </div>
  );
};

export { Header };