const EMPTY_SQUARE = "";

export function makeBoard() {
  return new Array(9)
    .fill("")
    .map(() => new Array<string>(9).fill(EMPTY_SQUARE));
}

export function isValidSudoku(board: string[][]): boolean {
  const cols: Record<string, Set<string>> = {};
  const rows: Record<string, Set<string>> = {};
  const squares: Record<string, Set<string>> = {};

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      let item = board[row][col];
      if (item === EMPTY_SQUARE) continue;
      const POS_SQUARE = `${Math.floor(row / 3)}/${Math.floor(col / 3)}`;
      if (
        cols[col]?.has(item) ||
        rows[row]?.has(item) ||
        squares[POS_SQUARE]?.has(item)
      ) {
        return false;
      }
      if (!cols[col]) cols[col] = new Set();
      if (!rows[row]) rows[row] = new Set();
      if (!squares[POS_SQUARE]) squares[POS_SQUARE] = new Set();
      cols[col].add(item);
      rows[row].add(item);
      squares[POS_SQUARE].add(item);
    }
  }

  return true;
}
