import "../css/Score.css";

const Result = ({ mark, id }) => {
  return (
    <span id={id} className="result">
      {mark}
    </span>
  );
};

const Score = ({ currentScore, highestScore, isCorrect }) => {
  return (
    <div id="score">
      Current Score: {currentScore}
      {isCorrect === null && <span className="result"> </span>}
      {isCorrect !== null &&
        (isCorrect ? (
          <Result id="correct" mark="✔" />
        ) : (
          <Result id="incorrect" mark="✘" />
        ))}
      Highest Score: {highestScore}
    </div>
  );
};

export default Score;
