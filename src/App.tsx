import React, { useEffect } from "react";
//firebase
import { auth } from "./moduels/firebase";
//rotuer
import { Route, BrowserRouter, Switch } from "react-router-dom";
import "./styles.css";
//conmpornets
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
// import Main from "./components/layouts/Main";
//router
import Public from "./router/Public";
//material ui
import Container from "@material-ui/core/Container";

const App: React.FC = (props: any) => {
  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     user && props.history("/login");
  //   });
  // }, [props.history]);
  return (
    <BrowserRouter>
      <>
        <Header />
        <Container fixed>
          <Public />
        </Container>
        <Footer />
      </>
    </BrowserRouter>
  );
};

export default App;
