const { useState } = React;

// ── ULTIMATE TIC-TAC-TOE ──────────────────────────────────
const UltimateTicTacToe = () => {
  const initializeBoard = () => Array(9).fill(null).map(() => Array(9).fill(null));

  const [boards, setBoards] = useState(initializeBoard);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [activeBoardIndex, setActiveBoardIndex] = useState(null);
  const [boardWinners, setBoardWinners] = useState(Array(9).fill(null));
  const [gameWinner, setGameWinner] = useState(null);
  const [gameStatus, setGameStatus] = useState("X's turn — click any cell to start!");

  const checkWinner = (board) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];
    for (const [a, b, c] of lines) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) return board[a];
    }
    if (board.every(cell => cell !== null)) return 'tie';
    return null;
  };

  const handleCellClick = (boardIndex, cellIndex) => {
    if (gameWinner) return;
    if (boards[boardIndex][cellIndex] !== null) return;
    if (boardWinners[boardIndex] !== null) return;
    if (activeBoardIndex !== null && activeBoardIndex !== boardIndex) return;

    const newBoards = boards.map((board, bIdx) =>
      bIdx === boardIndex
        ? board.map((cell, cIdx) => (cIdx === cellIndex ? currentPlayer : cell))
        : board
    );
    setBoards(newBoards);

    const newBoardWinners = [...boardWinners];
    const boardWinner = checkWinner(newBoards[boardIndex]);
    if (boardWinner) {
      newBoardWinners[boardIndex] = boardWinner;
      setBoardWinners(newBoardWinners);
    }

    let nextActiveBoard = cellIndex;
    if (newBoardWinners[nextActiveBoard] !== null) nextActiveBoard = null;
    setActiveBoardIndex(nextActiveBoard);

    const overallWinner = checkWinner(newBoardWinners);
    if (overallWinner) {
      setGameWinner(overallWinner);
      setGameStatus(overallWinner === 'tie' ? "It's a tie!" : `${overallWinner} wins the game!`);
    } else {
      const nextPlayer = currentPlayer === 'X' ? 'O' : 'X';
      setCurrentPlayer(nextPlayer);
      setGameStatus(
        nextActiveBoard === null
          ? `${nextPlayer}'s turn — choose any available board!`
          : `${nextPlayer}'s turn — must play in board ${nextActiveBoard + 1}!`
      );
    }
  };

  const resetGame = () => {
    setBoards(initializeBoard());
    setCurrentPlayer('X');
    setActiveBoardIndex(null);
    setBoardWinners(Array(9).fill(null));
    setGameWinner(null);
    setGameStatus("X's turn — click any cell to start!");
  };

  const markColor = (v) => (v === 'X' ? 'var(--accent)' : v === 'O' ? '#f59e0b' : 'var(--text)');

  const renderCell = (boardIndex, cellIndex, value) => {
    const isClickable =
      !gameWinner &&
      !boards[boardIndex][cellIndex] &&
      !boardWinners[boardIndex] &&
      (activeBoardIndex === null || activeBoardIndex === boardIndex);

    return (
      <button
        key={cellIndex}
        onClick={() => handleCellClick(boardIndex, cellIndex)}
        disabled={!isClickable}
        style={{
          width: 'min(34px, 7vw)',
          height: 'min(34px, 7vw)',
          border: '1px solid #2a2a2a',
          borderRadius: '3px',
          background: 'transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'var(--font-mono)',
          fontSize: '16px',
          fontWeight: 700,
          color: markColor(value),
          cursor: isClickable ? 'pointer' : 'not-allowed',
          transition: 'background 0.15s, border-color 0.15s',
        }}
        onMouseEnter={e => { if (isClickable) e.currentTarget.style.background = 'rgba(16,185,129,0.08)'; }}
        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
      >
        {value}
      </button>
    );
  };

  const renderSmallBoard = (boardIndex) => {
    const board = boards[boardIndex];
    const winner = boardWinners[boardIndex];
    const isActive = (activeBoardIndex === boardIndex || activeBoardIndex === null) && !winner && !gameWinner;

    return (
      <div
        key={boardIndex}
        style={{
          position: 'relative',
          background: 'var(--surface)',
          border: isActive ? '1px solid var(--accent)' : '1px solid var(--border)',
          borderRadius: '6px',
          padding: '8px',
          boxShadow: isActive ? '0 0 0 3px rgba(16,185,129,0.1)' : 'none',
          opacity: winner ? 0.55 : 1,
          transition: 'all 0.25s',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-8px',
            left: '-8px',
            width: '18px',
            height: '18px',
            borderRadius: '50%',
            background: '#1a1a1a',
            border: '1px solid #2a2a2a',
            color: 'var(--muted)',
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {boardIndex + 1}
        </div>

        {winner && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(0,0,0,0.35)',
              borderRadius: '6px',
            }}
          >
            <span style={{ fontSize: '34px', fontWeight: 700, color: winner === 'tie' ? 'var(--muted)' : markColor(winner) }}>
              {winner === 'tie' ? '−' : winner}
            </span>
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4px' }}>
          {board.map((cell, cellIndex) => renderCell(boardIndex, cellIndex, cell))}
        </div>
      </div>
    );
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div
        className="mono"
        style={{
          fontSize: '14px',
          color: 'var(--text)',
          marginBottom: '28px',
          textAlign: 'center',
          minHeight: '20px',
        }}
      >
        {gameStatus}
      </div>

      <div style={{ display: 'flex', gap: '40px', marginBottom: '36px' }}>
        <div style={{ textAlign: 'center' }}>
          <div className="mono" style={{ color: 'var(--accent)', fontSize: '20px', fontWeight: 700 }}>X</div>
          <div className="mono" style={{ fontSize: '11px', color: 'var(--muted)' }}>
            {boardWinners.filter(w => w === 'X').length} won
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div className="mono" style={{ color: '#f59e0b', fontSize: '20px', fontWeight: 700 }}>O</div>
          <div className="mono" style={{ fontSize: '11px', color: 'var(--muted)' }}>
            {boardWinners.filter(w => w === 'O').length} won
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div className="mono" style={{ color: 'var(--muted)', fontSize: '20px', fontWeight: 700 }}>−</div>
          <div className="mono" style={{ fontSize: '11px', color: 'var(--muted)' }}>
            {boardWinners.filter(w => w === 'tie').length} tied
          </div>
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '12px',
          background: '#0d0d0d',
          border: '1px solid var(--border)',
          borderRadius: '10px',
          padding: '16px',
          marginBottom: '32px',
        }}
      >
        {Array(9).fill(null).map((_, boardIndex) => renderSmallBoard(boardIndex))}
      </div>

      <button
        onClick={resetGame}
        className="mono"
        style={{
          background: 'var(--accent)',
          color: '#000',
          border: 'none',
          padding: '12px 32px',
          borderRadius: '3px',
          fontSize: '13px',
          fontWeight: 700,
          letterSpacing: '0.04em',
          cursor: 'pointer',
          transition: 'opacity 0.2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.opacity = '0.85'; }}
        onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
      >
        New Game
      </button>

      <div
        style={{
          marginTop: '40px',
          maxWidth: '560px',
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: '8px',
          padding: '24px 28px',
        }}
      >
        <p className="mono accent" style={{ fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '14px' }}>
          How to play
        </p>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {[
            'Win small boards to claim them on the big board',
            'Your move decides which board your opponent plays next',
            'Boards that are won or full are closed — no more moves there',
            'Sent to a closed board? Choose any available board',
            'Win 3 small boards in a row to win the whole game',
          ].map(line => (
            <li key={line} style={{ display: 'flex', gap: '10px', fontSize: '13px', color: 'var(--muted)', lineHeight: 1.6 }}>
              <span style={{ color: 'var(--accent)' }}>•</span>
              {line}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// ── SECTION WRAPPER ───────────────────────────────────────
const Game = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id="game" style={{ padding: '80px 16px', borderTop: '1px solid #1a1a1a' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <p className="mono accent" style={{ fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '24px' }}>
          Play
        </p>
        <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '32px', textAlign: 'center' }}>
          Ultimate <span style={{ color: 'var(--accent)' }}>Tic-Tac-Toe</span>
        </h2>
        <button
          onClick={() => setOpen(o => !o)}
          aria-expanded={open}
          aria-controls="uttt-board"
          className="mono"
          style={{
            background: open ? 'transparent' : 'var(--accent)',
            color: open ? 'var(--accent)' : '#000',
            border: '1px solid var(--accent)',
            padding: '12px 32px',
            borderRadius: '3px',
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '0.04em',
            cursor: 'pointer',
            marginBottom: open ? '48px' : 0,
            transition: 'all 0.2s',
          }}
        >
          {open ? 'Hide Game' : 'Play Ultimate Tic-Tac-Toe'}
        </button>
        {open && <div id="uttt-board"><UltimateTicTacToe /></div>}
      </div>
    </section>
  );
};

Object.assign(window, { Game });
