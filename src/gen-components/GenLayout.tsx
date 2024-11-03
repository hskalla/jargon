import React from 'react';
import './GenLayout.css';
import Rules from './Rules';

function GenLayout() {
  return (
    <div className='row'>
        <div className='dynamic-column'>
            <Rules/>
        </div>
        <div className='static-column'>
            <p>hello</p>
        </div>
    </div>
  )
}

export default GenLayout