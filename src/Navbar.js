import React from 'react'

function Navbar({player1, player2, p1Score, p2Score, ties}) {
  return (
    <div className='navbar'>
        <div className='left'>
            Tic-Tac-Toe
        </div>
        <div className='right'>
            {player1}: {p1Score}     |
            {player2}: {p2Score}     |
            Ties: {ties}
        </div>
    </div>
  )
}

export default Navbar