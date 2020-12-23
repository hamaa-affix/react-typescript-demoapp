import React from "react";
//components
import MainIndex from "../main_components/MianIndex";

//material ui
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const Main: React.FC = () => {
  return (
    <>
      <Container maxWidth="sm">
        <Grid container justify="center" alignItems="center">
          <h1>main contents　です</h1>
        </Grid>
      </Container>
      <MainIndex />
    </>
  );
};

export default Main;
