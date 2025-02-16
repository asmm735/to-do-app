import "./App.css" 
import { useState } from "react";
import InputContainer from "./components/InputContainer"
import TodoAdder from "./components/TodoAdder"

function App(){
  const [inputVal, setInputVal] = useState('');
  const [todos, setTodos] = useState([])

  function writeToDo(e){
      setInputVal(e.target.value)
  }
  function addTask(){
    if(inputVal!=''){
      setTodos((prevTodos)=>[...prevTodos,inputVal])
      setInputVal('')
    }
  }

  function deleteTask(todoIndex){
    setTodos((prevTodos)=>prevTodos.filter((prevTodos,prevTodosIndex)=>{
      return prevTodosIndex!= todoIndex;
    }))
  }
  return(
    <main>
      <h1>TO DO list</h1>
      <InputContainer inputVal={inputVal} writeToDo={writeToDo} addTask={addTask}/>
      <TodoAdder todos={todos} deleteTask={deleteTask}/>
    </main>
  )
}

export default App
