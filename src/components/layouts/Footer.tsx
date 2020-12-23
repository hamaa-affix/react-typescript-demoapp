import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { spacing } from "@material-ui/system";

const Footer: React.FC = () => {
  return (
    <>
      <footer>
        <Container maxWidth="sm">
          <Grid container justify="center" alignItems="center">
            <Grid item>
              <Typography variant="button" align="center">
                footet
              </Typography>
              <Typography variant="body2">footerContent</Typography>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
