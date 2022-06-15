import React from 'react'

function Square({value, handleClick, index}) {
  return (
    <div className='square' onClick={() => handleClick(index)}>{value}</div>
  )
}

export default Square