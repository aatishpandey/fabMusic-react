import "./styles.css";
import React, { useState } from "react";

const musicDB = {
  Ghazal: [
    { name: "Woh Kagaz Ki Kashti ", rating: "4.5/5" },
    { name: "Aaj Jaane Ki Zid Na Karo", rating: "4/5" }
  ],
  Folk: [
    { name: "Ghoomar", rating: "4.5/5" },
    { name: "Aaj Jaane Ki Zid Na Karo", rating: "4/5" }
  ],
  English: [
    { name: "Oh What A Miracle", rating: "4.5/5" },
    { name: "Bandra Blues", rating: "4/5" }
  ],
  Disco: [
    { name: "Love Hangover", rating: "3.5/5" },
    { name: "I Will Survive", rating: "3.5/5" }
  ]
};

export default function App() {
  const [selectedcategory, setcategory] = useState("Folk");

  function btnOnClickHandler(category) {
    setcategory(category);
  }

  return (
    <div className="App">
      <h1>🎵 fabMusic</h1>
      <p style={{ fontSize: "smaller" }}>
        Checkout my favorite music. Select a genre to get more info
      </p>

      <div>
        {Object.keys(musicDB).map((category) => (
          <button
            onClick={() => btnOnClickHandler(category)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem",
              width: "100px",
              height: "7vh"
            }}
          >
            {category}
          </button>
        ))}
      </div>
      <hr className="main-hr" />

      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {musicDB[selectedcategory].map((song) => (
            <li
              key={song.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                background: "#E5E7EB",
                border: "1px solid",
                width: "60%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              <div style={{ fontSize: "larger" }}>{song.name}</div>
              <div style={{ fontSize: "smaller" }}>{song.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
