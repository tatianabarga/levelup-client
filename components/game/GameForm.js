import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { createGame, getGameTypes } from '../../utils/data/gameData';

const initialState = {
  skillLevel: 1,
  numberOfPlayers: 0,
  title: '',
  maker: '',
  gameTypeId: 0,
};

const GameForm = ({ user }) => {
  const [gameTypes, setGameTypes] = useState([]);
  /*
  Since the input fields are bound to the values of
  the properties of this state variable, you need to
  provide some default values.
  */
  const [currentGame, setCurrentGame] = useState(initialState);
  const router = useRouter();

  useEffect(() => {
    getGameTypes().then(setGameTypes);
  }, []);

  const handleChange = (e) => {
    // Complete the onChange function
    const { name, value } = e.target;
    setCurrentGame((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    // Prevent form from being submitted
    e.preventDefault();

    const game = {
      maker: currentGame.maker,
      title: currentGame.title,
      numberOfPlayers: Number(currentGame.numberOfPlayers),
      gameType: Number(currentGame.gameType),
      skillLevel: Number(currentGame.skillLevel),
      userId: user.uid,
    };

    // Send POST request to your API
    createGame(game).then(console.log(game)).then(() => router.push('/games'));
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FloatingLabel controlId="floatingTextarea" label="title" className="mb-3">
          <Form.Control
            as="textarea"
            placeholder="title"
            name="title"
            value={currentGame.title}
            onChange={handleChange}
            required
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingTextarea" label="maker" className="mb-3">
          <Form.Control
            as="textarea"
            placeholder="maker"
            name="maker"
            value={currentGame.maker}
            onChange={handleChange}
            required
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingTextarea" label="Number Of Players" className="mb-3">
          <Form.Control
            as="textarea"
            placeholder="Number Of Players"
            name="numberOfPlayers"
            value={currentGame.numberOfPlayers}
            onChange={handleChange}
            required
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingTextarea" label="Skill Level" className="mb-3">
          <Form.Control
            as="textarea"
            placeholder="Skill Level"
            name="skillLevel"
            value={currentGame.skillLevel}
            onChange={handleChange}
            required
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingSelect" label="Game Type">
          <Form.Select
            aria-label="Game Type"
            name="gameType"
            onChange={handleChange}
            className="mb-3"
            value={currentGame.gameType}
            required
          >
            <option value="">Select a Game Type</option>
            {
              gameTypes.map((gameTypeOption) => (
                <option
                  key={gameTypeOption.id}
                  value={gameTypeOption.id}
                >
                  {gameTypeOption.label}
                </option>
              ))
            }
          </Form.Select>
        </FloatingLabel>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

GameForm.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string.isRequired,
  }).isRequired,
};

export default GameForm;
