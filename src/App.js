import './App.css';
import Dictionary from "./Dictionary";
import logo from "./logo.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <img src={logo} className="App-logo img-fluid" alt="logo" />
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer"> 
        <small>Coded by SheCodes</small>
        </footer>
    </div>
  );
}

export default App;
