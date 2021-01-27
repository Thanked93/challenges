import { TEST, SOLUTION } from "../testcase/test1";

/**
 * Row check
 *
 *
 */
const possible = (
  x: number,
  y: number,
  n: string,
  grid: string[][]
): boolean => {
  for (let i = 0; i < 9; i++) {
    if (grid[x][i] === n) return false;
    if (grid[i][y] === n) return false;
  }
  const gridX = Math.floor(x / 3) * 3;
  const gridY = Math.floor(y / 3) * 3;
  for (let i = 0; i < 3; i++) {
    for (let p = 0; p < 3; p++) {
      if (grid[gridX + i][gridY + p] === n) return false;
    }
  }

  return true;
};

function solve(sudoku: string[][]): void {
  for (let x = 0; x < 9; x++) {
    for (let y = 0; y < 9; y++) {
      if (sudoku[x][y] === ".") {
        for (let n = 1; n < 10; n++) {
          if (possible(x, y, `${n}`, sudoku)) {
            sudoku[x][y] = `${n}`;
            solve(sudoku);
            sudoku[x][y] = ".";
          }
        }
        return;
      }
    }
  }
  console.log(sudoku);
  console.log(compare(sudoku, SOLUTION));
}

const compare = (sol: string[][], s: string[][]) => {
  for (let i = 0; i < 9; i++) {
    for (let p = 0; p < 0; p++) {
      if (sol[i][p] !== s[i][p]) return false;
    }
  }
  return true;
};
solve(TEST);
