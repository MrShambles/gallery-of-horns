import React, { useState } from 'react';
import HornedBeast from './HornedBeast';
import data from '../src/assets/data.json'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function Gallery() {
  const [searchTerm, setSearchTerm] = useState('');

  
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  
  const filteredData = data.filter((beast) => {
    const regex = new RegExp(searchTerm, 'i'); 
    return regex.test(beast.title) || regex.test(beast.keyword); 
  });

  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <Form>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Search by title or keyword..."
                onChange={handleSearchChange}
                value={searchTerm}
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
        {filteredData.length > 0 ? (
          filteredData.map((beast) => (
            <Col sm={12} md={6} lg={4} xl={3} key={beast._id} className="mb-4">
              <HornedBeast
                title={beast.title}
                imageUrl={beast.image_url}
                description={beast.description}
              />
            </Col>
          ))
        ) : (
          <Col>
            <p>No results found.</p>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default Gallery;
