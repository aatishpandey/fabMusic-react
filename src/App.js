import "./styles.css";
import React, { useState } from "react";

const musicDB = {
  Ghazal: [
    {
      name: "Woh Kagaz Ki Kashti ",
      rating: "4.5/5",
      desc:
        "Woh Kagaz Ki Kashti Song is voiced by famous singer Jagjit Singh. The lyrics of the song are written by Sudarshan Faakir."
    },
    {
      name: "Aaj Jaane Ki Zid Na Karo",
      rating: "4/5",
      desc:
        "Aaj Jaane Ki Zid Na Karo Song from the The Best Of Farida Khanum album is voiced by famous singer Farida Khanum."
    }
  ],
  Folk: [
    {
      name: "Ghoomar",
      rating: "4.5/5",
      desc:
        "Ghoomar is a Rajasthani album released on 15 May 2000. This album is composed by Ramlal Mathur. Ghoomar Album has 9 songs sung by Seema Mishra."
    },
    {
      name: "Chogada Tara",
      rating: "4/5",
      desc:
        "Chogada Tara song from the album Top Garba Songs is released on Oct 2018. The duration of song is 01:56. This song is sung by Osman Mir."
    }
  ],
  English: [
    {
      name: "Oh What A Miracle",
      rating: "4.5/5",
      desc:
        "Oh What A Miracle song from the album Christmas Story is released on Jun 1999. The duration of song is 03:01. This song is sung by Father Barnes Mawrie."
    },
    {
      name: "Bandra Blues",
      rating: "4/5",
      desc:
        " Bandra Blues (Raga Todi) song from the album Raga & Blues is released on Jun 2011. The duration of song is 04:08. This song is sung by Richard Bennett."
    }
  ],
  Disco: [
    {
      name: "Love Hangover",
      rating: "3.5/5",
      desc:
        "Oh What A Miracle song from the album Christmas Story is released on Jun 1999. The duration of song is 03:01. This song is sung by Father Barnes Mawrie."
    },
    {
      name: "I Will Survive",
      rating: "3.5/5",
      desc:
        "I Will Survive song from the album Escape is released on Nov 2002. The duration of song is 03:42. This song is sung by Enrique Iglesias."
    }
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
              <div style={{ fontSize: "smaller" }}>{song.desc}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
