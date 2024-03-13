import { useState } from "react";
import "./App.css";

function App() {
  const [name, state] = useState("Arbaz");
  return (
    <>
      <button
        onClick={() => {
          state((value) => (value = Math.random()));
        }}
      >
        Click
      </button>
      <Header name={name} />
      <Header name="Value" />
    </>
  );
}

function Header({ name }) {
  return <h1>{name}</h1>;
}
export default App;
