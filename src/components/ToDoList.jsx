import React from 'react'

const TodoList = (props) => {
  
    const handleDelete = (targetIdx) => {
        props.deleteToDo(targetIdx);
    }

    const handleUpdate = (targetIdx, targetBool) => {
        props.updatePlan(targetIdx, targetBool)
    }


    return (
     <fieldset>
            <legend>PlanList.jsx</legend>

            <table border="3">
                <thead>
                    <tr>
                        <th>Activity</th>
                        
                        <th>High Priority</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        props.planList.map(
                            (eachPlan, idx) => {

                                return (
                                    <tr key={idx} style={eachPlan.completed ? { backgroundColor: "green" } : { backgroundColor: "white" }}>
                                        <td>{eachPlan.activity}</td>
                        
                                        <td>{eachPlan.priority ? "Yes" : "No"}</td>
                                        <td>
                                            <button onClick={() => handleDelete(idx)}>Delete</button>
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