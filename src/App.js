
import './App.css';
import Calculator from './components/Calculator';
import ReactFragment from './components/ReactFragment';
import Tables from './components/Tables';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Hi, Namaste</h1>
          {/* <ReactFragment /> */}
          {/* <Tables /> */}
          <Calculator />
      </header>
    </div>
  );
}

export default App;
