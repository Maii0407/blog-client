import React from 'react'

const PostDetail = ( props ) => {
  const { post } = props;

  return(
    <div className='PostDetail'>
      <p>{ post._id }</p>
    </div>
  );
};

export { PostDetail };