import React, { useState, useEffect } from 'react';
import { DateTime } from 'luxon';

const Posts = ( props ) => {
  const { post } = props;

  return(
    <div className='Posts'>
      <div className='headings'>
        <p>{ DateTime.fromISO( post.date ).toLocaleString(DateTime.DATE_MED) }</p>
        <p>{ post.user.userID }</p>
      </div>
      <p>
        { post.title }
      </p>
    </div>
  );
};

export { Posts };