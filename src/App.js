import { useEffect, useState } from 'react';
import axios from 'axios';


import logo from './assets/logo.svg';
import './assets/App.css';
import Input from './componment/Input';
import './assets/all.scss'

function App() {
  const [text, setText] = useState("");
  const handleValue = (e) => {
    
    setText(e.target.value);
  }
  useEffect(()=>{
    ( async () => {
      const res = await axios.get('https://randomuser.me/api/')
      console.log(res);
      
    })()
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <input type="text" name="" id="" />wonwoo
        <p> ooooooooooooooo
        </p>
        <button type="button" className="btn btn-primary">Primary</button>
        <Input id="hehe" text="This is REACT!" value={text} handleValue={handleValue}></Input>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 
        </a>
      </header>
    </div>
  );
}

export default App;
