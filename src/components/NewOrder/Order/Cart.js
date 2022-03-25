import "./Cart.css";
import Card from "../../UI/Card";
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

function Cart() {
  const [orderedProduct, setOrderedProduct] = useState([]);
  const [orderTotal, setOrderTotal] = useState(0);

  function clickHandler(event) {
    event.preventDefault();
    const addID = event.target.getAttribute("add-product");
    let productToAdd2 = {};

    for (let i = 0; i < PRODUCT_LIST.length; i++) {
      if (PRODUCT_LIST[i].id === addID) {
        productToAdd2 = {
          title: PRODUCT_LIST[i].title,
          description: PRODUCT_LIST[i].description,
          price: PRODUCT_LIST[i].price,
        };
      }
    }

    setOrderedProduct((prevState) => {
      return [...prevState, productToAdd2];
    });

    setOrderTotal(parseFloat(orderTotal) + parseFloat(productToAdd2.price));
  }

  return (
    <Card>
      <Card className="bold_border">
        <h1>Products</h1>
        {PRODUCT_LIST.map((product) => (
          <div key={product.id}>
            <Product
              title={product.title}
              description={product.description}
              price={product.price}
            />
            <button onClick={clickHandler} add-product={product.id}>
              ADD
            </button>
          </div>
        ))}
      </Card>

      <Card className="bold_border">
        <h1>Ordered Products</h1>
        {orderedProduct.map((orderedProd) => (
          <Product
            key={Math.random().toString()}
            title={orderedProd.title}
            description={orderedProd.description}
            price={orderedProd.price}
          />
        ))}
        <p>Order total: {orderTotal} $</p>
      </Card>

      <button>Add Order</button>
    </Card>
  );
}

export default Cart;
