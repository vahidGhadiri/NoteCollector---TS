import React from "react"
import {ITaskProps} from "../../Types/index.interface";


const Focus: React.FC<ITaskProps> = ({tasks}) => {
    const task = tasks[0]

    return (
        <div>
            {task ? <div>{task.label}</div> : <div>There is no task!</div>}
        </div>
    )
}

export default Focus