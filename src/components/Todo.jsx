import React from 'react'
import { useDispatch } from 'react-redux';
import { actions  } from '../REDUX/todoSlice';



function Todo({ id, text, completed })  {
    const dispatch = useDispatch();
  
  return (
    <>
   <div style={{backgroundColor:'whitesmoke'}} className='d-flex justify-content-around align-items-center'>
      <input style={{width: '20px', height: '20px'}} type="checkbox" checked={completed} onChange={() => dispatch(actions.toggleTodo(id))} />
      <span style={{fontSize: '24px', padding: '20px'}}>{text}</span>
      <button className='btn' style={{border: 'none', color: 'red'}} onClick={() => dispatch(actions.deleteTodo(id))}>
        Delete
      </button>
    </div>
    </>
  )
}

export default Todo