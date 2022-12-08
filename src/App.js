import logo from './logo.svg';
import './App.css';
import Board from './Board';
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

class Piece {
  piecetype;
  piececolour;
  pieceimg;

}

function App() {
  // const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
  // const ranks = [1, 2, 3, 4, 5, 6, 7, 8];
  let new_board = [];
//  let tile_idx = 0;
  // for (let i = ranks.length - 1; i >= 0; i--) {
  //   for (let j = 0; j < files.length; j++) {
  //     //new_board.push(ranks[i] + files[j])
  //     new_board.push({ idx: tile_idx, piece: "" });
  //     tile_idx++;
  //   }
  // }
  new_board.push({piecetype: 4, piececolour: 1, pieceimg: BlackRook});
  new_board.push({piecetype: 2, piececolour: 1, pieceimg: BlackKnight});
  new_board.push({piecetype: 3, piececolour: 1, pieceimg: BlackBishop});
  new_board.push({piecetype: 5, piececolour: 1, pieceimg: BlackQueen});
  new_board.push({piecetype: 6, piececolour: 1, pieceimg: BlackKing});
  new_board.push({piecetype: 3, piececolour: 1, pieceimg: BlackBishop});
  new_board.push({piecetype: 2, piececolour: 1, pieceimg: BlackKnight});
  new_board.push({piecetype: 4, piececolour: 1, pieceimg: BlackRook});
  for (let i = 8; i < 16; i++) {
    new_board.push({piecetype: 1, piececolour: 1, pieceimg: BlackPawn});
  }
  for (let i = 16; i < 48; i++) {
    new_board.push({piecetype: 0, piececolour: 0, pieceimg: null});
  }
  for (let i = 48; i < 56; i++) {
    new_board.push({piecetype: 1, piececolour: 0, pieceimg: WhitePawn});
  }
  new_board.push({piecetype: 4, piececolour: 0, pieceimg: WhiteRook});
  new_board.push({piecetype: 2, piececolour: 0, pieceimg: WhiteKnight});
  new_board.push({piecetype: 3, piececolour: 0, pieceimg: WhiteBishop});
  new_board.push({piecetype: 5, piececolour: 0, pieceimg: WhiteQueen});
  new_board.push({piecetype: 6, piececolour: 0, pieceimg: WhiteKing});
  new_board.push({piecetype: 3, piececolour: 0, pieceimg: WhiteBishop});
  new_board.push({piecetype: 2, piececolour: 0, pieceimg: WhiteKnight});
  new_board.push({piecetype: 4, piececolour: 0, pieceimg: WhiteRook});

  const [board, setBoard] = React.useState(new_board);
  const [move, setMove] = React.useState([null, null])

  const handleClick = (e, k) => {
    let newboard = board.slice();

    let newmove = move.slice();
    for (let i = 0; i < move.length; i++) {
      if (newmove[i] === null) {
        newmove[i] = k;
        break;
      }
    }
    setMove(newmove);
    if (move[0] !== null && move[1] !== null) {
      console.log("here");
      newboard[move[1]] = newboard[move[0]];
      newboard[move[0]] = {piecetype: 0, piececolour: 0, pieceimg: null};

      setBoard(newboard);
      setMove([null, null]);
    }
    console.log(move);
    //console.log(board);
}
  return (
    <div className="App">
      <header className="App-header">
        <Board board={board} handleClick={handleClick} />
      </header>
    </div>
  );
}

export default App;
