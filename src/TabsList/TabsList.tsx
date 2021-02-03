import { AppBar, Box, Tab, Tabs, Typography } from "@material-ui/core";
import React from "react";
import GlobalFeed from "../Dashboard/GlobalFeed/GlobalFeed";
import TagsListing from "../Dashboard/Tags/TagsListing";
import UserFeed from "../Dashboard/UserFeed";
import Profile from "../ProfileMaster/Profile/Profile";
import "./TabsList.css";
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

interface TabsListProps {
  value: number | string;
  tagName: string;
  tagApi: boolean;
  showTags: boolean;
  handleChange: any;
  tabName: string;
  profileName: string;
}

const TabsList: React.FC<Partial<TabsListProps>> = (props) => {
  return (
    <div>
      <AppBar position="static" className="container">
        <Tabs value={props.value} onChange={props.handleChange}>
          <Tab
            label={props?.tabName === "profile" ? "My Articles" : "Global Feed"}
          />
          <Tab
            label={
              props?.tabName === "profile" ? "Favorited Articles" : "User Feed"
            }
          />
          {props.showTags ? (
            <Tab label={"#" + props.tagName} selected={props.showTags} />
          ) : null}
        </Tabs>
      </AppBar>
      <TabPanel value={props.value} index={0}>
        {props?.tabName === "profile" ? (
          props?.profileName ? (
            <Profile author={props.profileName} />
          ) : (
            "loading.."
          )
        ) : (
          <GlobalFeed />
        )}
      </TabPanel>
      <TabPanel value={props.value} index={1}>
        {props?.tabName === "profile" ? null : <UserFeed />}
      </TabPanel>
      <TabPanel value={props.value} index={2}>
        <TagsListing
          tagApi={props.tagApi as boolean}
          tagName={props.tagName as string}
        />
      </TabPanel>
    </div>
  );
};

export default TabsList;
