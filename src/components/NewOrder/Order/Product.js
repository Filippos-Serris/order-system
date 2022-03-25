import "./Product.css";
import Card from "../../UI/Card";

function Product(props) {
  return (
    <Card>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <div>{props.price}$</div>
    </Card>
  );
}

export default Product;
