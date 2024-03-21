import React from 'react'
import Todo from '../components/Todo';
import { useSelector } from 'react-redux';

function TodoList() {
  const todos = useSelector(state => state.todos);
  const completedTodos = todos.filter(todo => todo.completed).length;

  return (
    <>
    
    <div>
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} />
      ))}
       <p>Total completed todos: <strong>{completedTodos}</strong></p>
    </div>

    </>
  )

      }
export default TodoList