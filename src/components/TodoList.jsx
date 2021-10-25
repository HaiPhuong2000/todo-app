import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import './style.less';

function TodoList(props) {
  let [todos, setTodos] = useState([]);
  const [search, setSearch] = useState('');

  //add new todo
  const addTodo = (todo) => {
    if (!todo.text) {
      return;
    }
    //add new todo and keep old todo
    const newTodo = [todo, ...todos];
    setTodos(newTodo);
  };

  const updateItem = (todoId, newValue) => {
    if (!newValue.text) {
      return;
    }
    //if update item, change the value, otherwise keep the same
    setTodos((prevItem) =>
      prevItem.map((item) => (todoId === item.id ? newValue : item)),
    );
  };

  const removeItem = (id) => {
    //create new array item, except  selected id
    const removedItem = [...todos].filter((todo) => todo.id !== id);
    setTodos(removedItem);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  if (search.length > 0) {
    todos = todos.filter((input) => {
      console.log(search.toLowerCase());
      return input.text.match(search);
    });
  }

  return (
    <div>
      <input
        className="input-search"
        type="text"
        placeholder="Search todo"
        onChange={handleSearch}
        value={search}
      />
      <TodoForm onSubmit={addTodo} />
      <div className="todo-item">
        <Todo todos={todos} removeItem={removeItem} updateItem={updateItem} />
      </div>
    </div>
  );
}

export default TodoList;
