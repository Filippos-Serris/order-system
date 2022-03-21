import "./CustomerInfo.css";
import Card from "../UI/Card";

function CustomerInfo() {
  return (
    <Card className="customer_info">
      <h1>New Order</h1>
      <form>
        <div>
          <label>Address</label>
          <input type="text" placeholder="Street"></input>
          <input type="number" placeholder="Number"></input>
        </div>

        <div>
          <label>Apartment Information</label>
          <input type="text" placeholder="doorbell"></input>
          <select>
            <option>---Select Floor---</option>
            <option>Ground floor</option>
            <option>1st floor</option>
            <option>2nd floor</option>
            <option>3rd floor</option>
            <option>4th floor</option>
          </select>
        </div>

        <div>
          <label>Contact Information</label>
          <input
            type="tel"
            placeholder="home phone number, ex: 012-345-6789"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          ></input>
          <input
            type="tel"
            placeholder="mobile number, ex: 012-345-6789"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          ></input>
        </div>

        <button>Submit</button>
      </form>
    </Card>
  );
}

export default CustomerInfo;
