// import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}
function LoadCountries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h1>Visiting Every Country</h1>
      <h2>Data :{countries.length} </h2>
      {countries.map((country) => (
        <Country name={country.name.common}></Country>
      ))}
    </div>
  );
  function Country(props) {
    return (
      <div>
        <h2> Name : {props.name}</h2>
      </div>
    );
  }
}

export default App;
