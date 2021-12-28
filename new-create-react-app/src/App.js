import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const buttonInitialState = 'Click me!';
  const [textButton, setTextButton] = useState(buttonInitialState);



  useEffect(() => {
    if (textButton !== buttonInitialState) {
      return (
        setTimeout(() => setTextButton(buttonInitialState), [3000]));
    }
  }, [textButton]);


  function changeText() {
    if (textButton === buttonInitialState) {
      return (setTextButton('You clicked me!'));
    }
    if (textButton === 'You clicked me!') {
      return (setTextButton('Stop clicking me!'));
    }
  }
  



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button type="button" onClick={changeText}> {textButton} </button>
      </header>
    </div>
  );
}

export default App;
