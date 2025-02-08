let currentPlayer: string;
let pminElement = document.querySelector('.time-min') as HTMLParagraphElement;
let psecElement = document.querySelector(".time-sec") as HTMLParagraphElement;


//ill use this when im connected to the backend
// export function generateBoardCell(boardElement: HTMLDivElement) {
//  for (let row = 0; row < 3; row++) {
//    for (let col = 0; col < 3; col++) {
//      const cell = document.createElement("div")
//      cell.classList.add("cell")
//     cell.addEventListener("click",() => makeMove(row,col))
//     boardElement.appendChild(cell);
//    }
//  }
// }

 function startGame(sec:number,min: number) {
    let timer = setInterval(() => {
        pminElement.textContent = min < 10 ? `0${min}` : `${min}`;
        psecElement.textContent = sec < 10 ? `0${sec}` : `${sec}`;
        sec -= 1;
        if (sec == 0) {
            min -= 1;
            sec = 59;
        }
        if (min == 0 && sec == 0) {
            clearInterval(timer);  
            console.log("Game over, no winner");
        }
    }, 1000);

}

export function generateBoardCell(boardElement:HTMLDivElement) {
    startGame(59,1)
     for (let row = 0; row < 3; row++) {
   for (let col = 0; col < 3; col++) {
     const cell = document.createElement("div")
     cell.classList.add("cell")
     cell.setAttribute("data-row", row.toString());
      cell.setAttribute("data-col", col.toString());
    cell.addEventListener("click",() => checkMove(row,col,cell))
    boardElement.appendChild(cell);
   }
 }
}

let board:(string | null)[][] =  [
    [null,null,null],
    [null,null,null],
    [null,null,null],
]


function checkMove(row: number,col:number,cell:HTMLDivElement):void {
if(board[row][col]) return;
currentPlayer = currentPlayer === "X" ? "O" : "X"
if(board[row][col] === null) {
    board[row][col] = currentPlayer;
    cell.textContent = currentPlayer;
    if(checkWinner(row,col)) {
        console.log(`${currentPlayer} wins!`);
        resetBoard();
        return;
    }
}
let empty_filled = board.flat().every((element) => element !== "" && element !== null);
if(empty_filled) {
  console.log("it is a draw")  
  resetBoard();
  return
}
}


function resetBoard() {
    currentPlayer = "X";
    setTimeout(() => {
        board =  [
            [null,null,null],
            [null,null,null],
            [null,null,null],
        ]
        document.querySelectorAll(".cell").forEach((cell) =>  {
          cell.textContent = "";
        })
    }, 2000)
}


function checkWinner(row:number,col:number) {
 if(board[row][0] === board[row][1] && board[row][1] === board[row][2]) {
    return true;
 }
 if(board[0][col] === board[1][col] && board[1][col] === board[2][col]) {
    return true;
 }
  // Check the diagonals
  if (row === col && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
    return true;
  }
  if (row + col === 2 && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
    return true;
  } 
  return false;
}