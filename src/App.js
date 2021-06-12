import Index from "./pages/index";
import User from "./pages/users";
import Login from "./pages/login";
import { Route, Switch } from "react-router-dom";
import { SideDrawerProvider } from './context/SideDrawerContext'
function App() {
    return (
        <Switch>
            <SideDrawerProvider>
                <Route component={Index} path="/" exact />
                <Route component={User} path="/users" exact />
            </SideDrawerProvider>
            <Route component={Login} path="/login" exact />
        </Switch>
    );
}

export default App;
