/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useState, useEffect, useRef } from "react";

import Display from "../../DisplayArticle/Display";
import axios from "../../eaxios";
import "./Profile.css";
import Pagination from "../../Paginate";

interface ProfileInterface {
  author: string;
}

const Profile: FC<Partial<ProfileInterface>> = (props) => {
  const [articles, setArticles] = useState<{}[]>([]);
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

  console.log("author##", props.author);

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `articles?author=${props?.author}&limit=5&offset=${indexOfLastPost}`
      );
      setArticles(res.data?.articles);
      setArticleCount(res.data?.articlesCount);
    })();
  }, [currentPage || props.author]); // currentPage

  return (
    <div>
      <div></div>
      <div className="displayContainer">
        {articles?.length > 0 ? <Display articles={articles} /> : "loading.."}
        {articlesCount > 5 ? (
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={articlesCount}
            paginate={paginate}
            currentPage={currentPage}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Profile;
