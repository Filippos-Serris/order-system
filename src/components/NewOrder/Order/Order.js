import "./Order.css";
import Product from "./Product";

const ORDERED_PRODUCTS = [
  /* {
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
  }, */
];

function Order() {
  return (
    <div className="order">
      <h1>Ordered products</h1>
      {ORDERED_PRODUCTS.map((orderedProduct) => (
        <Product
          key={orderedProduct.id}
          title={orderedProduct.title}
          price={orderedProduct.price}
        />
      ))}
    </div>
  );
}

export default Order;
