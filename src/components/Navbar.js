import React from 'react'

function Navbar({player1, player2, p1Score, p2Score, ties}) {
  return (
    <div className='navbar'>
        <div className='left'>
            Tic-Tac-Toe
        </div>
        <div className='right'>
            {player1}: {p1Score}
            <br/>
            {player2}: {p2Score}
            <br/>
            Ties: {ties}
        </div>
    </div>
  )
}

export default Navbar