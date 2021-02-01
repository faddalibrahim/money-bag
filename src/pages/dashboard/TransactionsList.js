import { Paper, Typography } from "@material-ui/core";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import TrendingDownIcon from "@material-ui/icons/TrendingDown";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";

export default function TransactionsList({ transactions }) {
  const spitTransactions = transactions.map((transaction) => {
    // eslint-disable-next-line default-case
    switch (transaction.transactionType) {
      case "income":
        <TrendingUpIcon />;
        break;
      case "expenses":
        <TrendingDownIcon />;
        break;
      case "investments":
        <AccountBalanceWalletIcon />;
        break;
      case "savings":
        <AccountBalanceIcon />;
        break;
    }

    return (
      <Paper
        elevation="0"
        variant="outlined"
        style={{
          // padding: "1rem",
          marginBottom: "1rem",
          display: "flex",
          alignItems: "center",
          // backgroundColor: `${
          //   transaction.transactionType === "expense"
          //     ? "rgba(225,0,0,0.5)"
          //     : "teal"
          // }`,
        }}
      >
        <div
          style={{
            padding: "0.5rem",
            color: `${
              transaction.transactionType === "income"
                ? "green"
                : transaction.transactionType === "expense"
                ? "crimson"
                : transaction.transactionType === "investments"
                ? "lightorange"
                : "darkblue"
            }`,
          }}
        >
          {transaction.transactionType === "income" ? (
            <TrendingUpIcon />
          ) : transaction.transactionType === "expense" ? (
            <TrendingDownIcon />
          ) : transaction.transactionType === "investments" ? (
            <AccountBalanceWalletIcon />
          ) : (
            <AccountBalanceIcon />
          )}
        </div>
        <div>
          <Typography
            variant="caption"
            style={{
              // background: `${
              //   transaction.transactionType === "expense" ? "crimson" : "teal"
              // }`,
              padding: "0.4rem",
              // color: "white",
              borderRadius: "10%",
            }}
          >
            {transaction.source}
          </Typography>
          <Typography
            variant="subtitle2"
            align="right"
            style={
              {
                // color: `${
                //   transaction.transactionType === "expense" ? "crimson" : "teal"
                // }`,
              }
            }
          >
            GHC {transaction.amount}
          </Typography>
        </div>
      </Paper>
    );
  });

  return <div className="transactions-list">{spitTransactions}</div>;
}
