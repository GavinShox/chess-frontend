export enum PieceType {
    Pawn,
    Knight,
    Bishop,
    Rook,
    Queen,
    King,
    Empty
}

export enum PieceColour {
    White,
    Black,
    Empty
}


export interface Piece {
    type: PieceType;
    colour: PieceColour;
}

interface EnPassantMove {
    capture: number;
}

interface CastleMove {
    rookFrom: number;  
    rookTo: number;  
}

interface PromotionMove {
    promoteTo: PieceType;
}

type specialMove = EnPassantMove | CastleMove | PromotionMove;

export const Empty: Piece = {type: PieceType.Empty, colour: PieceColour.Empty};

export type Board = Piece[]; // 64 elements, 0 = A8, 63 = H1

interface Move {
    from: number;
    to: number;
    specialMove?: specialMove;
}

export const startBoard = () => {
    let new_board: Board = [];

    new_board.push({type: PieceType.Rook, colour: PieceColour.Black});
    new_board.push({type: PieceType.Knight, colour: PieceColour.Black});
    new_board.push({type: PieceType.Bishop, colour: PieceColour.Black});
    new_board.push({type: PieceType.Queen, colour: PieceColour.Black});
    new_board.push({type: PieceType.King, colour: PieceColour.Black});
    new_board.push({type: PieceType.Bishop, colour: PieceColour.Black});
    new_board.push({type: PieceType.Knight, colour: PieceColour.Black});
    new_board.push({type: PieceType.Rook, colour: PieceColour.Black});
    for (let i = 8; i < 16; i++) {
        new_board.push({type: PieceType.Pawn, colour: PieceColour.Black});
    }
    for (let i = 16; i < 48; i++) {
        new_board.push(Empty);
    }
    for (let i = 48; i < 56; i++) {
        new_board.push({type: PieceType.Pawn, colour: PieceColour.White});
    }
    new_board.push({type: PieceType.Rook, colour: PieceColour.White});
    new_board.push({type: PieceType.Knight, colour: PieceColour.White});
    new_board.push({type: PieceType.Bishop, colour: PieceColour.White});
    new_board.push({type: PieceType.Queen, colour: PieceColour.White});
    new_board.push({type: PieceType.King, colour: PieceColour.White});
    new_board.push({type: PieceType.Bishop, colour: PieceColour.White});
    new_board.push({type: PieceType.Knight, colour: PieceColour.White});
    new_board.push({type: PieceType.Rook, colour: PieceColour.White});
    return new_board;
}
  
const makeMove = (board: Board, move: Move) => {
    board[move.to] = board[move.from];
    board[move.from] = Empty;
    if (move.specialMove) {}
}