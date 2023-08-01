import React, { useState } from 'react';
import './App.css';
import Todo from "./Todo";
import { List, Paper } from "@mui/material";

function App() {
  const [items, setItems] = useState([
    {
      id: "0",
      title: "Hello World 1",
      done: true,
    },
    {
      id: "1",
      title: "Hello World 2",
      done: true,
    },
  ]);

  let todoItems = items.length > 0 && (
    <Paper style={{ margin: 16 }}>
      <List>
        {items.map((item) => (
          <Todo item={item} key={item.id} />
        ))}
      </List>
    </Paper>
  );
  return (
    <div className='App'>
      {todoItems}
    </div>
  );
}

export default App;