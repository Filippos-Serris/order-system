import "./Product.css";
import Card from "../../UI/Card";

function Product(props) {
  function clickHandler(event) {
    event.preventDefault();

    const addedProduct = {
      id: props.id,
      title: props.title,
      price: props.price,
    };

    props.addingProduct(addedProduct);

    //console.log("from product component " + JSON.stringify(addedProduct));
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
