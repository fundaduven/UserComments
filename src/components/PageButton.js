import React, { useState } from "react";
import "./PageButton.css";

function PageButton({
  onBackButtonClicked,
  onNextButtonClicked,
  onPageButtonClicked,
}) {
  const [number, setNumber] = useState(1);

  return (
    <>
      <div className="page-number">
        <div className="page-number-right">
          <button className="arrow-button" onClick={onBackButtonClicked}>
            <span className="material-icons arrow">keyboard_arrow_left</span>
          </button>
          <button className="number-button" onClick={onPageButtonClicked}>
            {number}
          </button>
          <button className="number-button" onClick={onPageButtonClicked}>
            {number + 1}
          </button>
          <button className="number-button" onClick={onPageButtonClicked}>
            {number + 2}
          </button>
          <button className="number-button">...</button>
          <button className="number-button" onClick={onPageButtonClicked}>
            {number + 9}
          </button>

          <button className="arrow-button" onClick={onNextButtonClicked}>
            <span className="material-icons arrow">keyboard_arrow_right</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default PageButton;
