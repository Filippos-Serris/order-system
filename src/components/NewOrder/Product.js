import "./Product.css";
import Card from "../UI/Card";

function Product(props) {
  return (
    <Card>
      <div class="container">
        <div class="row">
          <h2>{props.title}</h2>
        </div>
        <div class="row">
          <div class="col-md">
            <p>{props.description}</p>
          </div>
          <div class="col-sm">
            <div>{props.price}$</div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Product;
