import "./App.css";
import NewOrder from "./components/NewOrder/NewOrder";
import Card from "./components/UI/Card";
import OrderInProcess from "./components/Order/OrdersInProcess/OrderInProcess";
import CompletedOrder from "./components/Order/CompletedOrders/CompletedOrder";
import OrderOnDelivery from "./components/Order/OrdersOnDelivery/OrderOnDelivery";

function App() {
  let orderInProcess = {};

  function onOrderSubmitHandler(orderInfo) {
    /* orderInProcess.address =
      orderInfo.customerInfo.streetName + orderInfo.customerInfo.streetNumber;
    orderInProcess.doorbell = orderInfo.customerInfo.doorbell;
    orderInProcess.floor = orderInfo.customerInfo.floor;
    orderInProcess.phone = orderInfo.customerInfo.phone;
    orderInProcess.mobile = orderInfo.customerInfo.mobile;
    orderInProcess.products = orderInfo.orderInfo.products;
    orderInProcess.total = orderInfo.orderInfo.total;
    orderInProcess.timestamp = orderInfo.orderInfo.timestamp; */

    orderInProcess = {
      address:
        orderInfo.customerInfo.streetName + orderInfo.customerInfo.streetNumber,
      doorbell: orderInfo.customerInfo.doorbell,
      floor: orderInfo.customerInfo.floor,
      phone: orderInfo.customerInfo.phone,
      mobile: orderInfo.customerInfo.mobile,
      products: orderInfo.orderInfo.products,
      total: orderInfo.orderInfo.total,
      timestamp: orderInfo.orderInfo.timestamp,
    };

    console.log("FROM APP.JS " + JSON.stringify(orderInProcess));
  }

  return (
    <Card>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Grape+Nuts&display=swap"
        rel="stylesheet"
      ></link>

      <h1>Welcome to Burgers</h1>
      <NewOrder onOrderSubmit={onOrderSubmitHandler} />
      <OrderInProcess orderInProcess={orderInProcess} />
      <OrderOnDelivery />
      <CompletedOrder />

      <script
        src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"
      ></script>
    </Card>
  );
}

export default App;
