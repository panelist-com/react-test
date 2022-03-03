import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [aliens, setAliens] = useState(0);
  const [robots, setRobots] = useState(0);
  const [countdown, setCountdown] = useState(60);
  const [zombies, setZombies] = useState(0);

  setTimeout(() => countdown && setCountdown(countdown - 1), 1000);

  const reset = () => {
    setCountdown(60);
    setRobots(0);
    setAliens(0);
  };

  const winner = aliens > robots ? "Aliens" : robots > aliens ? "Robots" : "";
  const gameOver = countdown <= 0;
  let message = gameOver
    ? winner
      ? `${winner} won`
      : `nobody won`
    : (winner ? `${winner} are winning` : "nobody is winning") +
      ` (${countdown} seconds remaining)`;

  return (
    <div className="App">
      <Container fluid>
        <Row justify-content-md-center>
          <Col className="coll-2">
            <h3>{message}</h3>
            <button onClick={reset}>New Game</button>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>{robots} robots</h3>
            <button onClick={() => setRobots(robots + 1)}>Add Robot</button>
          </Col>
          <Col>
            <h3>{aliens} aliens</h3>
            <button onClick={() => setAliens(aliens + 1)}>Add Alien</button>
          </Col>
        </Row>
        <Row>
          <Col md="2"></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
