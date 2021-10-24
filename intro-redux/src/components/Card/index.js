import React from "react";

import "./styles.css";

function Card(props) {
  const getColor = (color) => {
    if (color.Red) return "Red";
    if (color.Green) return "Green";
    if (color.Blue) return "Blue";
    if (color.Purple) return "Purple";
    return "";
  };

  return (
    <div className={`Card ${getColor(props)}`}>
      <div className="Header">
        <span className="Title">{props.Title}</span>
      </div>
      <div className="Content">{props.children}</div>
    </div>
  );
}

export default Card;
