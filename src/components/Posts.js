import React from 'react';
import { DateTime } from 'luxon';
import { useNavigate } from 'react-router-dom'

const Posts = ( props ) => {
  const { post } = props;
  const navigate = useNavigate();

  return(
    <div className='Posts' onClick={ () => { navigate( `/posts/${ post._id }` ) } }>
      <div className='headings'>
        <p>{ DateTime.fromISO( post.date ).toLocaleString(DateTime.DATE_MED) }</p>
        <p>---</p>
        <p>{ post.user.userID }</p>
      </div>
      <p>
        { post.title }
      </p>
    </div>
  );
};

export { Posts };