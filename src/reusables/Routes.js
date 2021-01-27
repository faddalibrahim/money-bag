import DashboardIcon from "@material-ui/icons/DashboardSharp";
import SettingsIcon from "@material-ui/icons/Settings";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";

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
    icon: <MonetizationOnIcon />,
  },
  {
    route: "settings",
    icon: <SettingsIcon />,
  },
];

export default ROUTES;
