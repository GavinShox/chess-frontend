import './Board.css'
import React from 'react';

import WhitePawn from './assets/pieces/Chess_plt60.png'
import BlackPawn from './assets/pieces/Chess_pdt60.png'
import WhiteKnight from './assets/pieces/Chess_nlt60.png'
import BlackKnight from './assets/pieces/Chess_ndt60.png'
import WhiteBishop from './assets/pieces/Chess_blt60.png'
import BlackBishop from './assets/pieces/Chess_bdt60.png'
import WhiteRook from './assets/pieces/Chess_rlt60.png'
import BlackRook from './assets/pieces/Chess_rdt60.png'
import WhiteQueen from './assets/pieces/Chess_qlt60.png'
import BlackQueen from './assets/pieces/Chess_qdt60.png'
import WhiteKing from './assets/pieces/Chess_klt60.png'
import BlackKing from './assets/pieces/Chess_kdt60.png'

function checkerBoard(idx) {
    let rank = (Math.floor(idx / 8));
    let is_idx_even = (idx % 2) === 0;
    if ((rank % 2) === 0) {
        return is_idx_even ? true : false;
    } else {
        return is_idx_even ? false : true;
    }
}



const Board = ({board}) => {
    let board_squares = Array.from(Array(64).keys());
    const pieceOrEmpty = (p, id) => {
        if (p !== null) {
            return <img className='piece' src={p} id={id}></img>
        } else {
            return <div></div>
        }
    }
    const handleClick = (e) => {
        console.log(e.target);
        
    }
    // const getPieceImg = (piece) => {
    //     console.log("here");
    //     if (piece.piecetype == 0 && piece.piececolour == 0) {

    //     } else if (piece.piecetype == 0 && piece.piececolour == 0) {

    //     }else if (piece.piecetype == 1 && piece.piececolour == 0) {
            
    //     }else if (piece.piecetype == 2 && piece.piececolour == 0) {
    
    //     }else if (piece.piecetype == 3 && piece.piececolour == 0) {
            
    //     }else if (piece.piecetype == 4 && piece.piececolour == 0) {
            
    //     }else if (piece.piecetype == 5 && piece.piececolour == 0) {
            
    //     }else if (piece.piecetype == 6 && piece.piececolour == 0) {
            
    //     }else if (piece.piecetype == 0 && piece.piececolour == 1) {
            
    //     }else if (piece.piecetype == 0 && piece.piececolour == 1) {
            
    //     }else if (piece.piecetype == 0 && piece.piececolour == 1) {
            
    //     }else if (piece.piecetype == 0 && piece.piececolour == 1) {
            
    //     }else if (piece.piecetype == 0 && piece.piececolour == 1) {
            
    //     }
    //     switch (piece.piecetype, piece.piececolour) {
    //         case (0, 0): return null;
    //         case (1, 0): return WhitePawn;
    //         case (2, 0): return WhiteKnight;
    //         case (3, 0): return WhiteBishop;
    //         case (4, 0): return WhiteRook;
    //         case (5, 0): return WhiteQueen;
    //         case (6, 0): return WhiteKing;
    //         case (0, 1): return null;
    //         case (1, 1): return BlackPawn;
    //         case (2, 1): return BlackKnight;
    //         case (3, 1): return BlackBishop;
    //         case (4, 1): return BlackRook;
    //         case (5, 1): return BlackQueen;
    //         case (6, 1): return BlackKing;
    //     }
    //     console.log("here");

    //     return null;
    // }
    return (
        <div className='board'>
            {board_squares.map((tile) => (
                checkerBoard(tile) ?
                    <div className="tile-light" key={tile}>{pieceOrEmpty(board[tile].pieceimg)}</div> :
                    <div className="tile-dark" key={tile}>{pieceOrEmpty(board[tile].pieceimg)}</div>
            ))}
        </div>
        // <table className="board">
        //     <tr>
        //         <th></th>
        //         <th>A</th>
        //         <th>B</th>
        //         <th>C</th>
        //         <th>D</th>
        //         <th>E</th>
        //         <th>F</th>
        //         <th>G</th>
        //         <th>H</th>
        //     </tr>
        //     <tr>
        //         <th>8</th>
        //         <td className='light'></td>
        //         <td className='dark'></td>
        //         <td className='light'></td>
        //         <td className='dark'></td>
        //         <td className='light'></td>
        //         <td className='dark'></td>
        //         <td className='light'></td>
        //         <td className='dark'></td>
        //     </tr>
        //     <tr>
        //         <th>7</th>
        //         <td className='dark'></td>
        //         <td className='light'></td>
        //         <td className='dark'></td>
        //         <td className='light'></td>
        //         <td className='dark'></td>
        //         <td className='light'></td>
        //         <td className='dark'></td>
        //         <td className='light'></td>
        //     </tr>
        //     <tr>
        //         <th>6</th>
        //         <td className='light'></td>
        //         <td className='dark'></td>
        //         <td className='light'></td>
        //         <td className='dark'></td>
        //         <td className='light'></td>
        //         <td className='dark'></td>
        //         <td className='light'></td>
        //         <td className='dark'></td>
        //     </tr>
        //     <tr>
        //         <th>5</th>
        //         <td className='dark'></td>
        //         <td className='light'></td>
        //         <td className='dark'></td>
        //         <td className='light'></td>
        //         <td className='dark'></td>
        //         <td className='light'></td>
        //         <td className='dark'></td>
        //         <td className='light'></td>
        //     </tr>
        //     <tr>
        //         <th>4</th>
        //         <td className='light'></td>
        //         <td className='dark'></td>
        //         <td className='light'></td>
        //         <td className='dark'></td>
        //         <td className='light'></td>
        //         <td className='dark'></td>
        //         <td className='light'></td>
        //         <td className='dark'></td>
        //     </tr>
        //     <tr>
        //         <th>3</th>
        //         <td className='dark'></td>
        //         <td className='light'></td>
        //         <td className='dark'></td>
        //         <td className='light'></td>
        //         <td className='dark'></td>
        //         <td className='light'></td>
        //         <td className='dark'></td>
        //         <td className='light'></td>
        //     </tr>
        //     <tr>
        //         <th>2</th>
        //         <td className='light'></td>
        //         <td className='dark'></td>
        //         <td className='light'></td>
        //         <td className='dark'></td>
        //         <td className='light'></td>
        //         <td className='dark'></td>
        //         <td className='light'></td>
        //         <td className='dark'></td>
        //     </tr>
        //     <tr>
        //         <th>1</th>
        //         <td className='dark'></td>
        //         <td className='light'></td>
        //         <td className='dark'></td>
        //         <td className='light'></td>
        //         <td className='dark'></td>
        //         <td className='light'></td>
        //         <td className='dark'></td>
        //         <td className='light'></td>
        //     </tr>
        // </table>
    );
}

export default Board;