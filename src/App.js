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

function App() {
  const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const ranks = [1, 2, 3, 4, 5, 6, 7, 8];
  let new_board = [];
  let tile_idx = 0;
  // for (let i = ranks.length - 1; i >= 0; i--) {
  //   for (let j = 0; j < files.length; j++) {
  //     //new_board.push(ranks[i] + files[j])
  //     new_board.push({ idx: tile_idx, piece: "" });
  //     tile_idx++;
  //   }
  // }
  new_board.push(BlackRook);
  new_board.push(BlackKnight);
  new_board.push(BlackBishop);
  new_board.push(BlackQueen);
  new_board.push(BlackKing);
  new_board.push(BlackBishop);
  new_board.push(BlackKnight);
  new_board.push(BlackRook);
  for (let i = 8; i < 16; i++) {
    new_board.push(BlackPawn);
  }
  for (let i = 16; i < 48; i++) {
    new_board.push(null);
  }
  for (let i = 48; i < 56; i++) {
    new_board.push(WhitePawn);
  }
  new_board.push(WhiteRook);
  new_board.push(WhiteKnight);
  new_board.push(WhiteBishop);
  new_board.push(WhiteQueen);
  new_board.push(WhiteKing);
  new_board.push(WhiteBishop);
  new_board.push(WhiteKnight);
  new_board.push(WhiteRook);

  const [board, setBoard] = React.useState(new_board);
  return (
    <div className="App">
      <header className="App-header">
        <Board board={board} />
      </header>
    </div>
  );
}

export default App;
