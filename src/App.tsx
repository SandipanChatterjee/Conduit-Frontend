import React, { Fragment } from "react";
import Routes from "./routes/index";
import Header from "./Header/Header";
function App() {
  return (
    <Fragment>
      <Header />
      <Routes />
    </Fragment>
  );
}

export default App;
