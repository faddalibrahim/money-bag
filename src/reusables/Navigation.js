import ROUTES from "./Routes";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  const NAV = ROUTES.map(({ route, icon }) => {
    return (
      <div style={{ padding: "0.5rem" }}>
        <NavLink to={`/${route}`}>
          <center>{icon}</center>
          <small style={{ textTransform: "capitalize", fontSize: "0.8rem" }}>
            {route}
          </small>
        </NavLink>
      </div>
    );
  });

  return <div className="navigation">{NAV}</div>;
}
