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

const Board = ({board}) => {
    let board_squares = Array.from(Array(64).keys());
    const pieceOrEmpty = (board_tile) => {
        if (board_tile !== null) {
            return <img className='piece' src={board_tile}></img>
        } else {
            return <div></div>
        }
    }
    return (
        <div className='board'>
            {board_squares.map((tile) => (
                checkerBoard(tile) ?
                    <div className="tile-light" key={tile}>{pieceOrEmpty(board[tile])}</div> :
                    <div className="tile-dark" key={tile}>{pieceOrEmpty(board[tile])}</div>
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