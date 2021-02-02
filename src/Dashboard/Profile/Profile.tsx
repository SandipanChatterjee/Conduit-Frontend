/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useState, useEffect } from "react";
import Banner from "../FeedMaster/Banner";
import { ProfileService } from "../../services/Profile.service";

/*interface ProfileInterface {
  username: string;
}*/

const Profile: FC = (props: any) => {
  const [profile, setProfile] = useState<any>();
  useEffect(() => {
    const fetchProfileData = async () => {
      const profileName = props?.match?.params?.profile;
      const profileData = await ProfileService(profileName);
      console.log("profileData#", profileData);
      setProfile(profileData);
    };
    fetchProfileData();
  }, []);

  return (
    <div>
      <Banner profile={true} username={profile?.username} />
    </div>
  );
};

export default Profile;
