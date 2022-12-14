import './Board.css'
import React, { useState } from 'react';

import Piece from './Piece';
import {Piece as PieceObj} from './App';


function checkerBoard(idx) {
    let rank = (Math.floor(idx / 8));
    let is_idx_even = (idx % 2) === 0;
    if ((rank % 2) === 0) {
        return is_idx_even ? true : false;
    } else {
        return is_idx_even ? false : true;
    }
}


const Board = ({ setBoard, board, handleClick }) => {

    const makeMove = ({from, to, capture}) => {
        console.log({from, to, capture});
        let new_board = board.slice();
        new_board[capture] = new PieceObj(0, 0);
        new_board[to] = new_board[from];
        new_board[from] = new PieceObj(0, 0);

        setBoard(new_board);
    }

    let squares = Array.from(Array(64).keys());
    const [dragPiece, setDragPiece] = useState(null);

    const onDragStart = (e, piece) => {
        //e.preventDefault();
        setDragPiece(piece);
    }

    const onDragEnter = (e, piece) => {
        // e.stopPropagation();
        e.preventDefault();

        //console.log("drag piece: ", piece);
    }

    const onDrop = (e, piece) => {
        // e.stopPropagation();
        console.log(e.currentTarget);
        console.log(piece, "drop");
        e.preventDefault();
        makeMove({from: dragPiece, to: piece, capture: piece});

        setDragPiece(null);
    }

    const onDragOver = (e, piece) => {
        // e.stopPropagation();
        e.preventDefault();
        //setDropPiece(piece);
        //console.log("drop piece: ", dropPiece)
    }

    return (
        <div className='board'>
            {squares.map((tile, key) => (
                checkerBoard(tile) ?
                    <div className="tile-light" key={tile} onClick={event => handleClick(event, key)}>
                        <div className='piece'>
                            {<Piece piece={board[tile]} onDragStart={(e) => onDragStart(e, tile)} onDragOver={(e) => onDragOver(e, tile)} onDragEnter={(e) => { onDragEnter(e, tile) }} onDragEnd={(e) => { onDrop(e, tile) }}/>}
                        </div>
                    </div> :
                    <div className="tile-dark" key={tile} onClick={event => handleClick(event, key)}>
                        <div className='piece'>
                            {<Piece piece={board[tile]} onDragStart={(e) => onDragStart(e, tile)} onDragOver={(e) => onDragOver(e, tile)} onDragEnter={(e) => { onDragEnter(e, tile) }} onDragEnd={(e) => { onDrop(e, tile) }}/>}
                        </div>
                    </div>
            ))}
        </div>
    );
}

export default Board;