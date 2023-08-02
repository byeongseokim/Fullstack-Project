import React, { useEffect, useState } from 'react';
import './App.css';
import Todo from "./Todo";
import { Container, List, Paper, Grid, Button, AppBar, Toolbar, Typography } from "@mui/material";
import AddTodo from "./AddTodo";
import { call, signout } from "./service/ApiService";

function App() {


  const [items, setItems] = useState([]);

  useEffect(() => {
    call("/todo", "GET", null)
      .then((response) => setItems(response.data));
  }, []);

  //   const requestOptions = {
  //     method: "GET",
  //     Headers: { "Content-Type": "application/json" },
  //   };

  //   fetch("http://localhost:8094/todo", requestOptions)
  //     .then((response) => response.json())
  //     .then(
  //       (response) => {
  //         setItems(response.data);
  //       },
  //       (error) => { }
  //     );
  // }, []);

  const editItem = (item) => {
    call("/todo", "PUT", item)
      .then((response) => setItems(response.data));
    // setItems([...items]);
  };

  const addItem = (item) => {
    call("/todo", "POST", item)
      .then((response) => setItems(response.data));
  };
  //   item.id = "ID-" + items.length; // Key를 위한 id
  //   item.done = false; // done 초기화
  //   // 업데이트는 반드시 setItems로 하고 새 배열을 만들어야 한다.
  //   setItems([...items, item]);
  //   console.log("items : ", items);
  // };

  const deleteItem = (item) => {
    call("/todo", "DELETE", item)
      .then((response) => setItems(response.data));
    // //삭제할 아이템을 찾는다.
    // const newItems = items.filter(e => e.id !== item.id);
    // //삭제할 아이템을 제외한 아이템을 다시 배열에 저장한다.
    // setItems([...newItems])
  };

  // navigationBar 추가
  let navigationBar = (
    <AppBar position='static'>
      <Toolbar>
        <Grid justifyContent="space-between" container>
          <Grid item>
            <Typography variant='h6'>오늘의 할일</Typography>
          </Grid>
          <Grid item>
            <Button color='inherit' raised onClick={signout}>
              로그아웃
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );



  let todoItems = items.length > 0 && (
    <Paper style={{ margin: 16 }}>
      <List>
        {items.map((item) => (
          <Todo item={item} key={item.id} editItem={editItem} deleteItem={deleteItem} />
        ))}
      </List>
    </Paper>
  );
  return (
    <div className='App'>
      {navigationBar} {/* 네이게이션 바 헨더링*/}
      <Container maxWidth="md">
        <AddTodo addItem={addItem} />
        <div className='TodoList'>{todoItems}</div>
      </Container>
    </div>
  );
}




export default App;