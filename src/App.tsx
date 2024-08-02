import './App.css';
import Board from './Board';
import Clock from './Clock';
import React, { useEffect, useState, Dispatch, SetStateAction } from 'react';

import WhitePawn from './assets/pieces/plt45.svg'
import BlackPawn from './assets/pieces/pdt45.svg'
import WhiteKnight from './assets/pieces/nlt45.svg'
import BlackKnight from './assets/pieces/ndt45.svg'
import WhiteBishop from './assets/pieces/blt45.svg'
import BlackBishop from './assets/pieces/bdt45.svg'
import WhiteRook from './assets/pieces/rlt45.svg'
import BlackRook from './assets/pieces/rdt45.svg'
import WhiteQueen from './assets/pieces/qlt45.svg'
import BlackQueen from './assets/pieces/qdt45.svg'
import WhiteKing from './assets/pieces/klt45.svg'
import BlackKing from './assets/pieces/kdt45.svg'

import ClockImg from './assets/pocket-watch.png';


export type Dispatcher<S> = Dispatch<SetStateAction<S>>;



const startBoard = () => {
  let new_board: Piece[] = [];

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
  return new_board;
}

// TODO remove classes
export class Piece {
  pieceType: number;
  pieceColour: number;

  constructor(piecetype: number, piececolour: number) {
    this.pieceType = piecetype;
    this.pieceColour = piececolour;
  }

  getImg() {
    if (this.pieceColour == 0) {
      switch (this.pieceType) {
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
      switch (this.pieceType) {
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


  const [board, setBoard] = React.useState<Piece[]>([]);


  useEffect(() => {
    let start: Piece[] = startBoard();
    setBoard(start);
    console.log('stateused');
  }, []);
  const [isStopped, setIsStopped] = React.useState<boolean>(false);
  const [isPaused, setIsPaused] = React.useState<boolean>(true);
  console.log(isStopped);
  return board.length > 0 ? (
    <div className="App">
      <div className='Board'>
        {/* <div className="Clock">
          <img className='Clock' src={ClockImg} alt="clock" />
          <Clock startTime={10} isPaused={isPaused} setIsStopped={setIsStopped}/>
        </div> */}
        <Board key={0} setBoard={setBoard} board={board} />

        {/* <div className="Clock">
          <img className='Clock' src={ClockImg} alt="clock" />  
          <Clock startTime={10} isPaused={isPaused} setIsStopped={setIsStopped}/>
        </div> */}



      </div>
    </div>
  ) : <p>Loading Board...</p>;
}

export default App;
