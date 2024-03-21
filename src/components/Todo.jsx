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
      <button style={{border: 'none'}} onClick={() => dispatch(actions.deleteTodo(id))}>
        <i className='fa-solid fa-trash text-danger'></i>
      </button>
    </div>
    </>
  )
}

export default Todo