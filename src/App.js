import "./App.css";
import NewOrder from "./components/NewOrder/NewOrder";
import Card from "./components/UI/Card";
import OrderInProcess from "./components/Order/OrderInProcess/OrderInProcess";
import CompletedOrder from "./components/Order/CompletedOrder/CompletedOrder";

function App() {
  function onOrderSubmitHandler() {}
  return (
    <Card>
      <NewOrder onOrderSubmit={onOrderSubmitHandler} />
      <OrderInProcess />
      <CompletedOrder />
    </Card>
  );
}

export default App;
