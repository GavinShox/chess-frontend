import logo from './logo.svg';
import './App.css';
import Board from './Board';
import React, { useEffect } from 'react';

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

const startBoard = () => {
    let new_board = [];

    new_board.push(new Piece(4, 1));
    new_board.push(new Piece(2, 1));
    new_board.push(new Piece(3, 1));
    new_board.push(new Piece(5, 1));
    new_board.push(new Piece(6, 1));
    new_board.push(new Piece(3, 1));
    new_board.push(new Piece(2, 1));
    new_board.push(new Piece(4, 1));
    for (let i = 8; i < 16; i++) {
      new_board.push(new Piece(1, 1));
    }
    for (let i = 16; i < 48; i++) {
      new_board.push(new Piece(0, 0));
    }
    for (let i = 48; i < 56; i++) {
      new_board.push(new Piece(1, 0));
    }
    new_board.push(new Piece(4, 0));
    new_board.push(new Piece(2, 0));
    new_board.push(new Piece(3, 0));
    new_board.push(new Piece(5, 0));
    new_board.push(new Piece(6, 0));
    new_board.push(new Piece(3, 0));
    new_board.push(new Piece(2, 0));
    new_board.push(new Piece(4, 0));
    console.log('here new board')
    return new_board;
}

export class Piece {
  piecetype;
  piececolour;

  constructor(piecetype, piececolour) {
    this.piecetype = piecetype;
    this.piececolour = piececolour;
  }

  getImg() {
    if (this.piececolour == 0) {
      switch(this.piecetype){
        case 0: return null;
        case 1: return WhitePawn;
        case 2: return WhiteKnight;
        case 3: return WhiteBishop;
        case 4: return WhiteRook;
        case 5: return WhiteQueen;
        case 6: return WhiteKing;
        default: return null;
      }
    } else {
      switch(this.piecetype){
        case 0: return null;
        case 1: return BlackPawn;
        case 2: return BlackKnight;
        case 3: return BlackBishop;
        case 4: return BlackRook;
        case 5: return BlackQueen;
        case 6: return BlackKing;
        default: return null;
      }
    }
  }
}


function App() {
  //console.log('hereapp');
  // const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
  // const ranks = [1, 2, 3, 4, 5, 6, 7, 8];
 

  const [board, setBoard] = React.useState(null);
  const [move, setMove] = React.useState([null, null])

  useEffect(() => {
    let start = startBoard();
    setBoard(start);
    console.log('stateused');
  }, []);

  const handleClick = (e, k) => {
    let newboard = board.slice();
    let newmove = move.slice();

    for (let i = 0; i < move.length; i++) {
      if (newmove[i] === null) {
        newmove[i] = k;
        console.log(k);
        break;
      }
    }
    if (newmove[0] !== null && newmove[1] !== null) {
      newboard[newmove[1]] = newboard[newmove[0]];
      newboard[newmove[0]] = new Piece(0, 0);

      setBoard(newboard);
      setMove([null, null]);
    } 
    else {
      setMove(newmove);
    }

    //console.log(move);
    //console.log(board);
}
//console.log(board);
  return board ? (
    <div className="App">
      <header className="App-header">
        <Board key={0} setBoard={setBoard} board={board} handleClick={handleClick} />
      </header>
    </div>
  ) : <p>Loading Board...</p>;
}

export default App;
