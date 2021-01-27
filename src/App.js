import Dashboard from "./pages/dashboard/Dashboard";
import Settings from "./pages/settings/Settings";
import Transact from "./pages/transact/Transact";
import Home from "./pages/home/Home";
import Error from "./pages/error/Error";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./scss/App.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
        {/* <Route path="/dashboard" component={Dashboard} />
        <Route path="/settings" component={Settings} />
        <Route path="/transact" component={Transact} /> */}
        <Route path="*" component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
