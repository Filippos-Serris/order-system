import "./App.css";
import NewOrder from "./components/NewOrder/NewOrder";
import Card from "./components/UI/Card";
import OrderInProcess from "./components/OrderInProcess/OrderInProcess";
import CompletedOrder from "./components/CompletedOrder/CompletedOrder";

function App() {
  return (
    <Card>
      <NewOrder />
      <OrderInProcess />
      <CompletedOrder />
    </Card>
  );
}

export default App;
