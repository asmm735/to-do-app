import React from 'react'

function InputContainer({inputVal, writeToDo, addTask}) {

  return (
    <div className="input-container">
        <input type="text" onChange={writeToDo} value={inputVal}/>
        <button onClick={addTask}>+</button>
      </div>
  )
}

export default InputContainer