import React, { useState, useEffect } from "react";
import { auth } from "../../moduels/firebase";

//componet
import Login from "./Login";
import Register from "./Register";

//material ui
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const Auth: React.FC = (props: any) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      user && props.history.push("/");
    });
  }, [props.history]);
  return (
    <>
      {isLogin ? <Login /> : <Register />}
      <Container maxWidth="sm">
        <Grid container justify="center" alignItems="center">
          <Grid item>
            <Typography color="initial" variant="subtitle1">
              <span
                onClick={() => {
                  setIsLogin(!isLogin);
                  console.log(isLogin);
                }}
              >
                {isLogin ? "go to register?" : "go to login"}
              </span>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Auth;
