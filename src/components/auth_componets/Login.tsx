import React, { useState } from "react";
//material ui
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Container maxWidth="sm">
        <Grid container justify="center" alignItems="center">
          <Grid item>
            <form>
              <Typography component="h1" variant="h5" align="center">
                Login
              </Typography>
              <FormControl>
                <InputLabel htmlFor="component-simple">email</InputLabel>
                <Input
                  id="component-simple"
                  name="email"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    e.preventDefault();
                    setEmail(e.target.value);
                  }}
                />
              </FormControl>
              <Typography component="h1" variant="h5" align="center">
                Password
              </Typography>
              <FormControl>
                <InputLabel htmlFor="component-simple">email</InputLabel>
                <Input
                  id="component-simple"
                  name="password"
                  value={password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    e.preventDefault();
                    setPassword(e.target.value);
                  }}
                />
              </FormControl>
            </form>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Login;
