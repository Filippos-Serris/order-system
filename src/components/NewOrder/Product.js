import "./Product.css";
import Card from "../UI/Card";

function Product(props) {
  return (
    <Card>
      <div className="container">
        <div className="row">
          <h2>{props.title}</h2>
        </div>
        <div className="row">
          <div className="col-md">
            <p>{props.description}</p>
          </div>
          <div className="col-sm">
            <div>{props.price}$</div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Product;
