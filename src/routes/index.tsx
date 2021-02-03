import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import FeedMaster from "../Dashboard/FeedMaster/FeedMaster";
import ProfileMaster from "../ProfileMaster/ProfileMaster/ProfileMaster";
import ProfileRoutes from "./ProfileRoutes";
const index = () => {
  return (
    <Switch>
      <Route path="/:profile">
        <ProfileRoutes />
      </Route>
      <Route path="/" exact component={FeedMaster} />
      <Redirect from="/" to="/" />
    </Switch>
  );
};

export default index;
