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
    <Card>
      <h1>Customer Info</h1>
      <form onSubmit={submitHandler}>
        <div class="form-group container">
          <div class="row">
            <div class="col-sm">
              <label>Address</label>
            </div>
            <div class="col-sm">
              <input
                class="form-control"
                type="text"
                placeholder="Street"
                value={userInput.enteredStreet || ""}
                required
                onChange={streetChangeHandler}
              ></input>
            </div>
            <div class="col-sm">
              <input
                class="form-control"
                type="number"
                placeholder="Number"
                value={userInput.enteredNumber || ""}
                required
                onChange={numberChangeHandler}
              ></input>
            </div>
          </div>
        </div>

        <div class="form-group container">
          <div class="row">
            <div class="col-sm">
              <label>Apartment Information</label>
            </div>
            <div class="col-sm">
              <input
                class="form-control"
                type="text"
                placeholder="Doorbell"
                value={userInput.enteredDoorbell || ""}
                required
                onChange={doorbellChangeHandler}
              ></input>
            </div>
            <div class="col-sm">
              <select
                required
                onChange={floorChangeHandler}
                class="form-control"
              >
                <option>Select floor</option>
                <option>Ground floor</option>
                <option>1st floor</option>
                <option>2nd floor</option>
                <option>3rd floor</option>
                <option>4th floor</option>
              </select>
            </div>
          </div>
        </div>

        <div class="form-group container">
          <div class="row">
            <div class="col-sm">
              <label>Contact Information</label>
            </div>
            <div class="col-sm">
              <input
                class="form-control"
                type="tel"
                placeholder="home-phone 012-345-6789"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                value={userInput.enteredPhone || ""}
                required
                onChange={phoneChangeHandler}
              ></input>
            </div>
            <div class="col-sm">
              <input
                class="form-control"
                type="tel"
                placeholder="mobile-number 012-345-6789"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                value={userInput.enteredMobile || ""}
                required
                onChange={mobileChangeHandler}
              ></input>
            </div>
          </div>
        </div>

        <button className="btn btn-warning" style={{ color: "white" }}>
          Submit
        </button>
      </form>
    </Card>
  );
}

export default CustomerInfo;
