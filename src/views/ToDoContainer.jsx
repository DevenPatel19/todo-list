import React, {useState} from "react";
import TodoForm from "../components/ToDoForm";


const ToDoContainer = () => {
  
    const [todoList, setTodoList] = useState([]);
  
    return (
        <fieldset>
                <legend>ToDoContainer.jsx</legend>
                <h2>Todo List</h2>
                <TodoForm />
                {/* <TodoList /> */}
        </fieldset>
  )
}

export default ToDoContainer