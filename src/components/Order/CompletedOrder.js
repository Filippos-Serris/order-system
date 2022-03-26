import "./CompletedOrder.css";
import Card from "../UI/Card";
import Order from "./Order";

function CompletedOrder() {
  return (
    <Card>
      <h1>Completed Order</h1>
      <Order />
    </Card>
  );
}

export default CompletedOrder;
