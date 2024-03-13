import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, nameSetter] = useState("Arbaz");
  return (
    <>
      <button
        onClick={() => {
          nameSetter(Math.random());
        }}
      >
        click
      </button>
      <Header title={name} />
      <Header title="Value" />
    </>
  );
}

const Header = React.memo(function Header({ title }) {
  return <h1>{title}</h1>;
});
export default App;
