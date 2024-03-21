import { createSlice } from "@reduxjs/toolkit";


const todoSlice = createSlice({
  name: 'todos',
  initialState: { 
    todos: JSON.parse(localStorage.getItem('todos')) || [] 
   },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ id: Date.now(), text: action.payload, completed: false });
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
  },
});



 export const { actions, reducer } = todoSlice;
