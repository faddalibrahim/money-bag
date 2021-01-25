import Dashboard from "./pages/dashboard/Dashboard";
import Settings from "./pages/settings/Settings";
import Home from "./pages/home/Home";
import Error from "./pages/error/Error";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./scss/App.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/settings" component={Settings} />
        <Route path="*" component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
