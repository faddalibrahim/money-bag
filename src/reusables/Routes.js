import DashboardIcon from "@material-ui/icons/DashboardSharp";
import SettingsIcon from "@material-ui/icons/Settings";
// import NotificationsIcon from "@material-ui/icons/Notifications";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import EqualizerIcon from "@material-ui/icons/Equalizer";

const ROUTES = [
  {
    route: "dashboard",
    icon: <DashboardIcon />,
  },
  {
    route: "transact",
    icon: <MonetizationOnIcon />,
  },
  {
    route: "insights",
    icon: <EqualizerIcon />,
  },
  {
    route: "settings",
    icon: <SettingsIcon />,
  },
];

export default ROUTES;
