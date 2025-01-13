import { useState } from "react";
import Navbar from "./Coding/navbar.jsx";
import Hero from "./Coding/hero.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}

export default App;
