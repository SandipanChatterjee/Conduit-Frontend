import React, { FC, Fragment } from "react";
import "./FeedMaster.css";
interface RequiredProps {
  profile: boolean;
}
interface Props {
  username: string;
}
const Banner: FC<Partial<Props> & RequiredProps> = (props) => {
  return (
    <div>
      <div className="banner">
        {!props.profile ? (
          <Fragment>
            <h3 className="logo-font">Conduit</h3>
            <p>A place to share your knowledge.</p>
          </Fragment>
        ) : (
          <Fragment>
            <h3 className="logo-font">Profile Picture</h3>
            <p>{props?.username}</p>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default Banner;
