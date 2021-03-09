import React, { useState, useEffect } from "react";
import CommentsList from "../components/CommentsList";
import PageButton from "../components/PageButton";
import "./App.css";
import Header from "../components/Header";
import axios from "axios";

function App() {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  let url =
    "https://jsonplaceholder.typicode.com/comments?_start=" +
    currentPage +
    "&_limit=12";

  useEffect(() => {
    const fetchComments = async () => {
      setHasError(false);
      setIsLoading(true);
      try {
        const result = await axios(url);
        setComments(result.data);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchComments();
  }, [currentPage]);

  const createComment = (e) => {
    console.log("create comment clicked");
  };

  const onBackButtonClicked = () => {
    console.log("back button clicked");
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const onNextButtonClicked = () => {
    console.log("next button clicked");
    setCurrentPage(currentPage + 1);
  };

  const onPageButtonClicked = (number) => {
    if (number === currentPage) {
      return currentPage;
    } else if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <Header />

      <div className="screen">
        {isLoading ? (
          <div> Loading ... </div>
        ) : hasError ? (
          <div> Something went wrong. </div>
        ) : (
          <div className="title">
            <span className="comment-title">Comments</span>
            <span>
              <button className="comment-button" onClick={createComment}>
                Create comment
              </button>
            </span>
          </div>
        )}

        <CommentsList comments={comments} />
        <PageButton
          onBackButtonClicked={onBackButtonClicked}
          onNextButtonClicked={onNextButtonClicked}
          onPageButtonClicked={onPageButtonClicked}
        />
      </div>
    </>
  );
}

export default App;
