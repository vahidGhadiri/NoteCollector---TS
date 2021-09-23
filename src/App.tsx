import React, {ChangeEventHandler, KeyboardEventHandler, useState} from "react"
import {BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";
import {shuffle} from "lodash";

import {List, Focus} from "./Screens/index";
import {ITask} from "./Types/index.interface";
import {nanoid} from "nanoid";


const App: React.FC = () => {
    const [tasks, setTasks] = useState<ITask[]>([])
    const [focusedTaskId, setTaskFocusedId] = useState<string | undefined>(undefined)

    const updateTaskCompletion = (taskId: string, isComplete: boolean) => {
        setTasks((tasks) =>
            tasks.map((task) => {
                if (task.id === taskId) return {...task, isComplete}
                return task
            })
        )
    }

    const focusedTask = tasks.find(task => task.id === focusedTaskId)

    const shuffleFocusedTask = () => {
        setTaskFocusedId(
            shuffle(tasks.filter(task => !task.isComplete))[0]?.id
        )
    }

    const addTask = (task: Pick<ITask, "label">) => {
        const id = nanoid()
        setTasks([...tasks, {id, label: task.label, isComplete: false}])
        if (!focusedTaskId) setTaskFocusedId(id)
    }

    return (
        <Router>
            <nav>
                <NavLink to="/" activeStyle={{fontWeight: "bold"}} exact>List</NavLink>
                <NavLink to="/focus" activeStyle={{fontWeight: "bold"}} exact>Focus</NavLink>
            </nav>

            <Switch>
                <Route path="/" exact component={List}>
                    <List updateCompletion={updateTaskCompletion}
                          addTask={addTask}
                          focusedTask={focusedTask}
                          tasks={tasks}
                          setTasks={setTasks}
                          shuffleFocusedTask={shuffleFocusedTask}/>
                </Route>
                <Route path="/focus" exact>
                    <Focus updateCompletion={updateTaskCompletion}
                           addTask={addTask}
                           focusedTask={focusedTask}
                           shuffleFocusedTask={shuffleFocusedTask}
                           tasks={tasks}
                           setTasks={setTasks}
                    />
                </Route>
            </Switch>
        </Router>
    )
}

export default App