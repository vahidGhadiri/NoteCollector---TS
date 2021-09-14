import React from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import {List, Focus} from "./Screens/index";

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={List} exact/>
                <Route path="/focus" component={Focus} exact/>
            </Switch>
        </Router>
    )
}

export default App