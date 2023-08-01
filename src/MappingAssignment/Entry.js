import React from "react";
import './emoji.css';

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label={props.emojiName}>
          {props.emoji}
        </span>
        <span>{props.emojiName}</span>
      </dt>
      <dd>{props.content}</dd>
    </div>
  );
}

export default Entry;
