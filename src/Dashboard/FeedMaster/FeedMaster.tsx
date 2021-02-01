import { AppBar, Box, Tab, Tabs, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useState } from "react";
import GlobalFeed from "../GlobalFeed/GlobalFeed";
import Tags from "../Tags/Tags";
import TagsListing from "../Tags/TagsListing";
import UserFeed from "../UserFeed";
import "./FeedMaster.css";

const TabPanel = (props: any) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const FeedMaster: React.FC = () => {
  const [value, setValue] = useState<number>(0);
  const [showTags, setShowTags] = useState<boolean>(false);
  const [tagName, setTagName] = useState<string>("");
  const [tagApi, setTagApi] = useState<boolean>(false);

  const handleChange = (event: any, newValue: number) => {
    console.log("newValue#", newValue);
    setShowTags(false);
    setValue(newValue);
  };

  const tagsHandler = (tagName: string) => {
    console.log("tagsHandler##");
    setTagName(tagName);
    setTagApi(!tagApi);
    setShowTags(true);
    setValue(2);
  };

  return (
    <div>
      <div className="banner">
        <h3 className="logo-font">Conduit</h3>
        <p>A place to share your knowledge.</p>
      </div>
      <div className="container">
        <div>
          <AppBar position="static">
            <Tabs value={value} onChange={handleChange}>
              <Tab label="Global Feed" />
              <Tab label="Your Feed" />
              {showTags ? (
                <Tab label={"#" + tagName} selected={showTags} />
              ) : null}
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <GlobalFeed />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <UserFeed />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <TagsListing tagApi={tagApi} tagName={tagName} />
          </TabPanel>
        </div>
        <div>
          <Tags tagsHandler={tagsHandler} />
        </div>
      </div>
    </div>
  );
};

export default FeedMaster;
