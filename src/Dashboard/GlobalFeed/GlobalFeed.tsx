/* eslint-disable react-hooks/exhaustive-deps */
import { Modal } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import axios from "../../eaxios";
import { getModalStyle, modalStyles } from "../../Utils/StyleUtils";
import Pagination from "../Paginate";
import "./GlobalFeed.css";
import Display from "../DisplayArticle/Display";

const GlobalFeed: React.FC = (props) => {
  const [articles, setArticle] = useState<{}[]>([]);
  const [errorModal, setErrorModal] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [modalStyle] = React.useState(getModalStyle);
  const [articlesCount, setArticleCount] = useState(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(10);

  const closeErrorModal = () => {
    setErrorModal(false);
  };

  const likeHandler = async (param: string) => {
    try {
      await axios.post(`articles/${param}/favorite`);
    } catch (e) {
      setErrorMessage(e.message);
      setErrorModal(true);
    }
  };

  const fetchArticles = async (offset: number) => {
    const res = await axios.get(`articles?limit=10&offset=${offset}`);
    setArticleCount(res.data?.articlesCount);
    return res.data?.articles;
  };

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage - 10;

  // Change page
  const paginate = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    (async () => {
      setArticle([]);
      const articles = await fetchArticles(indexOfLastPost);
      setArticle(articles);
    })();
  }, [currentPage]);

  return (
    <div>
      {articles?.length > 0 ? <Display articles={articles} /> : "loading.."}
      <div>
        {articles.length > 0 ? (
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={articlesCount}
            paginate={paginate}
            currentPage={currentPage}
          />
        ) : null}
      </div>

      <Modal
        open={errorModal}
        onClose={closeErrorModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={modalStyles().paper}>
          <h2 id="simple-modal-title">Error</h2>
          <p id="simple-modal-description">{errorMessage}</p>
          <button onClick={closeErrorModal}>Close</button>
        </div>
      </Modal>
    </div>
  );
};

export default GlobalFeed;
