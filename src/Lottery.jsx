import { useState } from "react"
import "./Lottery.css"
import {genticket,sum} from "./helper"

export default function Lottery(){
    // eslint-disable-next-line no-unused-vars
    let[ticket,setticket]=useState(genticket(3));
    let iswinning=sum(ticket)===15;

        function buyticket(){
            setticket(genticket(3));
        }
    return (
        <div>
        <h1>Lottery Game</h1>
        <div className="ticket">
            <span>{ticket[0]}</span>
            <span>{ticket[1]}</span>
            <span>{ticket[2]}</span>
        </div>
        <h3>{iswinning && "congratulation you won"}</h3>
        <button onClick={buyticket}>Buy New Ticket</button>
        </div>
    )
}