import "./CustomerInfo.css";

function CustomerInfo() {
  return (
    <form>
      <label>Address</label>
      <input type="text" placeholder="Street"></input>
      <input type="text" placeholder="Number"></input>

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

      <label>Contact Information</label>
      <input
        type="tel"
        placeholder="home phone number"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
      ></input>
      <input
        type="tel"
        placeholder="mobile number"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
      ></input>

      <button>Submit</button>
    </form>
  );
}

export default CustomerInfo;
