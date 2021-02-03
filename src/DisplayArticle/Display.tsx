import React from "react";
import { Link } from "react-router-dom";
import "./Display.css";
interface Props {
  articles: {}[];
}
const Display: React.FC<Props> = ({ articles }) => {
  return (
    <div>
      {articles.map((article: any, index: number) => {
        return (
          <div className="article-preview">
            <div className="article-meta">
              <Link to="#">
                <img
                  src="https://static.productionready.io/images/smiley-cyrus.jpg"
                  alt="img"
                />
              </Link>
              <div className="info">
                <Link to={`/` + article?.author?.username}>
                  {article?.author?.username}
                </Link>
                <span className="date">{article?.createdAt}</span>
              </div>
              <div className="pull-xs-right">
                <button className="btn btn-sm btn-outline-primary">
                  <i className="ion-heart"></i>0
                </button>
              </div>
              <Link to="#" className="preview-link">
                <h1>{article.title}</h1>
                <p>{article.description}</p>
                <span>Read More...</span>
                <ul className="tag-list"></ul>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Display;
