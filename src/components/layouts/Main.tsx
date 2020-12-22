import React from "react";

//material ui
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary
    }
  })
);
const Main: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="sm">
        <Grid container justify="center" alignItems="center">
          <h1>main contents　です</h1>
        </Grid>
      </Container>
      <Grid container justify="center" alignItems="center" spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>こんにちは</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>こんにちは</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>こんにちは</Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Main;
