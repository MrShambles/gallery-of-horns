import React, { useState } from 'react';
import HornedBeast from './HornedBeast';
import data from '../src/assets/data.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function Gallery() {
  const [searchTerm, setSearchTerm] = useState('');
  const [hornFilter, setHornFilter] = useState('All');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleHornFilterChange = (event) => {
    setHornFilter(event.target.value);
  };

  const filteredData = data.filter((beast) => {
    const regex = new RegExp(searchTerm, 'i');
    const filterCondition = hornFilter === 'All' || beast.horns === parseInt(hornFilter);
    return (regex.test(beast.title) || regex.test(beast.keyword)) && filterCondition;
  });

  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Search by title or keyword..."
                onChange={handleSearchChange}
                value={searchTerm}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Filter by number of horns</Form.Label>
              <Form.Select aria-label="Horn filter" onChange={handleHornFilterChange}>
                <option value="All">All</option>
                <option value="1">1 Horn</option>
                <option value="2">2 Horns</option>
                <option value="3">3 Horns</option>
                <option value="100">100 Horns</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
        {filteredData.map((beast) => (
          <Col sm={12} md={6} lg={4} xl={3} key={beast._id} className="mb-4">
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

