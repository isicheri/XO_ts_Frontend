import "./css/style.css"
import "animate.css"
import { generateBoardCell } from "./helpers";

const btnCreateRoom = document.querySelector(".btn-create-room") as HTMLButtonElement;
const btnJoinRoom = document.querySelector(".btn-join-room") as HTMLButtonElement;
const descText = document.querySelector(".desc-text") as HTMLParagraphElement;
const closeXbtn = document.querySelector(".x") as HTMLDivElement;
const board = document.querySelector(".board") as HTMLDivElement;
generateBoardCell(board);
let text = ` Hey there,this is just a greeting from the creator AKA Madara,
        this is an online platform where visitor(anybody on the site currently) create or join a room to play or participate as a spectator in a Tic-Tac-Toe game ,adding comments or suggest which would be coming in later features,other features may include betting with users or participants,but for now lets first see if the site might be something in the later future,please do well to enjoy the game,
        Best regards from the creator,@Madara.`;
        btnCreateRoom?.addEventListener("click",() => {
            (document.querySelector(".main-con-room-form") as HTMLDivElement).style.display = "flex";
            (document.querySelector(".create-room-form-con") as HTMLDivElement).style.display ="flex";
            (document.querySelector(".join-room-form-con") as HTMLDivElement).style.display = "none";
        })
document.querySelectorAll("#form").forEach((form) => {
form.addEventListener("submit",(e) => {
    e.preventDefault()
})
}) 
closeXbtn.addEventListener("click",() => {
    (document.querySelector(".main-con-room-form") as HTMLDivElement).style.display = "none";
})

function animateWordSlice(str:string):void {
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

btnJoinRoom?.addEventListener("click",() => {
    (document.querySelector(".main-con-room-form") as HTMLDivElement).style.display = "flex";
    (document.querySelector(".create-room-form-con") as HTMLDivElement).style.display ="none";
    (document.querySelector(".join-room-form-con") as HTMLDivElement).style.display = "flex";
    (document.querySelector("#join-change-path") as HTMLButtonElement).addEventListener("click",() => {
        window.location.pathname = "/room";
    })
});

window.onload = () => {
    (document.querySelector(".main-con-room-form") as HTMLDivElement).style.display = "none";
    animateWordSlice(text);
}
// window.addEventListener("beforeunload",(e) => {})