import ROUTES from "./Routes";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  const NAV = ROUTES.map(({ route, icon }, index) => {
    return (
      <div className="navlink-wrapper" key={index}>
        <NavLink to={`/${route}`}>
          <center>{icon}</center>
          <small
            style={{
              textTransform: "capitalize",
              fontSize: "0.8rem",
              fontWeight: "500",
            }}
          >
            {route}
          </small>
        </NavLink>
      </div>
    );
  });

  return <div className="navigation">{NAV}</div>;
}
