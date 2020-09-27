import React, { useState } from 'react';

import './App.css';
import Overview from './components/Overview'

function App() {
  const [ inputText, setText ] = useState("");
  const [ tasks, setTask ] = useState([])

  const inputTextHandler = (event) => {
    setText(event.target.value);
  }

  const addTask = (event) => {
    event.preventDefault();
    console.log(inputText);
    setTask([
      ...tasks,
      {text: inputText, id: Math.random() * 100},
    ]);
    setText("");
    console.log(tasks)
  }

  return (
    <div>
      <div className="main-body">
        <h1>To-Do List</h1>
        <div className="form">
          <input type="text" onChange={inputTextHandler} value={inputText} />
          <button type="submit" onClick={addTask}>Add</button>
        </div>
      </div>
      <Overview tasks={tasks} />
    </div>
  );
}

export default App;
