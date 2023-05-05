import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => (
  <Container>
    <Row>
      <Col>
        <h2 className="text-center text-white text-shadow py-3">TAMAGOTCHI</h2>
        <p>
          A Tamagotchi (たまごっち) is a virtual pet created by Aki Maita and
          marketed by Bandai on November 23, 1996 in Japan. The Tamagotchi is an
          electronic device in the shape and size of an egg, which has a
          pixelated black and white screen, where a virtual pet can be seen.
        </p>
      </Col>
      <Col>
        <h2 className="text-center text-white text-shadow py-3">RPSLS</h2>
        <p>
          Rock Paper Scissors Lizard Spock is a variant of the Rock, Rock Paper
          Scissors, which includes two new options: Lizard and Spock. The game
          is played with two players, each of whom chooses one of the five
          options: rock, paper, scissors, scissors, rock, paper, scissors one of
          five options: rock, paper, scissors, lizard or Spock. The rock crushes
          the scissors and crushes the lizard, the paper covers the rock and
          overrules Spock. the rock and disempowers Spock, the scissors cut the
          paper and decapitate the lizard, the behead the lizard, the lizard
          poisons Spock and eats the paper, and Spock breaks the paper, and
          Spock breaks the scissors and vaporizes the stone. The object of the
          game is to win three rounds. of the game is to win three rounds.
        </p>
      </Col>
    </Row>
  </Container>
);

export default Home;
