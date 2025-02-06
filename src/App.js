import React from "react";
import "./App.css";
import { HeaderDarkMode } from "./Components/HeaderDarkMode";
import { Bmi } from "./Components/Bmi";

function App() {
  return (
    <div>
      <HeaderDarkMode />
      <Bmi />
    </div>
  );
}

export default App;
