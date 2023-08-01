import React from "react";
import "./emoji.css";
import emojipedia from "./emojipedia";
import Entry from "./Entry";
import HeadingEmoji from "./HeadingEmoji";

function singleEmoji(emoji) {
  return (
    <Entry
      key={emoji.id}
      emoji={emoji.emoji}
      emojiName={emoji.name}
      content={emoji.meaning}
    />
  );
}

function Emoji() {
  return (
    <div>
      <HeadingEmoji />
      <dl className="dictionary">{emojipedia.map(singleEmoji)}</dl>
    </div>
  );
}

export default Emoji;
