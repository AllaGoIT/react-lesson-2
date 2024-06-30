import { Form, Text, TodoList } from 'components';
import { useState } from 'react';

export const Todos = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = newTodo => {
    setTodos([...todos, newTodo]);
  };
  const deleteTodo = id => {
    const upDatedTodos = todos.filter(item => {
      return item.id !== id;
    });
    setTodos(upDatedTodos);
  };

  return (
    <>
      <Form onSubmit={addTodo} />
      {todos.length ? (
        <TodoList deleteTodo={deleteTodo} items={todos} />
      ) : (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
    </>
  );
};
