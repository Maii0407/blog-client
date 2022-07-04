import React, { useState, useEffect } from 'react';

import { Header } from './components/Header';
import { Posts } from './components/Posts';

const App = () => {
  const [ postListData, setPostListData ] = useState([]);

  useEffect( () => {
    const getPostData = async () => {
      const link = 'http://localhost:4000/posts';
  
      try {
        const response = await fetch( link, { method: 'GET', mode: 'cors' });
        const data = await response.json();
        setPostListData( data.postList );
        console.log( data.postList )
      }
      catch( err ) {
        console.log( err );
      }
    }

    if( postListData.length === 0 ) {
      getPostData();
    }
  }, [ postListData ]);

  return (
    <div className='App'>
      <Header textContent='MYblog'/>
      <div className='post-container'>
        {
          postListData.map( ( post ) => {
            return <Posts key={ post._id } post={ post } />
          })
        }
      </div>
    </div>
  );
};

export { App };