/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Banner from "../../Dashboard/FeedMaster/Banner";
import { ProfileService } from "../../services/Profile.service";
import Profile from "../Profile/Profile";

interface ProfileObj {
  username: string;
  following: false;
  image: string;
  bio: null | string;
}
const ProfileMaster = (props: any) => {
  const [profile, setProfile] = useState<Partial<ProfileObj>>({});
  useEffect(() => {
    const fetchProfileData = async () => {
      const profileName = props?.match?.params?.profile;
      const profileData = await ProfileService(profileName);
      setProfile(profileData);
      console.log(profile?.username);
    };
    fetchProfileData();
  }, []);

  return (
    <div>
      <Banner profile={true} username={profile?.username} />
      {Object.keys(profile!).length !== 0 ? (
        <Profile profile={profile} />
      ) : null}
    </div>
  );
};

export default ProfileMaster;
