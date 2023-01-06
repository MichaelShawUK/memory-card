import Score from "./Score.js";
import Card from "./Card.js";
import players from "../players.js";
import { useState, useEffect } from "react";
import "../css/Main.css";

const getRandomPlayerSet = () => {
  const randomPlayerSet = [];

  while (randomPlayerSet.length < 12) {
    const randomPlayer = Math.floor(Math.random() * players.length);
    if (randomPlayerSet.includes(players[randomPlayer])) continue;
    else randomPlayerSet.push(players[randomPlayer]);
  }

  return randomPlayerSet;
};

const Main = () => {
  const randomPlayerSet = getRandomPlayerSet();
  const [clicked, setClicked] = useState([]);
  const [highestScore, setHighestScore] = useState(0);
  const [isCorrect, setIsCorrect] = useState(null);

  useEffect(() => {
    if (clicked.length > highestScore) {
      setHighestScore(clicked.length);
    }
  }, [clicked, highestScore]);

  const handleClick = (e) => {
    const player = e.target.alt;
    if (clicked.includes(player)) {
      setClicked([]);
      setIsCorrect(false);
    } else {
      setIsCorrect(true);
      setClicked(clicked.concat(player));
    }
  };

  return (
    <div id="main">
      <Score
        currentScore={clicked.length}
        highestScore={highestScore}
        isCorrect={isCorrect}
      />
      <div id="gallery">
        {randomPlayerSet.map((player) => {
          return <Card key={player.id} player={player} onClick={handleClick} />;
        })}
      </div>
    </div>
  );
};

export default Main;
