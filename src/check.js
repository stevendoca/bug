import { makeStyles } from "@mui/styles";
import { Container } from "@mui/system";
import React from "react";

const useStyles = makeStyles((theme) => ({
  color: "red",
  backgroundColor: "blue",
}));
const Check = () => {
  const classes = useStyles();
  return (
    <Container className={classes.color} style={{ backgroundColor: "yellow" }}>
      <h1>Hi</h1>
    </Container>
  );
};

export default Check;
