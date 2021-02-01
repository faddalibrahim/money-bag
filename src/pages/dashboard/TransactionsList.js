import { Typography } from "@material-ui/core";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import TrendingDownIcon from "@material-ui/icons/TrendingDown";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import Card from "@material-ui/core/Card";

export default function TransactionsList({ transactions }) {
  const spitTransactions = transactions.map((transaction, index) => {
    return (
      <Card
        key={index}
        style={{
          marginBottom: "1rem",
          display: "flex",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        <div
          style={{
            padding: "0.5rem",
            color: `${
              transaction.transactionType === "income"
                ? "green"
                : transaction.transactionType === "expenses"
                ? "crimson"
                : transaction.transactionType === "investments"
                ? "lightorange"
                : "darkblue"
            }`,
          }}
        >
          {transaction.transactionType === "income" ? (
            <TrendingUpIcon />
          ) : transaction.transactionType === "expenses" ? (
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
              padding: "0.4rem",
              borderRadius: "10%",
            }}
          >
            {transaction.source}
          </Typography>
          <Typography variant="subtitle2" align="right">
            GHC {transaction.amount}
          </Typography>
        </div>
      </Card>
    );
  });

  return <div className="transactions-list">{spitTransactions}</div>;
}
