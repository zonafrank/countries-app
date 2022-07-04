import axios from "axios";
import { useEffect, useState } from "react";
import Display from "./components/Display";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const handleSearch = (event) => {
    setSearchString(event.target.value);
  };

  let displayList;

  if (searchString.length === 0) {
    displayList = [];
  } else {
    displayList = countries.filter((c) =>
      c.name.official.toLowerCase().includes(searchString.toLowerCase())
    );
  }

  return (
    <div className="App">
      <div>
        find country{" "}
        <input type="text" onChange={handleSearch} value={searchString} />
      </div>
      <Display countryArray={displayList} />
    </div>
  );
}

export default App;
