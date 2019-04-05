
"use strict";

let game = {
  field: [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ],
};

const randomNumber = (max) => {
  return Math.floor(Math.random() * (max + 1));
};

const fieldDisplay = (clues) => {
  console.log(game.field);
  console.log(clues);
  let mineClues = [].concat(...clues);

  let field = document.getElementsByClassName('field');

  mineClues.forEach((clue, index) => {
    switch (clue) {
      case 0:
        field[index].innerHTML = clue;
        break;
      case 1: case 2: case 3: case 4:
      case 5: case 6: case 7: case 8:
        field[index].innerHTML = clue;
        break;
      case 9:
        field[index].style['background-color'] = 'red';
    }

  });

};

const cornerClueGenerator = (corner) => {
  let surroundingSquares = [corner[1], corner[2], corner[3]];

  if (corner === 9) {
    return 'X';
  } else {
    let bombCount = 0;
    surroundingSquares.forEach((square) => {
      if (square === 9) bombCount++;
    });
    return bombCount;
  }
};

const topClueGenerator = (end) => {
  let bombRow = [];
  for (let i = 1; i < end[0].length - 1; i++) {
    if (end[0][i] === 9) {
      bombRow.push(9);
    } else {
      let bombCount = 0;
      let surroundingSquares = [
        end[0][(i-1)],              end[0][(i+1)],
        end[1][(i-1)], end[1][(i)], end[1][(i+1)]
      ];
      surroundingSquares.forEach((square) => {
        if (square === 9) bombCount++;
      });
      bombRow.push(bombCount);
    }
  }
  return bombRow;
};

const bottomClueGenerator = (end) => {
  let bombRow = [];
  for (let i = 1; i < end[1].length - 1; i++) {
    let bombCount = 0;
    let surroundingSquares = [
      end[0][(i - 1)], end[0][i], end[0][(i + 1)],
      end[1][(i - 1)], end[1][(i + 1)]
    ];
    surroundingSquares.forEach((square) => {
      if (square === 9) bombCount++;
    });
    bombRow.push(bombCount);
  }
  return bombRow;
};

const leftClueGenerator = (side) => {
  let leftClues = [];
  for (let i = 1; i < side.length - 1; i++) {
    let bombCount = 0;
    let surroundingSquares = [
      side[i - 1][0], side[(i - 1)][1],
      side[i][1],
      side[(i + 1)][0], side[(i + 1)][1],
    ];
    if (side[i][0] === 9) {
      leftClues.push(9);
    } else {
      surroundingSquares.forEach((square) => {
        if (square === 9) bombCount++;
      });
      leftClues.push(bombCount);
    }
  }
  return leftClues;
};

const rightClueGenerator = (side) => {
  let rightClues = [];
  for (let i = 1; i < side.length - 1; i++) {
    let bombCount = 0;
    let surroundingSquares = [
      side[i - 1][0], side[(i - 1)][1],
      side[i][0],
      side[(i + 1)][0], side[(i + 1)][1],
    ];
    if (side[i][0] === 9) {
      rightClues.push(9);
    } else {
      surroundingSquares.forEach((square) => {
        if (square === 9) bombCount++;
      });
      rightClues.push(bombCount);
    }
  }
  return rightClues;
};

/************************************************************************
 *  clueGenerator maps around the mines and generates the clues to be
 *  used in the GUI part later
 ************************************************************************/
const clueGenerator = () => {

  let field = game.field;
  let max = field.length - 1;
  let clueArray = [];
  let bombCount = 0;

  let clueRow = [];

  let nwCorner = [
      field[0][0],
      field[0][1],
      field[1][0],
      field[1][1]
  ];
  let neCorner = [
      field[0][max],
      field[0][(max - 1)],
      field[1][(max - 1)],
      field[1][max]
  ];

  let end = [field[0], field[1]];
  let endRow = topClueGenerator(end);

  clueRow.push(cornerClueGenerator(nwCorner));
  endRow.forEach((square) => {
    clueRow.push(square);
  });
  clueRow.push(cornerClueGenerator(neCorner));

  clueArray.push(clueRow);

  let leftSide = [];
  let rightSide = [];
  for (let y = 0; y < field.length; y++) {
    leftSide.push([field[y][0],field[y][1]]);
    rightSide.push([field[y][max-1], field[y][max]]);
  }

  let leftClues = leftClueGenerator(leftSide);
  let rightClues = rightClueGenerator(rightSide);

  for (let y = 1; y < field.length-1; y++) {
    clueRow = [];
    clueRow.push(leftClues[(y - 1)]);
    for (let x = 1; x < field.length-1; x++) {
      if (field[x][y] === 9) {
        clueRow.push(9);
      } else {
        let xNeg = x - 1;
        let xPos = x + 1;
        let yNeg = y - 1;
        let yPos = y + 1;
        bombCount = 0;

        let surrounding = [
          field[xNeg][yNeg],
          field[x][yNeg],
          field[xPos][yNeg],
          field[xNeg][y],
          field[xPos][y],
          field[xNeg][yPos],
          field[x][yPos],
          field[xPos][yPos],
        ];
        surrounding.forEach((square) => {
          if (square === 9) bombCount++;
        });
        clueRow.push(bombCount);
      }
    }
    clueRow.push(rightClues[(y-1)]);
    clueArray.push(clueRow);
  }

  clueRow = [];
  endRow = [];
  end = [];
  end = [field[(max-1)], field[max]];
  endRow = bottomClueGenerator(end);

  let swCorner = [
    field[max][0],
    field[(max - 1)][0],
    field[(max - 1)][1],
    field[max][1],
  ];
  let seCorner = [
    field[max][max],
    field[(max - 1)][(max - 1)],
    field[(max - 1)][max],
    field[max][(max - 1)],
  ];

  clueRow.push(cornerClueGenerator(swCorner));
  endRow.forEach((square) => {
    clueRow.push(square);
  });
  clueRow.push(cornerClueGenerator(seCorner));
  clueArray.push(clueRow);

  // console.log('\n');
  // console.log(clueArray);
  fieldDisplay(clueArray);
};

/************************************************************************
 *  mineSetter buries mines based on coordinates generated in
 *  bombGenerator
 ************************************************************************/
const mineSetter = (bombs) => {
  bombs.forEach((bomb) => {
    game.field[bomb[0]][bomb[1]] = 9;
  });
  // console.log(game.field);

  clueGenerator();
};

/************************************************************************
 *  duplicateChecker takes the array generated in bombGenerator and
 *  returns true or false based on whether there are any duplicate
 *  coordinates
 ************************************************************************/
const duplicateChecker = (bombs) => {

  let duplicates = false;

  bombs.forEach( (bomb) => {

    let duplicateBomb = 0;

    bombs.forEach( (bombCompare) => {
      if (bomb.toString() === bombCompare.toString()) duplicateBomb++;
    });

    if (duplicateBomb > 1) duplicates = true;

  });

  return duplicates;
};

/************************************************************************
 *  bombGenerator generates an array of x/y coordinates where mines
 *  will be buried
 ************************************************************************/
const bombGenerator = (length) => {

  let bombArray = [];
  let duplicateBombs = false;
  let newBomb;

  // generates new bombs
  for (let i = 0; i < length; i++) {
    newBomb = [randomNumber(7), randomNumber(7)];
    bombArray.push(newBomb);
  }

  //  check for duplicate bombs
  duplicateBombs = duplicateChecker(bombArray);

  //  if duplicate bombs are present, call bombGenerator recursively
  //  (tried to do a loop but recursion was less problematic)

  if (duplicateBombs) {
    bombGenerator(length);

  } else {

    bombArray = bombArray.sort();
    // console.log(`[${bombArray[0]}], [${bombArray[1]}], ` +
    //   `[${bombArray[2]}], [${bombArray[3]}], [${bombArray[4]}],` +
    //   `\n[${bombArray[5]}], [${bombArray[6]}], [${bombArray[7]}], ` +
    //   `[${bombArray[8]}], [${bombArray[9]}]`);

    mineSetter(bombArray);
  }

};

bombGenerator(10);


