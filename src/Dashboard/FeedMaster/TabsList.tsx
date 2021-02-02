import { AppBar, Box, Tab, Tabs, Typography } from "@material-ui/core";
import React from "react";
import GlobalFeed from "../GlobalFeed/GlobalFeed";
import TagsListing from "../Tags/TagsListing";
import UserFeed from "../UserFeed";

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
}

const TabsList: React.FC<Partial<TabsListProps>> = (props) => {
  return (
    <div>
      <AppBar position="static">
        <Tabs value={props.value} onChange={props.handleChange}>
          <Tab label="Global Feed" />
          <Tab label="Your Feed" />
          {props.showTags ? (
            <Tab label={"#" + props.tagName} selected={props.showTags} />
          ) : null}
        </Tabs>
      </AppBar>
      <TabPanel value={props.value} index={0}>
        <GlobalFeed />
      </TabPanel>
      <TabPanel value={props.value} index={1}>
        <UserFeed />
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
