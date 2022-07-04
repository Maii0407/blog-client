import React, { useState, useEffect } from 'react'

const PostDetail = ( props ) => {
  const { post } = props;
  const [ commentListData, setCommentListData ] = useState([]);
  const [ commentFetched, setCommentFetched ] = useState( false );

  useEffect( () => {
    const getCommentListData = async () => {
      const link = `https://maii-restapi.herokuapp.com/posts/${ post._id }/comments`;
  
      try {
        const response = await fetch( link, { method: 'GET', mode: 'cors' });
        const data = await response.json();
        setCommentListData( data.commentList );
        console.log( data.commentList )
      }
      catch( err ) {
        console.log( err );
      }
    };

    if( commentFetched !== true ) {
      getCommentListData();
      setCommentFetched( true );
    }
  }, [ commentListData, commentFetched, post]);

  return(
    <div className='PostDetail'>
      <p>{ post._id }</p>
    </div>
  );
};

export { PostDetail };