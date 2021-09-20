import React, {useState} from "react"
import {BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";

import {List, Focus} from "./Screens/index";
import {ITask} from "./Types/index.interface";

const App: React.FC = () => {
    const [tasks, setTasks] = useState<ITask[]>([])
    const tasksProps = {tasks, setTasks}

    return (
        <Router>

            <nav>
                <NavLink to="/" activeStyle={{fontWeight: "bold"}} exact>List</NavLink>
                <NavLink to="/focus" activeStyle={{fontWeight: "bold"}} exact>Focus</NavLink>
            </nav>

            <Switch>
                <Route path="/" exact><List {...tasksProps}/></Route>
                <Route path="/focus" exact><Focus {...tasksProps}/></Route>
            </Switch>
        </Router>
    )
}

export default App