// import Navigation from "../"
import Navigation from "./../../reusables/Navigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../../scss/home.scss";
import Settings from "./../settings/Settings";
import Dashboard from "./../dashboard/Dashboard";

export default function Home() {
  return (
    <Router>
      <div className="home">
        <div className="main">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/settings" component={Settings} />
            {/* <Route path="*" component={Error} /> */}
          </Switch>
        </div>
        <Navigation />
      </div>
    </Router>
  );
}
