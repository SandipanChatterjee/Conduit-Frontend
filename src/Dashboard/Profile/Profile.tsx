/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useState, useEffect, useRef } from "react";
import Banner from "../FeedMaster/Banner";
import { ProfileService } from "../../services/Profile.service";
import Display from "../DisplayArticle/Display";
import axios from "../../eaxios";
import "./Profile.css";
import Pagination from "../Paginate";
/*interface ProfileInterface {
  username: string;
}*/

const Profile: FC = (props: any) => {
  const [profile, setProfile] = useState<any>();
  const [article, setArticle] = useState<{}[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(10);
  const isFirstTime = useRef(true);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage - 10;

  // Change page
  const paginate = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    if (isFirstTime.current) {
      isFirstTime.current = false;
      return;
    }
    (async () => {
      const res = await axios.get(
        `articles?author=${profile?.username}&limit=5&offset=${indexOfLastPost}`
      );
      setArticle(res.data?.articles);
    })();
  }, [profile]); // currentPage

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
      <div></div>
      <div className="displayContainer">
        <Display articles={article} />
      </div>
      <div>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={20}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default Profile;
