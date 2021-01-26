import { Component } from "react";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import ArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import Button from "@material-ui/core/Button";
import "../../scss/transact.scss";

class Transact extends Component {
  state = {};

  render() {
    return (
      <div id="transact">
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <ArrowLeftIcon />
          <span>Exit</span>
        </div>
        <form noValidate autoComplete="off">
          <TextField
            id="outlined-password-input"
            label="Amount"
            type="text"
            autoComplete="current-password"
            variant="outlined"
          />

          <TextField
            id="outlined-password-input"
            label="Expenses made for"
            type="text"
            autoComplete="current-password"
            variant="outlined"
          />

          <TextareaAutosize
            aria-label="minimum height"
            rowsMin={3}
            placeholder="Description"
            variant="outlined"
            className="description-text"
          />

          <Button variant="contained" color="primary">
            Add Transaction
          </Button>
        </form>
      </div>
    );
  }
}

export default Transact;
