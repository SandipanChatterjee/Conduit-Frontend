import React, { useState, useEffect } from "react";
import axios from "../../eaxios";
import { Modal } from "@material-ui/core";
import { Link } from "react-router-dom";
import { modalStyles, getModalStyle } from "../../Utils/StyleUtils";
import "./Tags.css";
interface Props {
  tagsHandler: any;
}
const Tags: React.FC<Partial<Props>> = (props) => {
  const [tags, setTags] = useState<string[]>([]);
  const [fetchTagError, setFetchTagError] = useState<boolean>(false);
  const [tagErrorMessage, setTagErrorMessage] = useState<string>("");
  const [modalStyle] = React.useState(getModalStyle);

  const closeErrorModal = () => {
    setFetchTagError(false);
  };

  const fetchTags = async () => {
    try {
      let res = await axios.get(`tags`);
      return res.data.tags;
    } catch (e) {
      setTagErrorMessage(e.message);
      setFetchTagError(true);
    }
  };

  useEffect(() => {
    (async () => {
      const tags = await fetchTags();
      setTags(tags);
    })();
  }, []);

  return (
    <div>
      <div className="sidebar">
        <h3>Popular Tags</h3>
        <div className="tags-list">
          {tags?.length > 0
            ? tags.map((tag) => {
                return (
                  <Link
                    to="#"
                    className="tags-default tag-pill"
                    onClick={() => props.tagsHandler(tag)}
                  >
                    {tag}
                  </Link>
                );
              })
            : "Populating tags.."}
        </div>
      </div>
      <Modal
        open={fetchTagError}
        onClose={closeErrorModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={modalStyles().paper}>
          <h2 id="simple-modal-title">Error</h2>
          <p id="simple-modal-description">{tagErrorMessage}</p>
          <button onClick={closeErrorModal}>Close</button>
        </div>
      </Modal>
    </div>
  );
};

export default Tags;
