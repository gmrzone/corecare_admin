
import Index from './pages/index'
import User from './pages/users'
import { Route, Switch } from 'react-router-dom'


function App() {
  return (
      <Switch>
        <Route component={Index} path="/" exact/>
        <Route component={User} pathj="/users" exact />
      </Switch>
  );
}

export default App;
