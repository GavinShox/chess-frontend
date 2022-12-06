import './Board.css'
import React from 'react';

class Tile {

}

function checkerBoard(idx) {
    let rank = (Math.floor(idx / 8));
    if ((rank % 2) == 0) {
        return ((idx % 2) == 0) ? true : false;
    } else {
        return ((idx % 2) == 0) ? false: true;
    }
    
}

const Board = ({board}) => {
    return ( 
        <div className='board'>
            {board.map((tile) => (
                (checkerBoard(tile.idx)) ? <div className="tile-light" key={tile.idx}>{tile.file} {tile.rank}</div> : <div className="tile-dark" key={tile.idx}>{tile.file} {tile.rank}</div>
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