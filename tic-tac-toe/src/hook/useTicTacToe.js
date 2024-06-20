import { useState } from "react";
const useTicTacToe = () => {
    const initialState = Array(9).fill(null);
    const [board, setBoard] = useState(initialState);
    const [isXTurn, setIsXTurn] = useState(true);

    const Winner = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const getWinner = (currentBoard) => {
        for (let i = 0; i < Winner.length; i++) {
            const [a, b, c] = Winner[i];
            if (
                currentBoard[a] &&
                currentBoard[a] === currentBoard[b] &&
                currentBoard[a] === currentBoard[c]
            ) {
                return currentBoard[a];
            }
        }
        return null;
    };
    const getMessage = () => {
        const winner = getWinner(board);
        if (winner) {
            return `Winner is ${winner}`;
        }
        if (board.every((b) => b !== null)) {
            return "It's a draw!";
        }
        return `Player ${isXTurn ? "X" : "O"} Turn`;
    };

    const handleReset = () => {
        setBoard(initialState);
        setIsXTurn(true);
    };

    const handleClick = (index) => {
        const winner = getWinner(board);
        if (winner || board[index]) return;
        const updatedBoard = [...board];
        updatedBoard[index] = isXTurn ? "X" : "O";
        setBoard(updatedBoard);
        setIsXTurn(!isXTurn);
    };

    return { board, handleClick, handleReset, getMessage, getWinner };
};
export default useTicTacToe;
