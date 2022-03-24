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

//-----------------------------------------------------------------------------------------------
function Cart() {
  const [orderedProduct, setOrderedProduct] = useState([]);

  function addingProductHandler(productToAdd) {
    //console.log("from cart component " + JSON.stringify(productToAdd));

    setOrderedProduct((prevState) => {
      return [...prevState, productToAdd];
    });

    orderTotal();
  }

  function orderTotal() {
    const total = orderedProduct.map((object) => object.price);
    console.log(total);
  }
  //-------------------------------------------------------------------------------------------------
  return (
    <Card>
      <Card className="bold_border">
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
      </Card>

      <Card className="bold_border">
        <h1>Ordered Products</h1>
        {orderedProduct.map((orderedProd) => (
          <Product
            key={Math.random().toString()}
            id={orderedProd.id}
            title={orderedProd.title}
            price={orderedProd.price}
          />
        ))}
        <p>Order total: {/* {orderTotal} */}</p>
      </Card>

      <button>Add Order</button>
    </Card>
  );
}

export default Cart;
