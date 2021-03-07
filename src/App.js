import { useState } from "react";
import "./styles.css";

var danceList = {
  "HIP-HOP": "ABC",
  CONTEMPORARY: "MNO",
  BOLLYWOOD: "XYZ"
};

export default function App() {
  const [clickValue, setClickValue] = useState("");

  function onClickHandler(event) {
    var buttonId = event.target.id;
    if (buttonId === "hiphopButton") {
      setClickValue(danceList["HIP-HOP"]);
    } else if (buttonId === "contemporaryButton") {
      setClickValue(danceList["CONTEMPORARY"]);
    } else {
      setClickValue(danceList["BOLLYWOOD"]);
    }
  }

  return (
    <div className="App">
      <h1 style={{ backgroundColor: "orange", padding: "1rem" }}>
        ALL ABOUT DANCE
      </h1>
      <div>
        <button
          id="hiphopButton"
          style={{
            width: "10%",
            padding: "1rem",
            borderRadius: "0.5rem",
            margin: "0.5rem"
          }}
          onClick={onClickHandler}
        >
          HIP-HOP
        </button>
        <button
          id="contemporaryButton"
          style={{
            width: "10%",
            padding: "1rem",
            borderRadius: "0.5rem",
            margin: "0.5rem"
          }}
          onClick={onClickHandler}
        >
          CONTEMPORARY
        </button>
        <button
          id="bollywoodButton"
          style={{
            width: "10%",
            padding: "1rem",
            borderRadius: "0.5rem",
            margin: "0.5rem"
          }}
          onClick={onClickHandler}
        >
          BOLLYWOOD
        </button>
      </div>
      <h3 style={{ padding: "2rem" }}>All About It:</h3>
      <div style={{ fontWeight: "bold" }}>{clickValue}</div>
    </div>
  );
}
