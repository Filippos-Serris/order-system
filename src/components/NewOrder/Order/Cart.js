import "./Cart.css";
import Card from "../../UI/Card";
import Product from "./Product";
import Order from "./Order";

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

function Cart() {
  return (
    <Card className="cart">
      <h1>Products</h1>
      {PRODUCT_LIST.map((prod) => (
        <Product id={prod.id} title={prod.title} price={prod.price} />
      ))}

      <Order />

      <button>Add Order</button>
    </Card>
  );
}

export default Cart;
