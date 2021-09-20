import React from "react";

export interface ITask {
    label: string
    id: string
    isComplete: boolean
}

export interface ITaskProps {
    tasks: ITask[]
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>

}