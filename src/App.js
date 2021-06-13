import Index from "./pages/index";
import User from "./pages/users";
import Login from "./pages/login";
import Employee from './pages/employees'
import Orders from './pages/orders'
import Coupons from './pages/coupons'
import Comments from './pages/comments'
import Services from './pages/services'
import Posts from './pages/posts'
import Subcategory from './pages/subcategory'
import { Route, Switch } from "react-router-dom";
import { SideDrawerProvider } from "./context/SideDrawerContext";

function App() {
    return (
        <Switch>
            <SideDrawerProvider>
                <Route component={Index} path="/" exact />
                <Route component={User} path="/users" exact />
                <Route component={Employee} path="/employees" exact />
                <Route component={Orders} path="/orders" exact />
                <Route component={Services} path="/services" exact />
                <Route component={Coupons} path="/coupons" exact />
                <Route component={Comments} path="/comments" exact />
                <Route component={Posts} path="/posts" exact />
                <Route component={Subcategory} path="/subcategory" exact />
                <Route component={Login} path="/login" exact />
            </SideDrawerProvider>
        </Switch>
    );
}

export default App;
