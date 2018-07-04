export const LOST = -1;
export const WIN = 1;
export const RIGHT_CLICK = 'contextmenu';
export const TIME_COUNTER = 0;
export const MOVES_COUNTER = 1;
export const DEFAULT_HEIGHT = 25;
export const DEFAULT_WIDTH = 25;
export const DEFAULT_MINES = 25;


export function countFlags(arr) {
    let flagsCounter = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            if (arr[i][j]['flagged']) {
                flagsCounter++;
            }
        }
        return flagsCounter;
    }
}

export function checkIfWin(squares) {
    for (let i = 0; i < squares.length; i++) {
        for (let j = 0; j < squares[0].length; j++) {
            if (!squares[i][j]['bomb'] && !squares[i][j]['revealed']) {
                return false
            }
        }
    }
    return true;
}


export function openRecursively(squares, i, j) {
    for (let k = -1; k < 2; k++) {
        for (let l = -1; l < 2; l++) {

            let left = i + k;
            let right = j + l;

            if (left < 0 || right < 0) {
                continue;
            }
            if (left >= squares.length || right >= squares[0].length) {
                continue;
            }

            if (!squares[left][right]['revealed']) {
                squares[left][right]['revealed'] = true;

                if (squares[left][right]['number'] === 0) {
                    openRecursively(squares, left, right);
                }
            }

        }
    }
}

export function putNumbers(squares) {
    for (let i = 0; i < squares.length; i++) {
        for (let j = 0; j < squares[0].length; j++) {
            if (squares[i][j]['bomb']) {
                continue;
            }
            let counter = 0;

            for (let k = -1; k < 2; k++) {
                for (let l = -1; l < 2; l++) {

                    let left = i + k;
                    let right = j + l;
                    if (k === 0 && l === 0) {
                        continue;
                    }
                    if (left < 0 || right < 0) {
                        continue;
                    }
                    if (left >= squares.length || right >= squares[0].length) {
                        continue;
                    }
                    if (squares[left][right]['bomb']) {
                        counter++;
                    }
                }
            }
            squares[i][j]['number'] = counter;
        }
    }
}

export function putMines(i, j, squares, mines) {
    let width = squares.length;
    let height = squares[0].length;


    for (let k = 0; k < mines; k++) {
        let first = getRandInRange(width);
        let second = getRandInRange(height);

        if (i === first && j === second) {
            k += 1;
            continue;
        }
        if (squares[first][second]['bomb']) {
            k += 1;
            continue;
        }

        squares[first][second]['bomb'] = true;
    }
}
export function getRandInRange(max) {
    return Math.floor(Math.random() * (max));
}

export function createSquaresArray(height, width) {
    // return Array(width).fill(0).map(x => Array(height).fill(
    //     {
    //         revealed: false,
    //         flagged: false,
    //         bomb: false,
    //         number: 0
    //     }
    // ));
    //
    let result = [];
    for (let i = 0; i < height; i++) {
        let subArray = [];
        for (let j = 0; j < width; j++) {
            let item = {
                revealed: false,
                flagged: false,
                bomb: false,
                number: 0
            };
            subArray.push(item);
        }
        result.push(subArray);
    }
    return result;
}