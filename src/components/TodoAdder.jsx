import React from 'react'
import Task from './Task'
function TodoAdder({todos, deleteTask}) {
  return (
    <div className="container">
        {todos.map((todo, index)=>{
            return(
                <Task todo={todo} index={index} deleteTask={deleteTask}/>
            )
        })}
  </div>
  )
}

export default TodoAdder