import { Button } from 'react-bootstrap';
import GameForm from '../../components/game/GameForm';
import { useAuth } from '../../utils/context/authContext';

const NewGame = () => {
  const { user } = useAuth();
  return (
    <div>
      <Button
        onClick={() => {
          router.push('/games/new');
        }}
      >
        Register New Game
      </Button>
      <h2>Register New Game</h2>
      <GameForm user={user} />
    </div>
  );
};

export default NewGame;
