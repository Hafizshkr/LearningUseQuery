import { useState } from "react";
import Navbar from "./components/Navbar";
import People from "./components/Peoples";
import Planets from "./components/Planets";


const App = () => {
  const [page, setPage] = useState("planets");

  return (
    <div>
      <div className="App">
        <h1>Star Wars Info</h1>
        <Navbar setPage={setPage} />
        <div className="content">
          {page === "planets" ? <Planets /> : <People />}
        </div>
      </div>
    </div>
  );
};

export default App;
