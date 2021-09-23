import React from "react";

export interface ITask {
    label: string
    id: string
    isComplete: boolean
}

export interface ITaskProps {
    addTask: (task: Pick<ITask, 'label'>) => void
    focusedTask?: ITask
    tasks: ITask[]
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
    shuffleFocusedTask: () => void
    updateCompletion: (taskId: string, isComplete: boolean) => void
}