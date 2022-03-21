import "./NewOrder.css";
import CustomerInfo from "./CustomerInfo";
import Card from "../UI/Card";
import Cart from "./Order/Cart";

function NewOrder() {
  return (
    <Card>
      <CustomerInfo />
      <Cart />
    </Card>
  );
}

export default NewOrder;
