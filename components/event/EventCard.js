import PropTypes from 'prop-types';
import React from 'react';
import { Card } from 'react-bootstrap';

const EventCard = ({
  game,
  description,
  date,
  time,
  organizer,
}) => (
  <Card className="text-center">
    <Card.Header>{game}</Card.Header>
    <Card.Body>
      <Card.Title>By: {organizer}</Card.Title>
      <Card.Text>description: {description}</Card.Text>
    </Card.Body>
    <Card.Footer className="text-muted">date and time: {date}, {time}</Card.Footer>
  </Card>
);

EventCard.propTypes = {
  game: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
  organizer: PropTypes.number.isRequired,
};

export default EventCard;
