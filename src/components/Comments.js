import React from "react";
import "./Comments.css";

const Comments = ({ name, email, body }) => {
  return (
    <div className="comment-box">
      <div className="name-email">
        <p className="name">{name}</p> <p className="email">{email} </p>{" "}
      </div>
      <p className="comment">{body}</p>
    </div>
  );
};

export default Comments;
