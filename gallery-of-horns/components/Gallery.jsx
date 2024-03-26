import React from 'react';
import HornedBeast from './HornedBeast';
import data from '../src/assets/data.json'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Gallery() {
  return (
    <Container>
      <Row>
        {data.map((beast) => (
          <Col sm={12} md={6} lg={4} xl={3} key={beast._id}>
            <HornedBeast
              title={beast.title}
              imageUrl={beast.image_url}
              description={beast.description}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Gallery;

