import React from 'react'

function Task({todo,index,deleteTask}) {
  return (
    <div className="todo">
      <p>{todo}</p>
      <div className="actions">
          <input type="checkbox"/>
          <button onClick={()=>deleteTask(index)}>Delete</button>
      </div>
    </div>
  )
}

export default Task