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

const ORDERED_PRODUCTS = [{ id: "00", title: "DUMMY", price: "666" }];

function Cart() {
  //const [orderedProduct, setOrderedProduct] = useState(ORDERED_PRODUCTS);

  function addingProductHandler(productToAdd) {
    console.log(JSON.stringify(productToAdd));

    /* setOrderedProduct(function (prevState) {
      return { ...prevState, productToAdd };
    }); */
  }

  /* function clickHandler(event) {
    event.preventDefault();
  } */

  return (
    <Card className="cart">
      <h1>Products</h1>
      {/* {PRODUCT_LIST.map((product) => (
        <Card>
          <Product
            key={product.id}
            title={product.title}
            price={product.price}
          />
          <button onClick={clickHandler}>ADD</button>
        </Card>
      ))} */}

      {PRODUCT_LIST.map((product) => (
        <Product
          addingProduct={addingProductHandler}
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
        />
      ))}

      {ORDERED_PRODUCTS.map((orderedProd) => (
        <Product
          key={/* orderedProduct. */ orderedProd.id}
          title={/* orderedProduct. */ orderedProd.title}
          price={/* orderedProduct. */ orderedProd.price}
        />
      ))}

      <button>Add Order</button>
    </Card>
  );
}

export default Cart;
