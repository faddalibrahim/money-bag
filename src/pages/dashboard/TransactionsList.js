import { Paper, Typography } from "@material-ui/core";

export default function TransactionsList({ transactions }) {
  const spitTransactions = transactions.map((transaction) => {
    return (
      <Paper
        elevation="0"
        variant="outlined"
        style={{
          padding: "1rem",
          marginBottom: "1rem",
          borderLeft: `${
            transaction.transactionType === "expense"
              ? "0.2rem solid crimson"
              : "0.2rem solid teal"
          }`,
        }}
      >
        <Typography
          variant="caption"
          style={{
            background: `${
              transaction.transactionType === "expense" ? "crimson" : "teal"
            }`,
            padding: "0.4rem",
            color: "white",
            borderRadius: "10%",
          }}
        >
          {transaction.source}
        </Typography>
        <Typography
          variant="subtitle2"
          align="right"
          style={{
            color: `${
              transaction.transactionType === "expense" ? "crimson" : "teal"
            }`,
          }}
        >
          GHC {transaction.amount}
        </Typography>
      </Paper>
    );
  });

  return <div className="transactions-list">{spitTransactions}</div>;
}
