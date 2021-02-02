import { AppBar, Box, Tab, Tabs, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import GlobalFeed from "../GlobalFeed/GlobalFeed";
import Tags from "../Tags/Tags";
import TagsListing from "../Tags/TagsListing";
import UserFeed from "../UserFeed";
import Banner from "./Banner";
import "./FeedMaster.css";
import TabsList from "./TabsList";

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
      <Banner profile={false} />
      <div className="container">
        <div>
          {
            <TabsList
              value={value}
              handleChange={handleChange}
              showTags={showTags}
              tagName={tagName}
              tagApi={tagApi}
            />
          }
        </div>
        <div>
          <Tags tagsHandler={tagsHandler} />
        </div>
      </div>
    </div>
  );
};

export default FeedMaster;
