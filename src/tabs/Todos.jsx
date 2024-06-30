import { Form, Text } from 'components';
import { useState } from 'react';

export const Todos = () => {

  const [todos, setTodos] = useState([]);
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
   };
  return <>
    <Form onSubmit={addTodo} />
    <Text textAlign="center">There are no any todos ...</Text>
  </>;
};
