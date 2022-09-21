// import logo from "./logo.svg";
import "./App.css";

function App() {
  const names = ["Shariar", "Shourov"];
  return (
    <div className="App">
      {names.map((name) => (
        <li>{name}</li>
      ))}
      <Person name={names[1]}></Person>
      <Person name={names[0]}></Person>
      <Person></Person>
      <Person></Person>
      <Info></Info>
    </div>
  );
}

function Person(props) {
  return (
    <div className="person">
      <h1>
        Inn'Shaa'Allah, I will be a top ReactJS Developer In 2022 in the world
      </h1>
      <p>{props.name} FullStack Developer</p>
    </div>
  );
}
function Info() {
  return (
    <div className="info">
      <h1>I am from Info Component</h1>
    </div>
  );
}

export default App;
