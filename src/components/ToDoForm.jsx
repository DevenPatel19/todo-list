import React from 'react'
import { useState } from 'react'

const TodoForm = (props) => {

    const [activity, setActivity] = useState("");
    
    const [completed, setCompleted] = useState(false);

    //? We need to be able to pass up (lift) the data from the form to update the state of the list in the parent!
    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = { activity, completed };
        console.log(newTodo);

        props.addTodo(newTodo)
    }

    return (
     

        < >
            <form onSubmit={handleSubmit}>
                <div class="col-12">
                    <label>Activity : </label>
                    <input class="form-control" name="activity" type="text" value={activity} onChange={(e) => setActivity(e.target.value)} />
                </div>

                <div class="col-12">
                    <label>Completed?</label>
                    {/* Check boxes return true/false from the checked attribute */}
                    <input class="form-control" name="completed" type="checkbox" onChange={(e) => setCompleted(e.target.checked)} />
                </div>
                <br/>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
        </>

          )
    }
export default TodoForm