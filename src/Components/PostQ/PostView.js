import React, { useState } from "react";

export const PostQ = () => {
  const [inputText, setInputText] = useState("");
  const [postedQuestions, setPostedQuestions] = useState([]);
  const [expandedQuestionIndex, setExpandedQuestionIndex] = useState(null); // Track expanded question

  const handlePost = () => {
    if (inputText.trim()) {
      setPostedQuestions([...postedQuestions, inputText]); // Add the new question to the list
      setInputText(""); // Clear the input field
    }
  };

  const toggleSolution = (index) => {
    if (expandedQuestionIndex === index) {
      setExpandedQuestionIndex(null); // Collapse the solution
    } else {
      setExpandedQuestionIndex(index); // Expand the solution for the selected question
    }
  };

  return (
    <div className="container">
      <div className="leftpane">
        <a href="/" className="home-link">
          Home Page
        </a>
      </div>
      <div className="middlepane">
        <div className="post-div">
          <textarea
            type="text"
            className="post-box"
            placeholder="Post your Question!"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button className="post-btn" onClick={handlePost}>
            Post
          </button>
        </div>
        {postedQuestions.length > 0 && (
          <h2 className="questions-heading">
            <span role="img" aria-label="magnifying-glass" className="icon">
              🔍
            </span>{" "}
            Dive into Solutions
          </h2>
        )}
        <div className="queSet">
          {postedQuestions.map((question, index) => (
            <div key={index} className="posted-questions">
              <p>{question}</p>
              <span
                className="give-solution"
                onClick={() => toggleSolution(index)} // Toggle solution input visibility
              >
                {expandedQuestionIndex === index ? "🔼" : "Solutions"}
              </span>

              <div
                className={`solution-input-container ${
                  expandedQuestionIndex === index ? "show" : ""
                }`}
              >
                <textarea
                  className="solution-input"
                  placeholder="Your solution here..."
                />
                <button className="submit-solution-btn">Submit Solution</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="rightpane">
        <h1>Test Page</h1>
      </div>
    </div>
  );
};

export default PostQ;
