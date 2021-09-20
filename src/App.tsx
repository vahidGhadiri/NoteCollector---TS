import React from "react"
import {BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";

import {List, Focus} from "./Screens/index";

const App: React.FC = () => {
    return (
        <Router>

            <nav>
                <NavLink to="/" activeStyle={{fontWeight: "bold"}} exact>List</NavLink>
                <NavLink to="/focus" activeStyle={{fontWeight: "bold"}} exact>Focus</NavLink>
            </nav>

            <Switch>
                <Route path="/" component={List} exact/>
                <Route path="/focus" component={Focus} exact/>
            </Switch>
        </Router>
    )
}

export default App