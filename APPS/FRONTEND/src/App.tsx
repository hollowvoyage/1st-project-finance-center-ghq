import { useState, useEffect } from "react";
import "./App.css";

function App() {
  //state
  const [data, setData] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/test"); //GET
      setData(await response.text());
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [data]);

  return <h1>{data}</h1>;
}

export default App;
