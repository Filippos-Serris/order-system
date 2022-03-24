import "./Product.css";
import Card from "../../UI/Card";

function Product(props) {
  function clickHandler(event) {
    event.preventDefault();

    const addedProduct = {
      title: props.title,
      description: props.description,
      price: props.price,
    };

    props.addingProduct(addedProduct);

    //console.log("from product component " + JSON.stringify(addedProduct));
  }

  return (
    <Card>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <div>{props.price}$</div>
      <button onClick={clickHandler}>Add</button>
    </Card>
  );
}

export default Product;
