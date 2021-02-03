import React, { useState } from "react";
import TabsList from "../../TabsList/TabsList";
import Tags from "../Tags/Tags";
import Banner from "./Banner";
import "./FeedMaster.css";

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
