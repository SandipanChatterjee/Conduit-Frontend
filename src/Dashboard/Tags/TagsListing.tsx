import React, { useEffect, useState } from "react";
import Pagination from "../Paginate";
import axios from "../../eaxios";
interface Props {
  tagApi: boolean;
  tagName: string;
}

const TagsListing: React.FC<Props> = (props) => {
  const [articles, setArticle] = useState<{}[]>([]);
  const [error, setErrorMessage] = useState<string>("");
  const [errorModal, setErrorModal] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(10);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage - 10;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  // Change page
  const paginate = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };

  const fetchTag = async (tagName: string, offset: number) => {
    try {
      const res = await axios.get(
        `articles?tag=${tagName}&limit=10&offset=${offset}`
      );
      setArticle(res.data.articles);
    } catch (e) {
      setErrorMessage(e.message);
    }
  };

  const likeHandler = async (param: string) => {
    try {
      await axios.post(`articles/${param}/favorite`);
    } catch (e) {
      setErrorMessage(e.message);
      setErrorModal(true);
    }
  };

  useEffect(() => {
    setArticle([]);
    fetchTag(props.tagName, indexOfLastPost);
  }, [props.tagApi, currentPage]);

  return (
    <div>
      {articles?.length > 0
        ? articles.map((article: any) => {
            return (
              <div className="container">
                <div>
                  <div>
                    <img src="https://static.productionready.io/images/smiley-cyrus.jpg" />
                    <p>{article?.author?.username}</p>
                  </div>

                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
                  <span>Read More...</span>
                  <hr></hr>
                </div>
                <div>
                  <span
                    className="likeBtn"
                    onClick={() => likeHandler(article.slug)}
                  >
                    Like
                  </span>
                </div>
              </div>
            );
          })
        : "Loading tags.."}
      <div>
        {articles.length > 0 ? (
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={500}
            paginate={paginate}
            currentPage={currentPage}
          />
        ) : null}
      </div>
    </div>
  );
};

export default TagsListing;
