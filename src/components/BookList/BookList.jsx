import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Container, Row, Col, Form } from 'react-bootstrap';
import ebooks from '../../data/book.json';
import './BookList.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function BookList() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEbooks = ebooks.filter((ebook) =>
    ebook.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='booklist'>
      <Container fluid className="container-list">
        <Carousel interval={3000} pause={false} controls={true}>
          <Carousel.Item>
            <Link to="/book-details/2">
              <img className="d-block w-100" src="images/bl1.png" alt="Slide 1" />
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link to="/book-details/3">
              <img className="d-block w-100" src="images/bl2.png" alt="Slide 2" />
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link to="/book-details/1">
              <img className="d-block w-100" src="images/bl3.png" alt="Slide 3" />
            </Link>
          </Carousel.Item>
        </Carousel>

        <Row>
          <Col>
            <div className='search'>
              <h1 className='t-2'>Search Result</h1>
              <Form.Control
                size="lg"
                type="text"
                className="form-control"
                placeholder="Search for books"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </Col>
        </Row>

        <Row>
          {filteredEbooks.map((ebook, index) => (
            <Col key={index} md={4} sm={6}>
              <Link to={`/book-details/${index}`}>
                <div className="book-item">
                  <img src={ebook.imgSrc} alt={ebook.title} className="img-fluid" />
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default BookList;
