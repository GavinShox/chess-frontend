import './Board.css'
import React from 'react';

function checkerBoard(idx) {
    let rank = (Math.floor(idx / 8));
    let is_idx_even = (idx % 2) === 0;
    if ((rank % 2) === 0) {
        return is_idx_even ? true : false;
    } else {
        return is_idx_even ? false : true;
    }
}



const Board = ({board, handleClick}) => {
    let board_squares = Array.from(Array(64).keys());
    
    const pieceOrEmpty = (p) => {
        if (p.piecetype !== 0) {
            return <img className='piece' src={p.pieceimg}></img>
        } else {
            return <div></div>
        }
    }

    return (
        <div className='board'>
            {board_squares.map((tile, key) => (
                checkerBoard(tile) ?
                    <div className="tile-light" key={tile} onClick={event => handleClick(event, key)}>{pieceOrEmpty(board[tile])}</div> :
                    <div className="tile-dark" key={tile} onClick={event => handleClick(event, key)}>{pieceOrEmpty(board[tile])}</div>
            ))}
        </div>
    );
}

export default Board;