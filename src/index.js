import React, { useState } from "react";
import ReactDOM from "react-dom";
import ShowComment from '../src/components/Toggle/ShowCommentToggle';
import "./styles.css";

function App() {
  const [counter, setCounter] = useState(0);

  const addtoCartHandler = () => {
    setCounter(counter + 1);
  };

  const removeFromCounter = () => {
    return counter > 0 ? setCounter(counter - 1) : alert("cart is empty");
  };
  return (
    <div className="App">
      <h1>Sugar</h1>

      {/* <h2>Start editing to see some magic happen!</h2> */}
      <button
        style={{ width: "150px", background: "lightgreen" }}
        onClick={() => addtoCartHandler()}
      >
        Add to cart
      </button>
      <button
        style={{ width: "150px", background: "red", color: "white" }}
        onClick={() => removeFromCounter()}
      >
        Remove from cart
      </button>
      <h2>
        {" "}
        <span role="img">🛒</span>Cart: {counter}
      </h2>
      <ShowComment/>
      
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
