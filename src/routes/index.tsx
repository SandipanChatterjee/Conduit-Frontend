import React from "react";
import { Route, Redirect } from "react-router-dom";
import FeedMaster from "../Dashboard/FeedMaster/FeedMaster";
import Profile from "../ProfileMaster/Profile/Profile";
import ProfileMaster from "../ProfileMaster/ProfileMaster/ProfileMaster";
const index = () => {
  return (
    <div>
      <Route path="/:profile" component={ProfileMaster} />
      <Route path="/" exact component={FeedMaster} />
      <Redirect from="/" to="/" />
    </div>
  );
};

export default index;
