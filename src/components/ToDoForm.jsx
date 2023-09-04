import React from 'react'
import { useState } from 'react'

const TodoForm = (props) => {

    const [activity, setActivity] = useState("");
    
    const [priority, setPriority] = useState(false);

    //? We need to be able to pass up (lift) the data from the form to update the state of the list in the parent!
    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = { activity, priority, completed: false };
        console.log(newTodo);

        props.addTodo(newTodo)
    }

    return (
        <fieldset>
            <legend>TodoForm.jsx</legend>


            <form onSubmit={handleSubmit}>
                <div>
                    <label>Activity : </label>
                    <input name="activity" type="text" value={activity} onChange={(e) => setActivity(e.target.value)} />
                </div>

                <div>
                    <label>High Priority?</label>
                    {/* Check boxes return true/false from the checked attribute */}
                    <input name="priority" type="checkbox" onChange={(e) => setPriority(e.target.checked)} />
                </div>
                <input type="submit" />
            </form>

        </fieldset>
    )
}

export default TodoForm