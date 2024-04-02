import React from 'react'
import { useDispatch } from 'react-redux';
import { actions  } from '../REDUX/todoSlice';

function Todo({ id, text, completed })  {
    const dispatch = useDispatch();
  
  return (
    <>
   <div style={{backgroundColor:'whitesmoke', border: '1px solid grey'}} className='d-flex justify-content-between align-items-center m-1 p-2'>
      <input 
      style={{width: '20px', height: '20px'}}
      type="checkbox" checked={completed} onChange={() => dispatch(actions.toggleTodo(id))} />

      <span 
      style={{fontSize: '24px', padding: '20px', backgroundColor: 'whitesmoke'}}>
      {text}</span>

      <button
      className='btn' style={{border: 'none', color: 'red'}}
      onClick={() => dispatch(actions.deleteTodo(id))}>
        Delete
      </button>
    </div>
    </>
  )
}

export default Todo