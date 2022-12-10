import './Piece.css';
import React, { useState } from 'react';

const Piece = ({piece, onDragEnter, onDragOver, onDragEnd, onDragStart}) => {
    const [legalMoves, setLegalMoves] = useState([]);
    return ( <div draggable onDragStart={onDragStart} onDragEnter={onDragEnter} onDragOver={onDragOver} onDrop={onDragEnd} className="piece"><img className="pieceImg" src={piece.getImg()} ></img></div> );
}
 
export default Piece;