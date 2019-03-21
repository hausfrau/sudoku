module.exports = function solveSudoku(matrix) {

    const _matrix = matrix;

    const checkRow = function (checkedRow, checkedNumber) {
        for (let column = 0; column < _matrix.length; column++) {
            if (_matrix[checkedRow][column] === checkedNumber) {
                return true;
            }
        }
        return false;
    };

    const checkColumn = function (checkedColumn, checkedNumber) {
        for (let row = 0; row < _matrix.length; row++) {
            if (_matrix[row][checkedColumn] === checkedNumber) {
                return true;
            }
        }
        return false;
    };

    const checkSquare = function (checkedRow, checkedColumn, checkedNumber) {
        let row = checkedRow - checkedRow % 3;
        let column = checkedColumn - checkedColumn % 3;

        for (let r = row; r < row + 3; r++) {
            for (let c = column; c < column + 3; c++) {
                if (_matrix[r][c] === checkedNumber) {
                    return true;
                }
            }
        }
        return false;
    };

    const solve = function () {
        for (let row = 0; row < _matrix.length; row++) {
            for (let column = 0; column < _matrix.length; column++) {
                if (_matrix[row][column] === 0) {
                    for (let number = 1; number <= _matrix.length; number++) {
                        if (!checkRow(row, number) && !checkColumn(column, number) && !checkSquare(row, column, number)) {
                            _matrix[row][column] = number;
                            if (solve()) {
                                return true;
                            } else {
                                _matrix[row][column] = 0;
                            }
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    };

    solve();

    return _matrix;
}
