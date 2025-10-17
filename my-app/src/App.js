import logo from './logo.svg';
import './App.css';


let name = "somnath";

function App() {
  return (
    <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contect Me</li>
      </nav>
      <div className="contener">
        <h1>Hellow {name} </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aperiam illo repellendus odit, quo minima autem corrupti, quod, eum tempore dolore nisi! Molestias perspiciatis atque aliquam aperiam temporibus unde facere. Nihil quisquam maiores possimus!</p>
      </div>
    </>
  );
}

export default App;
