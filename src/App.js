import './App.css';
import React from 'react';
import Header from './components/Header';
import Input from './components/Input';

function App() {
  return (
    <center className="container mt-3">
      <Header />
      <div className="main half p-3">
        <Input />
      </div>
    </center>
  );
}

export default App;
