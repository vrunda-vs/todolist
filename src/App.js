import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  const handleclick=id=>dispatch({
    type:'REMOVE_TODO',
    payload:id, 
  })
  if (!todos || !todos.length) {
    return <p>no todos</p>
  }
  return (
    <ul>
      {todos.map(todo => <li onClick={()=>handleclick(todo.id)}>{todo.label}</li>)}
    </ul>
  )
};
const TodoInput = () => {
  const dispatch = useDispatch();
  const [newtodo, setnewtodo] = useState();
  const handlechange = event => setnewtodo(event.target.value);

  const handleclick = () => dispatch({
    type: 'ADD_TODO',
    payload: {
      label: newtodo,
      id: Math.ceil(Math.random() * 100),
      status:false,
    }
  })
  return (
    <div>
      <>
        <input type="text" onChange={handlechange}  value={newtodo} />
        <button onClick={handleclick}>ADD</button>
      </>
    </div>
  )
};

const Todostatus = () => {
  const dispatch = useDispatch();
  const handleclick = () => dispatch({
    type: 'ACTIVE_TODO',
  })
  const handleclickcomp = () => dispatch({
    type: 'COMPLITE_TODO',
  })
  return (
    <div>
      <>
        <button onClick={handleclick}>Active</button>
        <button onClick={handleclickcomp}>Completed</button>
      </>
    </div>
  )
};
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          ToDo List
        </p>
        <Todos />
        <TodoInput />
        <Todostatus/>
      </header>
    </div>
  );
}

export default App;
