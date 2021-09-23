import React, {MouseEventHandler} from "react"
import {ITaskProps} from "../../Types/index.interface";


const Focus: React.FC<ITaskProps> = ({tasks, setTasks, updateCompletion, focusedTask: task, shuffleFocusedTask}) => {

    const handleMarkCompleted: MouseEventHandler<HTMLButtonElement> = () => {
        if (task) updateCompletion(task.id, true)
    }

    return task ? (
        <div>
            <div>{task.label}</div>
            <button onClick={handleMarkCompleted}>Mark Completed</button>
            <button onClick={shuffleFocusedTask}>skip</button>
        </div>
    ) : (
        <div>
            There is no fucking incomplete task!
        </div>
    )
}

export default Focus