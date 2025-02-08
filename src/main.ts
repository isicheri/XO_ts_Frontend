import "./css/style.css"
import "animate.css"
import { generateBoardCell,animateWordSlice } from "./helpers";
const btnCreateRoom = document.querySelector(".btn-create-room") as HTMLButtonElement;
const btnJoinRoom = document.querySelector(".btn-join-room") as HTMLButtonElement;
const descText = document.querySelector(".desc-text") as HTMLParagraphElement;
const closeXbtn = document.querySelector(".x") as HTMLDivElement;
const mainConRoom =document.querySelector(".main-con-room-form") as HTMLDivElement
const board = document.querySelector(".board") as HTMLDivElement;
let text = ` Hey there,this is just a greeting from the creator AKA Madara,
this is an online platform where visitor(anybody on the site currently) create or join a room to play or participate as a spectator in a Tic-Tac-Toe game ,adding comments or suggest which would be coming in later features,other features may include betting with users or participants,but for now lets first see if the site might be something in the later future,please do well to enjoy the game,Best regards from the creator,@Madara.`;
let pminElement = document.querySelector('.time-min') as HTMLParagraphElement;
let psecElement = document.querySelector(".time-sec") as HTMLParagraphElement;
window.onload = () => {
    mainConRoom.style.display = "none";
    animateWordSlice(text,descText);
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
closeXbtn?.addEventListener("click",() => {
    (document.querySelector(".main-con-room-form") as HTMLDivElement).style.display = "none";
})

btnJoinRoom?.addEventListener("click",() => {
    (document.querySelector(".main-con-room-form") as HTMLDivElement).style.display = "flex";
    (document.querySelector(".create-room-form-con") as HTMLDivElement).style.display ="none";
    (document.querySelector(".join-room-form-con") as HTMLDivElement).style.display = "flex";
    (document.querySelector("#join-change-path") as HTMLButtonElement).addEventListener("click",() => {
        window.location.pathname = "/room";
    })
});
}
generateBoardCell(board,pminElement,psecElement);
// window.addEventListener("beforeunload",(e) => {})