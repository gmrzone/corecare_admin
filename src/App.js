
import Index from './pages/index'
import User from './pages/users'
import Login from './pages/login'
import { Route, Switch } from 'react-router-dom'


function App() {
  return (
      <Switch>
        <Route component={Index} path="/" exact/>
        <Route component={User} path="/users" exact />
        <Route component={Login} path="/login" exact />
      </Switch>
  );
}

export default App;
