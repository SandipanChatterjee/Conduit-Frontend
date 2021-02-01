import React from "react";
import { Route } from "react-router-dom";
import FeedMaster from "../Dashboard/FeedMaster/FeedMaster";

const index = () => {
  return (
    <div>
      <Route path="/" component={FeedMaster} />
    </div>
  );
};

export default index;
