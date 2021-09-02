import { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🤔": "Thinking",
  "😇": "Smiling Angel",
  "🤩": "Star-struck",
  "😉": "wink",
  "😍": "Hearty eyes",
  "😴": "Sleeping face",
  "😁": "Beaming face with smiling eyes",
  "😋": "Face Craving for delicious food",
  "😮": "Face with open mouth",
  "🥱": "Yawning face",
  "😛": "Face with tongue",
  "😀": "Grinning face",
  "😃": "Happy face",
  "😎": "Smiling face with sunglasses",
  "😘": "Kiss blowing face",
  "🥰": "Smiling face with hearts",
  "😗": "Kissing face",
  "😙": "Kissing face with smiling eyes",
  "😚": "Kissing face with closed eyes",
  "🙂": "Slightly smiling face",
  "🤗": "Hugging face",
  "🤥": "Lying face",
  "🤫": "Shushing face",
  "🤭": "Face with hand over mouth",
  "🧐": "Face with monacle",
  "🤓": "Nerd face"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in our database!";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 style={{}}>Fun with emojis!!!</h1>
      <p style={{ fontStyle: "italic" }}>
        Put a smiley emoji here and we will interprete it
      </p>
      <input onChange={emojiInputHandler}></input>

      <h2> meaning: {meaning} </h2>

      <h3> Emojis we know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

/**
 * things to notice
 * class --> className
 * style --> takes an object instead of ""
 *
 * VISER --. View -> Interact -> State in Event handler -> Render
 */
