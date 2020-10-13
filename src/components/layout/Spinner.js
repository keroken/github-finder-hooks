import React, { Fragment } from 'react'
import spinner from './spinner.gif';

const Spinner = () => {
  return (
    <Fragment>
      <img src={spinner}
        alt="Loading...."
        style={{ width: '200px', margin: 'auto', display: 'black' }}
      />
    </Fragment>
  )
}

export default Spinner;
