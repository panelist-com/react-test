import { useState, useEffect } from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [aliens, setAliens] = useState(0);
  const [robots, setRobots] = useState(0);
  const [countdown, setCountdown] = useState(60);
  // const [zombies, setZombies] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => countdown && setCountdown(countdown - 1), 1000);
    return () => clearTimeout(timeout);
  }, [countdown]);
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
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#robots">Robots</Nav.Link>
            <Nav.Link href="#aliens">Aliens</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container fluid>
        <Row className="justify-content-md-center">
          <Col className="coll-2">
            <h3>{message}</h3>
            <button onClick={reset}>New Game</button>
          </Col>
        </Row>
        {window.location.hash === "#robots" ? (
          <>
            <h3>Robots</h3>
            {Array(robots)
              .fill(null)
              .map(() => (
                <div>🤖</div>
              ))}
          </>
        ) : window.location.hash === "#aliens" ? (
          <>
            <h3>Aliens</h3>
            {Array(aliens)
              .fill(null)
              .map(() => (
                <div>👽</div>
              ))}
          </>
        ) : (
          <>
            <Row>
              <Col>
                <h3>{robots} robots</h3>
                <button onClick={() => {!gameOver && setRobots(robots + 1)}}>Add Robot</button>
              </Col>
              <Col>
                <h3>{aliens} aliens</h3>
                <button onClick={() => {!gameOver && setAliens(aliens + 1)}}>Add Alien</button>
              </Col>
            </Row>
            <Row>
              <Col md="2"></Col>
            </Row>
          </>
        )}
      </Container>
    </div>
  );
}

export default App;
