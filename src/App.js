import React from 'react';
import './App.css';
import Header from "./components/Header";
import Card from './components/Card';
import data from "./components/data";

function App() {
  const Cards = data.map((item) => {
    return (
      <Card 
        item = {item}
      />
    )
  })
  return (
    <div className="App">
      <Header />
      <main>
        {Cards}
      </main>
    </div>
  );
}

export default App;
