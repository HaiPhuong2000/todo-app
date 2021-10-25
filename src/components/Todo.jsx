import React, { useState } from 'react';
import TodoForm from './TodoForm';
import './style.less';

function Todo({ todos, removeItem, updateItem }) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });
  const submitUpdate = (value) => {
    updateItem(edit.id, value);
    setEdit({
      id: null,
      value: '',
    });
  };
  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }
  return todos.map((todo, index) => (
    <div className="list-item" key={index}>
      <div className="item" key={todo.id}>
        {todo.text}
      </div>
      <div>
        <button
          className="btnEdit"
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
        >
          Edit
        </button>
        <button className="btnDelete" onClick={() => removeItem(todo.id)}>
          Delete
        </button>
      </div>
    </div>
  ));
}

export default Todo;
