import React from 'react'
import loadingpic from './Spinner.gif'
const Spinner =()=> {

    return (
      <div className='text-center'>
        <img src={loadingpic} width="50px" alt='loading'/>
      </div>
    )

}

export default Spinner
