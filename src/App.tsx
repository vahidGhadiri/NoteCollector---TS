import React, {ChangeEventHandler, useState} from "react"
import {BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";

import {List, Focus} from "./Screens/index";
import {ITask} from "./Types/index.interface";

const App: React.FC = () => {
    const [tasks, setTasks] = useState<ITask[]>([])

    const updateTaskCompletion = (taskId: string, isComplete: boolean) => {
        setTasks((tasks) =>
            tasks.map((task) => {
                if (task.id === taskId) return {...task, isComplete}
                return task
            })
        )
    }

    return (
        <Router>
            <nav>
                <NavLink to="/" activeStyle={{fontWeight: "bold"}} exact>List</NavLink>
                <NavLink to="/focus" activeStyle={{fontWeight: "bold"}} exact>Focus</NavLink>
            </nav>

            <Switch>
                <Route path="/" exact>
                    <List tasks={tasks} setTasks={setTasks} updateCompletion={updateTaskCompletion}/>
                </Route>
                <Route path="/focus" exact>
                    <Focus tasks={tasks} setTasks={setTasks} updateCompletion={updateTaskCompletion}/>
                </Route>
            </Switch>
        </Router>
    )
}

export default App