const SudokuSolver = require('sudoku-solver-js');
const solver = new SudokuSolver();

module.exports = (puzzleString) => {
    const solution = solver.solve(puzzleString, {result: 'string'});

    if(solution === 'Puzzle is not valid.') {
        throw Error(solution);
    }

    return solution;
}