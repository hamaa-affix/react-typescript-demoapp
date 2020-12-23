import React from "react";
import { Link } from "react-router-dom";

//material ui
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  })
);

const Header: React.FC = () => {
  const classes = useStyles();
  const linkStyle = {
    color: "white"
  };

  return (
    <AppBar position="static">
      <Toolbar color="inherit">
        <Typography variant="h6" className={classes.title}>
          React app
        </Typography>
        <Button color="inherit"></Button>
        <Link to="/login" style={linkStyle}>
          Login
        </Link>
        <Button color="inherit">test</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
