import "./NewOrder.css";
import CustomerInfo from "./CustomerInfo";
import Card from "../UI/Card";
import Cart from "./Cart";

function NewOrder(props) {
  const orderData = {};
  let customerExist, orderExist;

  function onMergeOrderDataHandler(sentCustomerInfo, sentOrder) {
    if (Object.keys(sentCustomerInfo).length !== 0) {
      orderData.customerInfo = {
        streetName: sentCustomerInfo.street,
        streetNumber: sentCustomerInfo.number,
        doorbell: sentCustomerInfo.doorbell,
        floor: sentCustomerInfo.floor,
        phone: sentCustomerInfo.phone,
        mobile: sentCustomerInfo.mobile,
      };
      customerExist = true;
    }

    if (Object.keys(sentOrder).length !== 0) {
      orderData.order = {
        products: sentOrder.products,
        total: sentOrder.total,
        timestamp: sentOrder.timestamp,
      };
      orderExist = true;
    }

    if (customerExist && orderExist) {
      props.onOrderSubmit(orderData);
      console.log(JSON.stringify(orderData));

      customerExist = false;
      orderExist = false;
    }
  }

  return (
    <Card>
      <CustomerInfo onMergeOrderData={onMergeOrderDataHandler} />
      <Cart onMergeOrderData={onMergeOrderDataHandler} />
    </Card>
  );
}

export default NewOrder;
