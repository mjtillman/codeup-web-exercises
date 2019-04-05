"use strict";

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * max);
};

const count = (items) => {
  let count = 0;
  for (let item of items) {
    if (item === 'X') count++;
  }

  if (count > 1) {
    return count;
  } else {
    return '.';
  }
};

const mineDisplay = (mines) => {
  let mineString = `\nMines:\n`;

  for (let mine of mines) {
    mineString += `[${mine}] `;
  }

  return mineString;
};

const rowDisplay = (plots) => {
  let rowString = `\n\t`;
  for (let plot of plots) {
    rowString += `${plot}  `;
  }
  return rowString;
};

const minefieldDisplay = (minefield) => {
  let mineString = `\n\t`;
  for (let row of minefield) {
    let mineRowString = `\n\t`;
    for (let mine of row) {
      mineString += `${mine}  `;
    }
    mineString += mineRowString;
  }
  return mineString;
};

const endRowClueGenerator = (rows, corner1, corner2, max) => {
  let endRowClues = [];
  endRowClues.push(corner1);
  for (let i = 1; i < max; i++) {
    if (rows[0][i] === 'X') {
      endRowClues.push('X');
    } else {
      endRowClues.push(
          count([rows[0][i - 1], rows[0][i + 1], rows[1][i - 1],
                      rows[1][i], rows[1][i + 1]]));
    }
  }
  endRowClues.push(corner2);

  return endRowClues;
};

const cornerClueGenerator = (corners) => {
  let cornerClues = [];
  for (let corner of corners) {
    if (corner[0] === 'X') {
      cornerClues.push('X');
    } else {
      cornerClues.push(count([corner[1], corner[2], corner[3]]));
    }
    return cornerClues;
  }
};

const bodyClueGenerator = (minefield, max) => {

  let bodyClues = [];
  let bodyRow;

  for (let y = 1; y < max; y++) {
    bodyRow = [];
    for (let x = 1; x < max; x++) {
      if (minefield[y][x] === 'X') {
        bodyRow.push('X');
      } else {
        bodyRow.push(count(
            minefield[(y - 1)][(x - 1)], minefield[(y - 1)][x],
            minefield[(y - 1)][(x + 1)],
            minefield[y][(x - 1)],  minefield[y][x],
            minefield[y][(x + 1)], minefield[(y + 1)][(x - 1)],
            minefield[(y + 1)][x], minefield[(y + 1)][(x + 1)]
        ));
      }
    }
    bodyClues.push(bodyRow);
  }

  // console.log(minefieldDisplay(bodyClues));
  return bodyClues;
};

const clueGenerator = (minefield, max) => {

  let mineClues = [];

  const corners = [
      [minefield[0][0], minefield[0][1], minefield[1][0], minefield[1][1]],
      [minefield[0][max],minefield[0][(max - 1)],
        minefield[1][(max - 1)], minefield[1][max]],
      [minefield[max][0], minefield[(max - 1)][0],
        minefield[(max - 1)][1], minefield[max][1]],
      [minefield[max][max], minefield[(max - 1)][(max - 1)],
        minefield[[(max - 1)]][max], minefield[max][(max - 1)]]
  ];

  let cornerClues = [];

  for (let corner of corners) {
    cornerClues.push(cornerClueGenerator(corner));
  }

  const topClues = endRowClueGenerator(
      [minefield[0], minefield[1]],
                cornerClues[0], cornerClues[1], max);

  const bottomClues = endRowClueGenerator(
      [minefield[max], minefield[(max - 1)]],
                cornerClues[2], cornerClues[3], max);

  let sideRow = [[],[]];
  for (let y = 0; y < max; y++) {
    sideRow[0].push(minefield[y][0]);
    sideRow[1].push(minefield[y][1]);
  }

  let leftClues = endRowClueGenerator([sideRow[0], sideRow[1]], cornerClues[0], cornerClues[2], max);
  leftClues.pop();
  leftClues.shift();


  sideRow = [[],[]];
  for (let y = 0; y < max; y++) {
    sideRow[0].push(minefield[y][max]);
    sideRow[1].push(minefield[y][max-1]);
  }

  let rightClues = endRowClueGenerator([sideRow[0], sideRow[1]], cornerClues[0], cornerClues[2], max);
  rightClues.pop();
  rightClues.shift();

  let bodyClues = bodyClueGenerator(minefield, max);


  mineClues.push(topClues);

  for (let y = 1; y < max; y++) {
    let mineRow = [];
    mineRow.push(leftClues[y-1]);
    for (let x = 0; x < max - 1; x++) {
      mineRow.push(bodyClues[y-1][x]);
    }
    mineRow.push(rightClues[y-1]);
    mineClues.push(mineRow);
  }

  mineClues.push(bottomClues);

  return mineClues;


};

const fieldGenerator = (mines) => {

  let easyField = [
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
  ];

  for (let mine of mines) {
    easyField[mine[0]][mine[1]] = 'X';
  }

  return easyField;
};

const mineGenerator = (numberOfMines) => {
  let mines = [];

  for (let i = 0; i < numberOfMines; i++) {
    mines.push([randomNumber(0, 8), randomNumber(0, 8)]);
  }

  mines = mines.sort();
  return mines;
};

const duplicateChecker = (mines) => {
  let mineChecker;
  let duplicateMines = false;

  for (let mine of mines) {
    mineChecker = 0;

    mines.forEach((compareMine) => {
      if (mine.toString() === compareMine.toString()) mineChecker++
    });

    if (mineChecker > 1) duplicateMines = true;
  }

  return duplicateMines;
};


const main = () => {
  let numberOfMines = 10;
  let max = 7;
  let mines = [];
  let duplicates;

  do {
    mines = mineGenerator(numberOfMines);
    duplicates = duplicateChecker(mines);
  } while(duplicates);

  const minefield = fieldGenerator(mines);

  console.log(mineDisplay(mines));
  console.log(minefieldDisplay(minefield));

  const cluefield = clueGenerator(minefield, max);

  console.log(minefieldDisplay(cluefield));
};

main();