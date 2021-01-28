import { Paper, Typography } from "@material-ui/core";
import { Component } from "react";

class TransactionsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Paper
        elevation="1"
        style={{
          padding: "1rem",
          width: "100%",
          // flexGrow: "1",
          marginBottom: "1rem",
          background: "linear-gradient(45deg, #0c5fde, #333)",
          // background: "radial-gradient(circle,#0c5fde, #333)",
          color: "white",
          borderRadius: "0.5rem",
        }}
      >
        <Typography variant="h5" align="right">
          21
        </Typography>
      </Paper>
    );
  }
}

export default TransactionsCard;
