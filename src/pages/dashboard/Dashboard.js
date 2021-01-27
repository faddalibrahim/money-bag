import { Component } from "react";
import { Paper, Typography } from "@material-ui/core";

class Dashboard extends Component {
  state = {};

  render() {
    return (
      <div
        className="dashboard"
        style={{
          height: "100%",
          display: "flex",
          flexFlow: "column",
          justifyContent: "space-between",
          alignItems: "center",
          flexGrow: "1",
          padding: "1rem",
        }}
      >
        <Paper
          elevation="1"
          style={{
            padding: "1rem",
            width: "100%",
            flexGrow: "1",
            marginBottom: "1rem",
            background: "linear-gradient(45deg, #0c5fde, #060505f5)",
            color: "white",
          }}
        >
          <Typography variant="h5">21</Typography>
        </Paper>

        <Paper
          elevation="2"
          style={{ padding: "1rem", width: "100%", flexGrow: "5" }}
        >
          yo neggarrrrrrrrrrrrrrr
        </Paper>
      </div>
    );
  }
}

export default Dashboard;
