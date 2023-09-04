import React, {useState} from "react";
import TodoForm from "../components/ToDoForm";
import TodoList from "../components/ToDoList";




const ToDoContainer = () => {
  
    // ToDo List State Tracking
    const [todoList, setTodoList] = useState([]);
  
    // add new ToDo's

    const addTodo = (newTodo) => {
      setTodoList([...todoList, newTodo])
      console.log(todoList);
    }

    // delete Todo's
    const deleteTodo = (targetIdx) => {
      const filteredList = todoList.filter(
          (eachToDo, idx) => targetIdx !== idx)

      setTodoList(filteredList);
  }

    const updateTodo = (targetIdx, targetBool) => {
      const updatedList = todoList.map(
          (eachTodo, idx) => {
              if (targetIdx === idx) {
                  return { ...eachTodo, completed: targetBool }
              } else {
                  return eachTodo;
              }
          }
      )
      setTodoList(updatedList);

}
    return (
        <fieldset>
                {/* <legend>ToDoContainer.jsx</legend> */}
                <h2>Todo List</h2>
                <TodoForm addTodo={addTodo}/>
                <TodoList todoList={todoList} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
        </fieldset>
  )
}

export default ToDoContainer