import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import ProfileMaster from "../ProfileMaster/ProfileMaster/ProfileMaster";
const ProfileRoutes = () => {
  return (
    <Switch>
      <Route path="/:profile" exact component={ProfileMaster} />
      <Redirect to="/:profile" />
    </Switch>
  );
};

export default ProfileRoutes;
