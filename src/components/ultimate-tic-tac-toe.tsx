import React, { useState, useEffect } from 'react';

const UltimateTicTacToe = () => {
  // Initialize 9 small boards, each with 9 cells
  const initializeBoard = () => Array(9).fill(null).map(() => Array(9).fill(null));
  
  const [boards, setBoards] = useState(initializeBoard);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [activeBoardIndex, setActiveBoardIndex] = useState(null);
  const [boardWinners, setBoardWinners] = useState(Array(9).fill(null));
  const [gameWinner, setGameWinner] = useState(null);
  const [gameStatus, setGameStatus] = useState('X\'s turn - Click any cell to start!');

  // Check if there's a winner in a 3x3 grid
  const checkWinner = (board) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ];
    
    for (let line of lines) {
      const [a, b, c] = line;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    
    // Check for tie
    if (board.every(cell => cell !== null)) {
      return 'tie';
    }
    
    return null;
  };

  // Handle cell click
  const handleCellClick = (boardIndex, cellIndex) => {
    if (gameWinner) return;
    if (boards[boardIndex][cellIndex] !== null) return;
    if (boardWinners[boardIndex] !== null) return;
    if (activeBoardIndex !== null && activeBoardIndex !== boardIndex) return;

    // Make the move
    const newBoards = boards.map((board, bIdx) => 
      bIdx === boardIndex 
        ? board.map((cell, cIdx) => cIdx === cellIndex ? currentPlayer : cell)
        : board
    );
    
    setBoards(newBoards);

    // Check if this board has a winner now
    const newBoardWinners = [...boardWinners];
    const boardWinner = checkWinner(newBoards[boardIndex]);
    if (boardWinner) {
      newBoardWinners[boardIndex] = boardWinner;
      setBoardWinners(newBoardWinners);
    }

    // Determine next active board
    let nextActiveBoard = cellIndex;
    if (newBoardWinners[nextActiveBoard] !== null) {
      // If the target board is already won, player can choose any available board
      nextActiveBoard = null;
    }
    setActiveBoardIndex(nextActiveBoard);

    // Check for overall game winner
    const overallWinner = checkWinner(newBoardWinners);
    if (overallWinner) {
      setGameWinner(overallWinner);
      setGameStatus(overallWinner === 'tie' ? 'Game is a tie!' : `${overallWinner} wins the game!`);
    } else {
      // Switch players
      const nextPlayer = currentPlayer === 'X' ? 'O' : 'X';
      setCurrentPlayer(nextPlayer);
      
      if (nextActiveBoard === null) {
        setGameStatus(`${nextPlayer}'s turn - Choose any available board!`);
      } else {
        setGameStatus(`${nextPlayer}'s turn - Must play in board ${nextActiveBoard + 1}!`);
      }
    }
  };

  // Reset game
  const resetGame = () => {
    setBoards(initializeBoard());
    setCurrentPlayer('X');
    setActiveBoardIndex(null);
    setBoardWinners(Array(9).fill(null));
    setGameWinner(null);
    setGameStatus('X\'s turn - Click any cell to start!');
  };

  // Render a single cell
  const renderCell = (boardIndex, cellIndex, value) => {
    const isClickable = !gameWinner && 
                       !boards[boardIndex][cellIndex] && 
                       !boardWinners[boardIndex] &&
                       (activeBoardIndex === null || activeBoardIndex === boardIndex);
    
    return (
      <button
        key={cellIndex}
        className={`
          w-8 h-8 border border-gray-400 flex items-center justify-center text-lg font-bold
          transition-colors duration-200
          ${isClickable ? 'hover:bg-blue-100 cursor-pointer' : 'cursor-not-allowed'}
          ${value === 'X' ? 'text-blue-600' : value === 'O' ? 'text-red-600' : ''}
        `}
        onClick={() => handleCellClick(boardIndex, cellIndex)}
        disabled={!isClickable}
      >
        {value}
      </button>
    );
  };

  // Render a single small board
  const renderSmallBoard = (boardIndex) => {
    const board = boards[boardIndex];
    const winner = boardWinners[boardIndex];
    const isActive = activeBoardIndex === boardIndex || activeBoardIndex === null;
    const isAvailable = !winner && !gameWinner;
    
    return (
      <div
        key={boardIndex}
        className={`
          relative border-2 border-gray-800 bg-white rounded-lg p-2
          transition-all duration-300
          ${isActive && isAvailable ? 'border-blue-500 shadow-lg bg-blue-50' : ''}
          ${winner ? 'opacity-75' : ''}
        `}
      >
        {/* Board number indicator */}
        <div className="absolute -top-2 -left-2 w-5 h-5 bg-gray-600 text-white text-xs rounded-full flex items-center justify-center">
          {boardIndex + 1}
        </div>
        
        {/* Winner overlay */}
        {winner && (
          <div className="absolute inset-0 bg-black bg-opacity-10 rounded-lg flex items-center justify-center">
            <span className={`text-4xl font-bold ${winner === 'X' ? 'text-blue-600' : winner === 'O' ? 'text-red-600' : 'text-gray-500'}`}>
              {winner === 'tie' ? '−' : winner}
            </span>
          </div>
        )}
        
        {/* 3x3 grid */}
        <div className="grid grid-cols-3 gap-1">
          {board.map((cell, cellIndex) => renderCell(boardIndex, cellIndex, cell))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">Ultimate Tic-Tac-Toe</h1>
      
      {/* Game status */}
      <div className="text-xl font-semibold text-gray-700 mb-4 text-center">
        {gameStatus}
      </div>
      
      {/* Score display */}
      <div className="flex gap-8 mb-6">
        <div className="text-center">
          <div className="text-blue-600 text-2xl font-bold">X</div>
          <div className="text-sm text-gray-600">
            Boards Won: {boardWinners.filter(w => w === 'X').length}
          </div>
        </div>
        <div className="text-center">
          <div className="text-red-600 text-2xl font-bold">O</div>
          <div className="text-sm text-gray-600">
            Boards Won: {boardWinners.filter(w => w === 'O').length}
          </div>
        </div>
        <div className="text-center">
          <div className="text-gray-500 text-2xl font-bold">−</div>
          <div className="text-sm text-gray-600">
            Ties: {boardWinners.filter(w => w === 'tie').length}
          </div>
        </div>
      </div>

      {/* Main game board */}
      <div className="grid grid-cols-3 gap-4 mb-6 bg-gray-200 p-4 rounded-xl shadow-lg">
        {Array(9).fill(null).map((_, boardIndex) => renderSmallBoard(boardIndex))}
      </div>

      {/* Controls */}
      <button
        onClick={resetGame}
        className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors duration-200 shadow-lg"
      >
        New Game
      </button>

      {/* Rules */}
      <div className="mt-8 max-w-2xl text-sm text-gray-600 bg-white p-4 rounded-lg shadow">
        <h3 className="font-semibold mb-2">How to Play:</h3>
        <ul className="space-y-1">
          <li>• Win small boards to claim them in the ultimate board</li>
          <li>• Your move determines which board your opponent must play on next</li>
          <li>• <strong>New:</strong> Won boards can still be played on until completely full</li>
          <li>• If sent to a completely full board, you can choose any available board</li>
          <li>• Win 3 small boards in a row to win the ultimate game!</li>
        </ul>
      </div>
    </div>
  );
};

export default UltimateTicTacToe;