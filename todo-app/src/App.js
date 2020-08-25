import React, { useState, useRef, useCallback, useReducer } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

  // const [todos, setTodos] = useState([
  //   {
  //     id:1,
  //     text:'리액트 기초 알아보기',
  //     checked:true
  //   },
  //   {
  //     id:2,
  //     text:'컴포넌트 스타일링 해보기',
  //     checked:true
  //   },
  //   {
  //     id:3,
  //     text:'일정 관리 앱 만들어 보기',
  //     checked:false
  //   }
  // ]);

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

function toDoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT':
      return todos.concat(action.todo);
    case 'REMOVE':
      return todos.filter(todo => todo.id !== action.id);
    case 'TOGGLE':
      return todos.map(todo =>
      todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
    )
    default:
      return todos;
  }
}

const App = () => {
  const [todos, dispatch] = useReducer(toDoReducer, undefined, createBulkTodos);
  const nextId = useRef(4);
  const onInsert = useCallback(text =>{
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    }
    dispatch({type: 'INSERT', todo})
    nextId.current += 1;
  }, []);
  const onRemove = useCallback(id =>{
    dispatch({type: 'REMOVE', id});
  }, [todos])
  const onToggle = useCallback(id =>{
    dispatch({type: 'TOGGLE', id});
  }, [todos]);
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;
