import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'


function App() {
  return (
    <div className="App">
      <Greet name="Bruce" heroname="Batman"> This is children props </Greet>
      <Greet name="Clark" heroname="Superman"> <button>Meow</button> </Greet>
      <Greet name="Diana" heroname="Wonder Woman"/>
      <Welcome name="Bruce" heroname="Batman"></Welcome>
      <Welcome name="Clark" heroname="Superman"/>
      <Welcome name="Diana" heroname="Wonder Woman"/>
    </div>
  );
}

export default App;
