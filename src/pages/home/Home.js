// import Navigation from "../"
import Navigation from "./../../reusables/Navigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../../scss/home.scss";
import Settings from "./../settings/Settings";
import Dashboard from "./../dashboard/Dashboard";
import Transact from "./../transact/Transact";

export default function Home() {
  return (
    <Router>
      <div className="home test">
        <div className="main">
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/settings" component={Settings} />
            <Route path="/transact" component={Transact} />
          </Switch>
        </div>
        <Navigation />
      </div>
    </Router>
  );
}
