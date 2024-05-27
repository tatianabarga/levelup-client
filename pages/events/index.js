import React, { useEffect, useState } from 'react';
import EventCard from '../../components/event/EventCard';
import getEvents from '../../utils/data/eventData';

function Home() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents().then((data) => setEvents(data));
  }, []);

  return (
    <article className="events">
      <h1>Events</h1>
      {events.map((event) => (
        <section key={`event--${event.id}`} className="event">
          <EventCard title={event.title} maker={event.maker} numberOfPlayers={event.number_of_players} skillLevel={event.skill_level} />
        </section>
      ))}
    </article>
  );
}

export default Home;
