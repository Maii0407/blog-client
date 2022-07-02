import React, { useState, useEffect } from 'react';

import { Header } from './components/Header';

const App = () => {
  const [ postData, setPostData ] = useState([]);

  useEffect( () => {
    const getPostData = async () => {
      const link = 'http://localhost:4000/posts';
  
      try {
        const response = await fetch( link, { method: 'GET', mode: 'cors' });
        const data = await response.json();
        setPostData( data.postList );
        console.log( data.postList )
      }
      catch( err ) {
        console.log( err );
      }
    }

    if( postData.length === 0 ) {
      getPostData();
    }
  }, [ postData ]);

  return (
    <div className='App'>
      <Header textContent='readPOSTs'/>
    </div>
  );
};

export { App };