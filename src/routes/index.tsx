import React from "react";
import { Route, Redirect } from "react-router-dom";
import FeedMaster from "../Dashboard/FeedMaster/FeedMaster";
import Profile from "../Dashboard/Profile/Profile";

const index = () => {
  return (
    <div>
      <Route path="/:profile" component={Profile} />
      <Route path="/" exact component={FeedMaster} />
      <Redirect from="/" to="/" />
    </div>
  );
};

export default index;
