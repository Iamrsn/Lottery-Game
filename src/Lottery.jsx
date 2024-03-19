import { useState } from "react"
import "./Lottery.css"
import {genticket,sum} from "./helper"
import Ticket from "./Ticket";

export default function Lottery({n,WinningSum}){
    // eslint-disable-next-line no-unused-vars
    let[ticket,setticket]=useState(genticket(n));
    let iswinning=sum(ticket)===WinningSum;

        function buyticket(){
            setticket(genticket(n));
        }
    return (
        <div>
        <h1>Lottery Game!</h1>
        <Ticket ticket={ticket}/>
        <h3>{iswinning && "congratulation you won"}</h3>
        <button onClick={buyticket}>Buy New Ticket</button>
        </div>
    )
}