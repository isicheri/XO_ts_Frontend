import "./style.css"
import "animate.css"
import {io,Socket} from "socket.io-client";

// const socket:Socket  = io("http://localhost:8001/");
const btnCreateRoom = document.querySelector(".btn-create-room");
const btnJoinRoom = document.querySelector(".btn-join-room");

btnCreateRoom?.addEventListener("click",() => {
    console.log("home")
})