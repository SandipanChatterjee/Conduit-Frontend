/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Banner from "../../Dashboard/FeedMaster/Banner";
import TabsList from "../../TabsList/TabsList";
import { ProfileService } from "../../services/Profile.service";
import Profile from "../Profile/Profile";
import "./ProfileMaster.css";
interface ProfileObj {
  username: string;
  following: false;
  image: string;
  bio: null | string;
}
const ProfileMaster = (props: any) => {
  const [profile, setProfile] = useState<Partial<ProfileObj>>({});
  const [value, setValue] = useState<number>(0);
  const [showTags, setShowTags] = useState<boolean>(false);

  const handleChange = (event: any, newValue: number) => {
    console.log("newValue#", newValue);
    setShowTags(false);
    setValue(newValue);
  };

  useEffect(() => {
    const fetchProfileData = async () => {
      const profileName = props?.match?.params?.profile;
      const profileData = await ProfileService(profileName);
      setProfile(profileData);
      console.log(profile?.username);
    };
    fetchProfileData();
  }, [value]);

  return (
    <div>
      <Banner profile={true} username={profile?.username} />
      <div className="container">
        <TabsList
          value={value}
          handleChange={handleChange}
          showTags={showTags}
          tabName={"profile"}
          profileName={profile?.username}
        />
      </div>
    </div>
  );
};

export default ProfileMaster;

// {Object.keys(profile!).length !== 0 ? (
//   <Profile profile={profile} />
// ) : null}
