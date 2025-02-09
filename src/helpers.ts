let currentPlayer: string = "X";
let player_X_score:number = 0;
let player_O_score:number = 0;
let board:(string | null)[][] =  [
  [null,null,null],
  [null,null,null],
  [null,null,null],
]

 function startTimer(sec:number,min: number,pminElement:HTMLParagraphElement,psecElement:HTMLParagraphElement) {
    let timer = setInterval(() => {
        pminElement.textContent = `${min}`;
        psecElement.textContent = sec < 10 ? `0${sec}` : `${sec}`;
        sec -= 1;
        if (sec == 0) {
            min -= 1;
            sec = 59;
            console.log(min)
        }
       if(min == 0 && sec == 0) {
        clearInterval(timer);
        console.log("Time is up!");
       }
    }, 1000);
}

export function generateBoardCell(boardElement:HTMLDivElement,pminElement:HTMLParagraphElement,psecElement:HTMLParagraphElement) {
    startTimer(59,1,pminElement,psecElement)
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

function checkMove(row: number,col:number,cell:HTMLDivElement):void {
if(board[row][col]) return;
    board[row][col] = currentPlayer;
    cell.textContent = currentPlayer;
    if(checkWinner(row,col)) {
      if(currentPlayer === "X") {
        player_X_score += 1;
      }else {
        player_O_score += 1;
      }
        console.log(`${currentPlayer} wins!`);
        checkScore(player_X_score,player_O_score);
        resetBoard();
        return;
    }

let empty_filled = board.flat().every((element) => element !== "" && element !== null);
if(empty_filled) {
  console.log("it is a draw")  
  resetBoard();
  return
}
currentPlayer = currentPlayer === "X" ? "O" : "X"
}


function checkScore(player_X_score:number,player_O_score:number) {
if(player_X_score > player_O_score) {
  return "PlayerX Win!";
}else if(player_X_score < player_O_score) {
  return "PlayerO Wins!";
}else {
  return "Its a draw!";
}
}

export function updateScoreBoardUi() {}

export function resetScore() {
  player_O_score = 0;
  player_X_score = 0;
}


function resetBoard() {
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




export function animateWordSlice(str:string,descText:HTMLParagraphElement):void {
    let i = 0;
    let timer = setInterval(() => {
     if(i < str.length) {
       descText.textContent += str.charAt(i);
       i++
     }else {
        clearInterval(timer)
     }
    },100)
}