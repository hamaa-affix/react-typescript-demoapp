import React from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../components/auth_componets/Auth";
import Main from "../components/layouts/Main";

const Public: React.FC = () => {
  return (
    <>
      <Switch>
        <Route exact path="/login" component={Auth} />
        <Route exact path="/" component={Main} />
      </Switch>
    </>
  );
};

export default Public;
