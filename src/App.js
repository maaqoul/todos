import { useState } from 'react';
import TodoList from './components/TodoList';
import TodoCounter from './components/TodoCounter';
import AddTodo from './components/AddTodo';
import './App.css';



function App() {
  const [todo, setTodo] = useState('add todo')

  
   
  return (
    <div className="App">
        <AddTodo />
        
          <TodoCounter  />
          <TodoList />
    </div>
  );
}

export default App;
