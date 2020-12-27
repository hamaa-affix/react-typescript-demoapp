import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../../moduels/firebase";

//material ui
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //routeObujectの取得
  const history = useHistory();
  const classes = useStyles();

  const subnitRegister = async () => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      history.push("/");
    } catch (error) {
      alert(error.massage);
    }
  };

  return (
    <>
      <Container maxWidth="sm">
        <Grid container justify="center" alignItems="center">
          <Grid item>
            <form>
              <Typography component="h1" variant="h5" align="center">
                Register
              </Typography>
              <FormControl>
                <TextField
                  name="email"
                  label="email"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setEmail(e.target.value);
                  }}
                />
              </FormControl>
              <br />
              <FormControl>
                <TextField
                  name="password"
                  label="password"
                  value={password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setPassword(e.target.value);
                  }}
                />
              </FormControl>
              <br />
              <Button
                color="primary"
                variant="contained"
                size="small"
                className={classes.submit}
                onClick={subnitRegister}
              >
                submit
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Register;
