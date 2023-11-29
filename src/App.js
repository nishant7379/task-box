import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Header from './Components/Header';
import TaskList from './Components/TaskList';
import AddTask from './Components/AddTask';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<TaskList tasks={tasks} />}/>
          <Route path="/add" element={<AddTask onAddTask={handleAddTask} />}/>
        </Routes>
    </Router>
  );
};

export default App;
