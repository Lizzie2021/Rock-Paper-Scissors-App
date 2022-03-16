import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import pic0 from "../image/pic0.png";
import pic1 from "../image/pic1.png";
import pic2 from "../image/pic2.png";

function App() {
  const [choice, setChoice] = useState("");
  const [computerChoice, setcomputerChoice] = useState();
  const [result, setResult] = useState("");

  function hangdleChange(event) {
    setResult("");
    const { value } = event.target;
    setChoice(value);

    const rand = Math.floor(Math.random() * 3);
    setcomputerChoice(rand);
  }

  function rePlay() {
    setChoice("");
    setcomputerChoice();
    setResult("");
  }
  function handleResult() {
    const yourChoice = Number(choice);
    const diff = yourChoice - computerChoice;
    if (yourChoice === computerChoice) {
      setResult("Draw!");
    } else if (diff === 1 || diff === -2) {
      setResult("You win!");
    } else {
      setResult("You lose!");
    }
  }

  return (
    <div>
      <Header />
      <div className="container">
        <div className="yourChoice">
          <h1>You choose :</h1>
          <div onChange={hangdleChange} className="radio">
            <span>
              <input
                type="radio"
                name="RPS"
                value="0"
                checked={choice === "0"}
              />
              Rock
            </span>
            <span>
              <input
                type="radio"
                name="RPS"
                value="1"
                checked={choice === "1"}
              />
              Paper
            </span>
            <span>
              <input
                type="radio"
                name="RPS"
                value="2"
                checked={choice === "2"}
              />
              Scissors
            </span>
          </div>

          <div>
            {choice === "0" && <img src={pic0} alt="rock-paper-scissors" />}
            {choice === "1" && <img src={pic1} alt="rock-paper-scissors" />}
            {choice === "2" && <img src={pic2} alt="rock-paper-scissors" />}
          </div>
        </div>
        <div className="computerChoice">
          {computerChoice === 0 && (
            <span>
              <h1>Computer choose :</h1>
              <img src={pic0} alt="rock-paper-scissors" />
            </span>
          )}
          {computerChoice === 1 && (
            <span>
              <h1>Computer choose :</h1>
              <img src={pic1} alt="rock-paper-scissors" />
            </span>
          )}
          {computerChoice === 2 && (
            <span>
              <h1>Computer choose :</h1>
              <img src={pic2} alt="rock-paper-scissors" />
            </span>
          )}
        </div>
        <div className="result">
          <button onClick={handleResult}>Result</button>
          <button onClick={rePlay}>Replay</button>
          {choice !== "" && <h1>{result}</h1>}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
