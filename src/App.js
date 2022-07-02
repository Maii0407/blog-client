import React, { useState, useEffect } from 'react';

const App = () => {
  const [ postData, setPostData ] = useState([]);

  const getPostData = async () => {
    const link = 'http://localhost:4000/posts';

    try {
      const response = await fetch( link, { method: 'GET', mode: 'cors' });
      const data = await response.json();
      setPostData( data.postList );
    }
    catch( err ) {
      console.log( err );
    }
  }

  useEffect( () => {
    if( postData.length === 0 ) {
      getPostData();
    }
  }, [ postData ]);

  return (
    <div>
      <div>
        Hello World
      </div>
      <div>
        {
          postData.map( ( post ) => {
            return <div key={ post._id }>{ post.title }</div>
          })
        }
      </div>
    </div>
  );
};

export { App };