import "./Cart.css";
import Card from "../../UI/Card";
import Product from "./Product";
import React, { useState } from "react";

const PRODUCT_LIST = [
  {
    id: "01",
    title: "potatoes",
    price: "5",
  },
  {
    id: "02",
    title: "milk-shake",
    price: "1.5",
  },
  {
    id: "03",
    title: "sandwich",
    price: "2.7",
  },
];

const ORDERED_PRODUCTS = [];

function Cart() {
  const [orderedProduct, setOrderedProduct] = useState(ORDERED_PRODUCTS);

  function addingProductHandler(productToAdd) {
    //console.log("from cart component " + JSON.stringify(productToAdd));

    setOrderedProduct((prevState) => {
      return [...prevState, productToAdd];
    });
  }

  return (
    <Card className="cart">
      <h1>Products</h1>

      {PRODUCT_LIST.map((product) => (
        <Product
          addingProduct={addingProductHandler}
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
        />
      ))}

      {orderedProduct.map((orderedProd) => (
        <Product
          key={orderedProd.id}
          id={orderedProd.id}
          title={orderedProd.title}
          price={orderedProd.price}
        />
      ))}

      <button>Add Order</button>
    </Card>
  );
}

export default Cart;
