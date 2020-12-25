import React from "react";
//material ui
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";

const Register: React.FC = () => {
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
                <InputLabel htmlFor="component-simple">Name</InputLabel>
                <Input id="component-simple" />
              </FormControl>
            </form>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Register;
