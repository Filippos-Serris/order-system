import "./CustomerInfo.css";
import Card from "../UI/Card";
import React, { useState } from "react";

function CustomerInfo(props) {
  // object that stores thn form-inputs about the customer
  const [userInput, setUserInput] = useState({
    enteredStreet: "",
    enteredNumber: "",
    enteredDoorbell: "",
    enteredFloor: "",
    enteredPhone: "",
    enteredMobile: "",
  });

  // on every change (keystroke) the current field updates the current field of the object.
  function streetChangeHandler(event) {
    setUserInput(function (prevState) {
      return { ...prevState, enteredStreet: event.target.value };
    });
  }
  function numberChangeHandler(event) {
    setUserInput(function (prevState) {
      return { ...prevState, enteredNumber: event.target.value };
    });
  }
  function doorbellChangeHandler(event) {
    setUserInput(function (prevState) {
      return { ...prevState, enteredDoorbell: event.target.value };
    });
  }
  function floorChangeHandler(event) {
    setUserInput(function (prevState) {
      return { ...prevState, enteredFloor: event.target.value };
    });
  }
  function phoneChangeHandler(event) {
    setUserInput(function (prevState) {
      return { ...prevState, enteredPhone: event.target.value };
    });
  }
  function mobileChangeHandler(event) {
    setUserInput(function (prevState) {
      return { ...prevState, enteredMobile: event.target.value };
    });
  }

  function submitHandler(event) {
    event.preventDefault();

    const customerInfo = {
      street: userInput.enteredStreet,
      number: userInput.enteredNumber,
      doorbell: userInput.enteredDoorbell,
      floor: userInput.enteredFloor,
      phone: userInput.enteredPhone,
      mobile: userInput.enteredMobile,
    };

    props.onMergeOrderData(customerInfo, {});

    setUserInput({});

    //console.log(customerInfo);
    //console.log(JSON.stringify(userInput));
  }

  return (
    <Card className="customer_info">
      <form onSubmit={submitHandler}>
        <div>
          <label>Address</label>
          <input
            type="text"
            placeholder="Street"
            value={userInput.enteredStreet || ""}
            required
            onChange={streetChangeHandler}
          ></input>
          <input
            type="number"
            placeholder="Number"
            value={userInput.enteredNumber || ""}
            required
            onChange={numberChangeHandler}
          ></input>
        </div>

        <div>
          <label>Apartment Information</label>
          <input
            type="text"
            placeholder="doorbell"
            value={userInput.enteredDoorbell || ""}
            required
            onChange={doorbellChangeHandler}
          ></input>
          <select required onChange={floorChangeHandler}>
            <option>Select floor</option>
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
            value={userInput.enteredPhone || ""}
            required
            onChange={phoneChangeHandler}
          ></input>
          <input
            type="tel"
            placeholder="mobile number, ex: 012-345-6789"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            value={userInput.enteredMobile || ""}
            required
            onChange={mobileChangeHandler}
          ></input>
        </div>

        <button>Submit</button>
      </form>
    </Card>
  );
}

export default CustomerInfo;
