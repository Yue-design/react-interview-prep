import "./App.css";
import { useState } from "react";

// const welcome = "Welcome to React"; // use const unless the variable will change

function App() {
  // parent component
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(prev => !toggle);
  };

  return (
    <div className="App">
      {/* {toggle ? <UserInput text="Welcome to React" /> : null} */}
      {toggle && <UserInput text="Welcome to React" />}
      <button onClick={handleToggle}>Show/Hide</button>
    </div>
  );
}

function UserInput(props) {
  // child component
  const { text } = props;
  return (
    <div className="App">
      <h1 className="App-title">{text}</h1>
    </div>
  );
}

export default App;
