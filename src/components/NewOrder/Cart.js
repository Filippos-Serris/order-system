import "./Cart.css";
import Card from "../UI/Card";
import Product from "./Product";
import React, { useState } from "react";

const PRODUCT_LIST = [
  {
    id: "01",
    title: "Cheeseburger",
    description: "With beef, gouda & BBQ. Accompanied by french fries.",
    price: "2.70",
  },
  {
    id: "02",
    title: "Chicken burger",
    description:
      "With chicken, gouda, bacon, tomato, lettuce & mustard. Accompanied by french fries.",
    price: "3.70",
  },
  {
    id: "03",
    title: "Special burger",
    description:
      "With beef, gouda, bacon, tomato, lettuce, onion, egg, BBQ , ketchup, mustard. Accompanied by french fries.",
    price: "4.00",
  },
  {
    id: "04",
    title: "Double burger",
    description:
      "with double beef, double gouda, double bacon, tomato, onion, lettuce, BBQ, ketchup & mustard. Accompanied by french fries.",
    price: "4.50",
  },
];

function Cart(props) {
  const [orderedProduct, setOrderedProduct] = useState([]);
  const [orderTotal, setOrderTotal] = useState(0);

  function clickHandler(event) {
    const addID = event.target.getAttribute("add-product");
    let productToAdd = {};

    for (let i = 0; i < PRODUCT_LIST.length; i++) {
      if (PRODUCT_LIST[i].id === addID) {
        productToAdd = {
          title: PRODUCT_LIST[i].title,
          description: PRODUCT_LIST[i].description,
          price: PRODUCT_LIST[i].price,
        };
      }
    }

    setOrderedProduct((prevState) => {
      return [...prevState, productToAdd];
    });

    setOrderTotal(parseFloat(orderTotal) + parseFloat(productToAdd.price));
  }

  function addOrderHandler() {
    const orderDate = new Date();

    const order = {
      total: orderTotal,
      products: orderedProduct,
      timestamp: orderDate.getTime(),
    };

    props.onMergeOrderData({}, order);

    setOrderedProduct([]);
    setOrderTotal(0.0);

    //console.log(order);
  }

  return (
    <Card>
      <Card>
        <h1>Menu</h1>
        <div className="container">
          {PRODUCT_LIST.map((product) => (
            <div key={product.id} className="row">
              <div className="col-lg">
                <Product
                  title={product.title}
                  description={product.description}
                  price={product.price}
                />
              </div>

              <div className="col-sm">
                <button
                  onClick={clickHandler}
                  add-product={product.id}
                  className="btn btn-light"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <h1>Your Order</h1>
        {orderedProduct.map((orderedProd) => (
          <Product
            key={Math.random().toString()}
            title={orderedProd.title}
            description={orderedProd.description}
            price={orderedProd.price}
          />
        ))}
        <h3>Order total: {orderTotal} $</h3>
      </Card>

      <button onClick={addOrderHandler} className="btn btn-light">
        Add Order
      </button>
    </Card>
  );
}

export default Cart;
