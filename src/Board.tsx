import './Board.css'
import React, { useEffect, useState } from 'react';

import Piece from './Piece';
import { Piece as PieceObj, Dispatcher } from './App';


function checkerBoard(idx: number) {
    let rank = (Math.floor(idx / 8));
    let is_idx_even = (idx % 2) === 0;
    if ((rank % 2) === 0) {
        return is_idx_even ? true : false;
    } else {
        return is_idx_even ? false : true;
    }
}


interface BoardProps {
    board: PieceObj[],
    setBoard: Dispatcher<PieceObj[]>
}


interface BoardMove {
    from: number,
    to: number,
    capture: number
}


const Board: React.FunctionComponent<BoardProps> = ({ board, setBoard }: BoardProps) => {

    const [legalMoves, setLegalMoves] = React.useState<BoardMove[]>([]);
    const [dragHighlight, setDragHighlight] = React.useState<number>();
    const [clickHighlight, setClickHighlight] = React.useState<number>();
    useEffect(() => {
        setLegalMoves([{ from: 52, to: 36, capture: 36 },]);
    }, [])

    //todo useeffect updates legal moves on board change?

    const makeMove = ({ from, to, capture }: BoardMove) => {
        console.log({from, to, capture});
        if (legalMoves.filter(i => i.from === from && i.to === to && i.capture === capture).length > 0) {
            console.log({ from, to, capture });
            let new_board = board.slice();
            new_board[capture] = new PieceObj(0, 0);
            new_board[to] = new_board[from];
            new_board[from] = new PieceObj(0, 0);
    
            setBoard(new_board);
        } else {
            console.log("illegal move");
        }
    }

    let squares = Array.from(Array(64).keys());
    const [dragPiece, setDragPiece] = useState<number>(-1);
    const [move, setMove] = React.useState<number[]>([-1, -1])


    const handleClick = (e: React.MouseEvent, k: number) => {
        let newmove = move.slice();

        for (let i = 0; i < move.length; i++) {
            if (newmove[i] < 0) {
                newmove[i] = k;
                console.log(k);
                break;
            }
        }
        if (newmove[0] >= 0 && newmove[1] >= 0) {
            if (newmove[0] !== newmove[1]) {
                makeMove({ from: newmove[0], to: newmove[1], capture: newmove[1] });
            }
            setMove([-1, -1]);
            setClickHighlight(-1);

        }
        else {
            setClickHighlight(k);
            setMove(newmove);
        }

        //console.log(move);
        //console.log(board);
    }


    const onDragStart = (e: React.MouseEvent, piece: number) => {
        //e.preventDefault();
        setDragPiece(piece);
        console.log(e.currentTarget);

    }

    const onDragEnter = (e: React.MouseEvent, piece: number) => {
        // e.stopPropagation();
        setDragHighlight(piece);
        e.preventDefault();

        //console.log("drag piece: ", piece);
    }

    const onDrop = (e: React.MouseEvent, piece: number) => {
        // e.stopPropagation();
        console.log(e.currentTarget);
        console.log(piece, "drop");
        e.preventDefault();
        makeMove({ from: dragPiece, to: piece, capture: piece });

        setDragPiece(-1);
        setDragHighlight(-1);
    }

    const onDragOver = (e: React.MouseEvent, piece: number) => {
        // e.stopPropagation();
        e.preventDefault();
        //setDropPiece(piece);
        //console.log("drop piece: ", dropPiece)
    }

    return (
        <div className='board'>
            {squares.map((tile, key) => (
                checkerBoard(tile) ?
                    <div className={dragHighlight === tile || clickHighlight === tile ? "tile-light highlight" : "tile-light"} key={tile} onClick={(event: React.MouseEvent) => { handleClick(event, key) }}>
                        <div className='piece'>
                            {<Piece piece={board[tile]} onDragStart={(e: React.MouseEvent) => onDragStart(e, tile)} onDragOver={(e: React.MouseEvent) => onDragOver(e, tile)} onDragEnter={(e: React.MouseEvent) => { onDragEnter(e, tile) }} onDragEnd={(e: React.MouseEvent) => { onDrop(e, tile) }} />}
                        </div>
                    </div> :
                    <div className={dragHighlight === tile || clickHighlight === tile ? "tile-dark highlight" : "tile-dark"} key={tile} onClick={(event: React.MouseEvent) => handleClick(event, key)}>
                        <div className='piece'>
                            {<Piece piece={board[tile]} onDragStart={(e: React.MouseEvent) => onDragStart(e, tile)} onDragOver={(e: React.MouseEvent) => onDragOver(e, tile)} onDragEnter={(e: React.MouseEvent) => { onDragEnter(e, tile) }} onDragEnd={(e: React.MouseEvent) => { onDrop(e, tile) }} />}
                        </div>
                    </div>
            ))}
        </div>
    );
}

export default Board;