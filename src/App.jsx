import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <HeaderWithButton />
      <Header name="Value" />
    </>
  );
}

function Header({ name }) {
  return <h1>{name}</h1>;
}

function HeaderWithButton() {
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
    </>
  );
}
export default App;
