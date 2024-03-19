// eslint-disable-next-line no-unused-vars
import TicketNum from "./TicketNum";
export default function Ticket({ticket}){
    return (
    <div>
        {ticket.map((num,idx)=>(
            // eslint-disable-next-line react/jsx-no-undef
            <TicketNum num={num} key={idx}/>
        ))}
    </div>
    );
}