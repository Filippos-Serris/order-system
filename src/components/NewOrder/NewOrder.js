import "./NewOrder.css";
import CustomerInfo from "./CustomerInfo";
import Card from "../UI/Card";
import Cart from "./Cart";
import React, { useState } from "react";

function NewOrder(props) {
  const orderData = {};
  let orderExist = false;
  const [customerExist, setCustomerExist] = useState(false);

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
      setCustomerExist(true);
    }

    if (Object.keys(sentOrder).length !== 0) {
      orderData.orderInfo = {
        products: sentOrder.products,
        total: sentOrder.total,
        timestamp: sentOrder.timestamp,
      };
      orderExist = true;
    }

    if (customerExist && orderExist) {
      props.onOrderSubmit(orderData);
      //console.log(JSON.stringify(orderData));

      setCustomerExist(false);
      orderExist = false;
    }
  }

  return (
    <Card>
      <CustomerInfo onMergeOrderData={onMergeOrderDataHandler} />
      <Cart
        onMergeOrderData={onMergeOrderDataHandler}
        customerExistence={customerExist}
      />
    </Card>
  );
}

export default NewOrder;
