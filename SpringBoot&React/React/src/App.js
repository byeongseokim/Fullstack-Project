import { useState } from 'react';
import './App.css';

const Todo = (props) => {
  const [item, setItem] = useState({
    id: "0",
    title: "Hello World 1",
    done: true
  }
  );


  return (
    <div className='App'>
      <Todo item={item} />
    </div>
  );
}

export default Todo;
