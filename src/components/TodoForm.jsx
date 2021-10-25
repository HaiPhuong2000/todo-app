import React, { useState } from 'react';
import './style.less';
function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput('');
  };
  return (
    <form onSubmit={handleSubmit} autocomplete="off">
      {props.edit ? (
        <>
          <input
            className="input-update"
            type="text"
            name="text"
            placeholder="Update your item"
            value={input}
            onChange={handleChange}
          />
          <button className="btnSubmitEdit" onClick={handleSubmit}>
            Submit Edit
          </button>
        </>
      ) : (
        <>
          <input
            className="input-add"
            placeholder="Add a todo"
            value={input}
            onChange={handleChange}
            name="text"
          />
          <button onClick={handleSubmit} className="btnAdd">
            Add todo
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
