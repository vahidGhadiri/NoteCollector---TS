import React, {MouseEventHandler} from "react"
import {ITaskProps} from "../../Types/index.interface";


const Focus: React.FC<ITaskProps> = ({tasks, setTasks, updateCompletion}) => {
    const task = tasks.filter(task => !task.isComplete)[0]

    const handleMarkCompleted: MouseEventHandler<HTMLButtonElement> = () => {
        updateCompletion(task.id, true)
    }

    return task ? (
        <div>
            <div>{task.label}</div>
            <button onClick={handleMarkCompleted}>Mark Completed</button>
        </div>
    ) : (
        <div>
            There is no fucking incomplete task!
        </div>
    )
}

export default Focus