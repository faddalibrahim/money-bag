import DashboardIcon from "@material-ui/icons/DashboardSharp";
import SettingsIcon from "@material-ui/icons/Settings";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AddIcon from "@material-ui/icons/Add";
import {
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    // <div className="navigation">
    <div>
      <List className="navigation">
        <NavLink to="/">
          <ListItem>
            <ListItemIcon>
              <DashboardIcon />
              {/* <Typography variant="caption">something</Typography> */}
            </ListItemIcon>
            {/* <ListItemText secondary="Something" /> */}
          </ListItem>
        </NavLink>

        <NavLink to="/">
          <ListItem>
            <ListItemIcon>
              <AddIcon />
              {/* <Typography variant="caption">something</Typography> */}
            </ListItemIcon>
            {/* <ListItemText secondary="Something" /> */}
          </ListItem>
        </NavLink>

        <NavLink to="/">
          <ListItem>
            <ListItemIcon>
              <NotificationsIcon />
              {/* <Typography variant="caption">something</Typography> */}
            </ListItemIcon>
            {/* <ListItemText secondary="Something" /> */}
          </ListItem>
        </NavLink>

        <NavLink to="/settings">
          <ListItem>
            <ListItemIcon>
              <SettingsIcon />
              {/* <Typography variant="caption">something</Typography> */}
            </ListItemIcon>
            {/* <ListItemText secondary="Something" /> */}
          </ListItem>
        </NavLink>
      </List>
    </div>
  );
}
