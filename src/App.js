import logo from './logo.svg';
import './App.css';
import Board from './Board';
import React from 'react';

function App() {
  const [board, setBoard] = React.useState(Array.from(Array(64).keys()));
  const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const ranks = [1, 2, 3, 4, 5, 6, 7, 8];
  let new_board = [];
  let tile_idx = 0;
  for (let i = ranks.length - 1; i >= 0; i--) {
      for (let j = 0; j < files.length; j++) {
          //new_board.push(ranks[i] + files[j])
          new_board.push({idx: tile_idx, rank: ranks[i], file: files[j]});
          tile_idx++;
      }
  }
  return (
    <div className="App">
      <header className="App-header">
        <Board board={new_board}/>
      </header>
    </div>
  );
}

export default App;
