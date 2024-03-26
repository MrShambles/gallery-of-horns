import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function HornedBeast(props) {
  const [favorites, setFavorites] = useState(0);

  const addFavorite = () => {
    setFavorites(favorites + 1);
  };

  return (
    <Card className="h-100 shadow-sm bg-white rounded">
      <Card.Img variant="top" src={props.imageUrl} alt={props.title} style={{ height: '200px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Button variant="primary" onClick={addFavorite}>❤️ {favorites}</Button>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Click heart to favorite</small>
      </Card.Footer>
    </Card>
  );
}

export default HornedBeast;

