import DashboardIcon from "@material-ui/icons/DashboardSharp";
import SettingsIcon from "@material-ui/icons/Settings";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AddIcon from "@material-ui/icons/Add";

const ROUTES = [
  {
    route: "dashboard",
    icon: <DashboardIcon />,
  },
  {
    route: "notifications",
    icon: <NotificationsIcon />,
  },
  {
    route: "transact",
    icon: <AddIcon />,
  },
  {
    route: "settings",
    icon: <SettingsIcon />,
  },
];

export default ROUTES;
