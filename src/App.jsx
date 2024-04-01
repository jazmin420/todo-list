import { useState } from 'react';
import './App.css'
import { useDispatch } from 'react-redux';
import TodoList from './components/TodoList';
import { actions } from './REDUX/todoSlice';


function App() {

    const [text, setText] = useState('');
    const dispatch = useDispatch();
  
  return (
    <>
     <div className='container m-5'>
       <h1 className='text-center text-warning'>My Todo List</h1>
       <form
        onSubmit={e => {
          e.preventDefault();
          dispatch(actions.addTodo(text));
          setText('');
        }}
      >
       <div className='d-flex justify-content-center align-items-center mt-5'>
          <input className='p-1 me-2' value={text} onChange={e => setText(e.target.value)} placeholder='Add Todo....'/>
          <button className='btn btn-info' type="submit">Submit</button>
       </div>
      </form>

   <div className='mt-5'> <TodoList /></div>
   </div>
    </>
  )
}

export default App
