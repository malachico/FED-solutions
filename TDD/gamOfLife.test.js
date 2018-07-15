/*
Any live cell with fewer than two live neighbours dies, as if caused by under-population.
Any live cell with two or three live neighbours lives on to the next generation.
Any live cell with more than three live neighbours dies, as if by overcrowding.
Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
 */
let readline = require('readline');

class Game {
    constructor(arr) {
        this._world = arr;
    }

    get world() {
        return this._world;
    }

    set world(value) {
        this._world = value;
    }

    passGeneration() {
        let newWorld = Array(this.world.length).fill(0).map(x => new Array(this.world[0].length).fill('.'));
        let counter;
        for (let i = 0; i < this.world.length; i++) {
            for (let j = 0; j < this.world[0].length; j++) {
                counter = this.countNeighbours(i, j);

                if (this.world[i][j] === '.') {
                    this.HandleDeadCell(newWorld, counter, i, j);
                }
                else {
                    this.handleLiveCell(newWorld, counter, i, j);
                }
            }
        }

        this.world = newWorld;
    }

    countNeighbours(i, j) {

        let counter = 0;

        for (let x = -1; x < 2; x++) {
            for (let y = -1; y < 2; y++) {

                let left = i + x;
                let right = j + y;
                if (x === 0 && y === 0) {
                    continue;
                }
                if (left < 0 || right < 0) {
                    continue;
                }
                if (left >= this.world.length || right >= this.world[0].length) {
                    continue;
                }
                if (this.world[left][right] === 'O') {
                    counter++;
                }
            }
        }
        return counter;
    }

    HandleDeadCell(newWorld, counter, i, j) {
        if (counter === 3) {
            newWorld[i][j] = 'O';
        }
    }

    handleLiveCell(newWorld,counter, i, j) {
        if (counter > 3) {
            newWorld[i][j] = '.';
        }
        else {
            newWorld[i][j] = counter > 1 ? 'O' : '.';
        }
    }

    start(){
        for (let i = 0; i < 100; i++) {
            this.passGeneration();
            this.printWorld();
        }
    }

    printWorld() {
        console.log("_________");
        for (let i = 0; i < this.world.length; i++) {
            for (let j = 0; j < this.world[0].length; j++) {
                process.stdout.write(this.world[i][j]);
            }
            process.stdout.write('\n');
        }
    }
}

const emptyWorld = [
    ['.', '.', '.'],
    ['.', '.', '.'],
    ['.', '.', '.']
];

test('world exists', () => {

    const game = new Game(emptyWorld);

    expect(game.world).toEqual(emptyWorld);
});


test('world with 1 living creature dies in 1 step', () => {
    const startWorld = [
        ['O', '.', '.'],
        ['.', '.', '.'],
        ['.', '.', '.']
    ];
    const game = new Game(startWorld);
    game.passGeneration();
    expect(game.world).toEqual(emptyWorld);
});

test('living cell with 3 living neighbours will live next generation ', () => {
    const startWorld = [
        ['O', 'O', '.'],
        ['O', '.', '.'],
        ['.', '.', '.']
    ];
    const game = new Game(startWorld);
    game.passGeneration();
    expect(game.world[0][0]).toEqual('O');
});

test('Any live cell with more than three live neighbours dies, as if by overcrowding.', () => {
    const startWorld = [
        ['O', 'O', 'O'],
        ['O', 'O', '.'],
        ['.', '.', '.']
    ];
    const game = new Game(startWorld);
    game.passGeneration();
    expect(game.world[1][1]).toEqual('.');
});

test('Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.', () => {
    const startWorld = [
        ['.', 'O', '.'],
        ['O', 'O', '.'],
        ['.', '.', '.']
    ];
    const game = new Game(startWorld);
    game.passGeneration();
    expect(game.world[0][0]).toEqual('O');
});



const startWorld = [
    ['.', 'O', '.'],
    ['O', 'O', '.'],
    ['.', '.', 'O']
];
const game = new Game(startWorld);
game.start();