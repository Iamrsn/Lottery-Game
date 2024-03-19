// eslint-disable-next-line no-unused-vars
import Lottery from "./Lottery"
import "./App.css";
// eslint-disable-next-line no-unused-vars
import TicketNum from "./TicketNum";
import Ticket from "./Ticket";
function App() {
  return (
  <Lottery n={5} WinningSum={15}/>
  );
}
export default App
