import React, {ChangeEventHandler, KeyboardEventHandler, MouseEventHandler, useState} from "react"
import {nanoid} from "nanoid";

import {ITask} from "../../Types/index.interface";


const List: React.FC = () => {
    const [tasks, setTasks] = useState<ITask[]>([])
    const [newTaskLabel, setNewTaskLabel] = useState('')


    const handleNewTaskLabelChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setNewTaskLabel(e.target.value)
    }

    const handleNewTaskKeyPress: KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === "Enter" && newTaskLabel !== '') {
            setTasks([...tasks, {id: nanoid(), label: newTaskLabel, isComplete: false}])
            setNewTaskLabel('')
        }
    }

    const handleTaskCompleteChange = (handleTask: ITask): ChangeEventHandler<HTMLInputElement> => (e) => {
        setTasks((tasks) =>
            tasks.map((task => {
                if (task.id === handleTask.id) return {...task, isComplete: e.target.checked}
                return task
            }))
        )
    }

    const handleClearClicked: MouseEventHandler<HTMLButtonElement> = (): void => {
        const completedTasks = tasks.filter(task => !task.isComplete)
        setTasks(completedTasks)
    }

    const handleTaskDelete = (handleTask: ITask) => {
        const deletedTask = tasks.filter(task => task.id !== handleTask.id)
        setTasks(deletedTask)
    }


    return (
        <>
            <div>
                {tasks.map((task) => (
                    <div key={task.id}>
                        <input type="checkbox"
                               checked={task.isComplete}
                               onChange={handleTaskCompleteChange(task)}/>
                        <span>{task.label}</span>
                        <button onClick={() => handleTaskDelete(task)}>Delete</button>
                    </div>
                ))}
            </div>
            <input value={newTaskLabel}
                   onChange={(e) => handleNewTaskLabelChange(e)}
                   onKeyPress={(e) => handleNewTaskKeyPress(e)}
            />
            <div>
                <button onClick={handleClearClicked}>Clear Completed</button>
            </div>
        </>
    )
}

export default List