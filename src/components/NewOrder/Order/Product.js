import "./Product.css";
import Card from "../../UI/Card";

function Product(props) {
  function clickHandler(event) {
    event.preventDefault();

    const addedProduct = {
      title: props.title,
      price: props.price,
    };

    props.addingProduct(addedProduct);

    //console.log(addedProduct);
  }

  return (
    <Card>
      <h1>{props.title}</h1>
      <h1>{props.price}$</h1>
      <button onClick={clickHandler}>Add</button>
    </Card>
  );
}

export default Product;
