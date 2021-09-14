import React, {ChangeEventHandler, KeyboardEventHandler, useState} from "react"


type Task = {
    label: string,
}

const List: React.FC = () => {
    const [task, setTask] = useState<Task[]>([])
    const [newTaskLabel, setNewTaskLabel] = useState('')


    const handleNewTaskLabelChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setNewTaskLabel(e.target.value)
    }

    const handleNewTaskKeyPress: KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === "Enter") setTask([...task, {label: newTaskLabel}])
    }

    return (
        <>
            <ul>
                {task.map((task, index) => (
                    <li key={index}>{task.label}</li>
                ))}
            </ul>
            <input value={newTaskLabel}
                   onChange={(e) => handleNewTaskLabelChange(e)}
                   onKeyPress={(e) => handleNewTaskKeyPress(e)}
            />
        </>
    )
}

export default List