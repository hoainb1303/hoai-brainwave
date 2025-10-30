import { useState } from "react";

import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="pt-19 lg:pt-21 overflow-hidden">
        <Header></Header>
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
