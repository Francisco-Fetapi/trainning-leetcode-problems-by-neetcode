import { isValidSudoku, makeBoard } from "../validSudoku";

const board1 = makeBoard();
const board2 = makeBoard();

board1[1][0] = "7";
board1[1][1] = "4";
board1[1][2] = "8";
board1[1][3] = "5";

board1[0][0] = "2";
board1[0][1] = "1";
board1[0][2] = "5";
board1[0][3] = "3";

board1[1][4] = "2";

board2[1] = [...board1[1]];
board2[0] = [...board1[0]];

board2[1][4] = "3";

describe("Valid Sudoku", () => {
  it("First Solution", () => {
    expect(isValidSudoku(board1)).toBe(true);
    expect(isValidSudoku(board2)).toBe(false);
  });
});
