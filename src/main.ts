import "./style.css"
import "animate.css"
import {io,Socket} from "socket.io-client";

const socket:Socket  = io("http://localhost:8001/");



const btnCreateRoom = document.querySelector(".btn-create-room") as HTMLButtonElement;
const btnJoinRoom = document.querySelector(".btn-join-room") as HTMLButtonElement;
const descText = document.querySelector(".desc-text") as HTMLParagraphElement;
const closeXbtn = document.querySelector(".x") as HTMLDivElement;
let text = ` Hey there,this is just a greeting from the creator AKA Madara,
        this is an online platform where visitor(anybody on the site currently) create or join a room to play or participate as a spectator in a Tic-Tac-Toe game ,adding comments or suggest which would be coming in later features,other features may include betting with users or participants,but for now lets first see if the site might be something in the later future,please do well to enjoy the game,
        Best regards from the creator,@Madara.`;
descText.textContent = text;
btnCreateRoom?.addEventListener("click",() => {
    (document.querySelector(".main-con-room-form") as HTMLDivElement).style.display = "flex";
})

closeXbtn.addEventListener("click",() => {
    (document.querySelector(".main-con-room-form") as HTMLDivElement).style.display = "none";
})

function animateWordSlice():void {
    // let e = 0;
    // while (e != text.length) {
    //         descText.textContent = text.slice(0,e);
    //       e++
    // }
}

window.onload = () => {
    (document.querySelector(".main-con-room-form") as HTMLDivElement).style.display = "none";
    animateWordSlice();
}