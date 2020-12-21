import * as React from "react";
import "./styles.css";
//conmpornets
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Main from "./components/layouts/Main";
//material ui
import Container from "@material-ui/core/Container";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Container fixed>
        <Main />
      </Container>
      <Footer />
    </>
  );
};

export default App;
