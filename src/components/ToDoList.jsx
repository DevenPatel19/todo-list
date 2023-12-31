import React from 'react'

const TodoList = (props) => {

    //! Things we'll need...
    //? 1. Get our todoList from the parent!
    //? 2. Handle a Delete Function (using the function also from the parent)
    //? 3. Be able to toggle if an activity was completed and update the list. 
    //? -----> This should be defined in the parent and then used by the list.

    const handleDelete = (targetIdx) => {
        props.deleteTodo(targetIdx);
    }

    const handleUpdate = (targetIdx, targetBool) => {
        props.updateTodo(targetIdx, targetBool)
    }

    return (
        <fieldset>
            {/* <legend>TodoList.jsx</legend> */}
<br/>
            <table class="table">
                <thead>
                    <tr>
                        <th>Activity</th>
                        {/* <th>Time(Hrs)</th> */}
                        {/* <th>Completed</th> */}
                        <th>Action</th>
                        <th>Completed?</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.todoList.map(
                            (eachTodo, idx) => {

                                return (
                                    <tr key={idx} style={eachTodo.completed ? { backgroundColor: "#a8edbb" } : { backgroundColor: "white" }}>
                                        <td>{eachTodo.activity}</td>
                                        {/* <td>{eachTodo.time}</td> */}
                                        {/* <td>{eachTodo.completed ? "Yes" : "No"}</td> */}
                                        <td>
                                            <button  class="btn btn-danger" onClick={() => handleDelete(idx)}>Delete</button>
                                        </td>
                                        <td>
                                            <input type="checkbox" onChange={(e) => handleUpdate(idx, e.target.checked)} />
                                        </td>
                                    </tr>

                                )

                            }
                        )
                    }
                </tbody>
            </table>

        </fieldset >
    )
}

export default TodoList