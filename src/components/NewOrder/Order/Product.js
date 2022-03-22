import "./Product.css";
import Card from "../../UI/Card";

function Product(props) {
  return (
    <Card>
      <h1>{props.title}</h1>
      <h1>{props.price}$</h1>
      <button>Add</button>
    </Card>
  );
}

export default Product;
