import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import GameForm from '../../components/game/GameForm';
import { useAuth } from '../../utils/context/authContext';

const NewEvent = () => {
  const { user } = useAuth();
  const router = useRouter();
  return (
    <div>
      <Button
        onClick={() => {
          router.push('/events/new');
        }}
      >
        Register New Event
      </Button>
      <h2>Register New Event</h2>
      <GameForm user={user} />
    </div>
  );
};

export default NewEvent;
