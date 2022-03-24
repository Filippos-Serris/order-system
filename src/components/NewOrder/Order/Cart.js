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

  //-------------------------------------------------------------------------------------------
  // MOVING THE BUTTON FROM PRODUCT COMPONENT HERE, REMOVING addingProductHandler()
  /* function clickHandler(event) {
    event.preventDefault();

    const productToAdd2 = {
      title: // WHAT TO PUT HERE {like Product props}
      description: // WHAT TO PUT HERE {like Product props}
      price: // WHAT TO PUT HERE {like Product props}
    };

    setOrderedProduct((prevState) => {
      return [...prevState, productToAdd2];
    });

    setOrderTotal(parseFloat(orderTotal) + parseFloat(productToAdd2.price));
  } */
  //------------------------------------------------------------------------------------------

  function addingProductHandler(productToAdd) {
    //console.log("from cart component " + JSON.stringify(productToAdd));

    setOrderedProduct((prevState) => {
      return [...prevState, productToAdd];
    });

    setOrderTotal(parseFloat(orderTotal) + parseFloat(productToAdd.price));
  }

  return (
    <Card>
      <Card className="bold_border">
        <h1>Products</h1>
        {PRODUCT_LIST.map((product) => (
          <div key={product.id}>
            <Product
              addingProduct={addingProductHandler}
              title={product.title}
              description={product.description}
              price={product.price}
            />
            {/* <button onClick={clickHandler}>new add button</button> */
            /*want clickHandler to take the info of the Product to pass them to the object inside ot */}
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
