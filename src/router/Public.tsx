import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../components/auth_componets/Login";
import Main from "../components/layouts/Main";

const Public: React.FC = () => {
  return (
    <>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Main} />
      </Switch>
    </>
  );
};

export default Public;
