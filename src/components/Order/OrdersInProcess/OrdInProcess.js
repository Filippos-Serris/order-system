function OrdInProcess(props) {
  function OnClickHandler() {}

  return (
    <div>
      <h1>Order in Process</h1>
      <h2>product title</h2>
      <input type="checkbox" id="prod" />
      <label for="prod">Ready</label>
      <h2>timer</h2>
      <button onClick={OnClickHandler}>Ready</button>
    </div>
  );
}
export default OrdInProcess;
