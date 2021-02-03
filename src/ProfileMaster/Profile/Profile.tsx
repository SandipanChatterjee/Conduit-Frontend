/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useState, useEffect, useRef } from "react";

import Display from "../../DisplayArticle/Display";
import axios from "../../eaxios";
import "./Profile.css";
import Pagination from "../../Paginate";

interface ProfileInterface {
  profile: any;
}

const Profile: FC<ProfileInterface> = ({ profile }: any) => {
  const [article, setArticle] = useState<{}[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [articlesCount, setArticleCount] = useState(0);
  const [postsPerPage] = useState<number>(10);
  const isFirstTime = useRef(true);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage - 10;

  // Change page
  const paginate = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `articles?author=${profile?.username}&limit=5&offset=${indexOfLastPost}`
      );
      setArticle(res.data?.articles);
      setArticleCount(res.data?.articlesCount);
    })();
  }, [currentPage]); // currentPage

  return (
    <div>
      <div></div>
      <div className="displayContainer">
        <Display articles={article} />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={articlesCount}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default Profile;
