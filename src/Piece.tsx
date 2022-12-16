import './Piece.css';
import React, { useState } from 'react';
import { Piece as PieceObj } from './App';
import { DragEventHandler } from 'react';

interface PieceProps {
    piece: PieceObj,
    onDragEnter: React.DragEventHandler,
    onDragOver: React.DragEventHandler,
    onDragEnd: React.DragEventHandler,
    onDragStart: React.DragEventHandler
}

const Piece: React.FunctionComponent<PieceProps> = ({piece, onDragEnter, onDragOver, onDragEnd, onDragStart}: PieceProps) => {
    const [legalMoves, setLegalMoves] = useState([]);
    if (piece.pieceType === 0 && piece.pieceColour === 0) {
        return ( 
            <div onDragStart={onDragStart} onDragEnter={onDragEnter} onDragOver={onDragOver} onDrop={onDragEnd} className="piece">
                
            </div> 
        );
    } else {
        return ( 
            <div draggable onDragStart={onDragStart} onDragEnter={onDragEnter} onDragOver={onDragOver} onDrop={onDragEnd} className="piece">
                <img className="piece-img" src={piece.getImg()} alt='piece' ></img>
            </div> 
        );
    }

}
 
export default Piece;