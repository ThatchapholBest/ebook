import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button, Card } from 'react-bootstrap'; // เพิ่ม Card จาก React-Bootstrap
import ebooks from '../../data/book.json';
import './BookDetails.css';

function BookDetails() {
  const { index } = useParams();
  const ebookIndex = parseInt(index);
  const selectedEbook = ebooks[ebookIndex];

  return (
    <div className='bookdetails'>
      <Container className="book-details">
        <Row>
          <Col md={6}>
            <div className="book-image">
              <img src={process.env.PUBLIC_URL + selectedEbook.imgSrc} alt={selectedEbook.title} />
            </div>
          </Col>
          <Col md={6}>
            <Card className="book-info" bg="light"> {/* ใช้ Card จาก React-Bootstrap */}
              <Card.Body>
                <Card.Title>
                  <h1>{selectedEbook.title}</h1>
                </Card.Title>
                <Card.Text>
                  <strong></strong> {selectedEbook.author}
                  <br />
                  <strong></strong> {selectedEbook.description}
                </Card.Text>
                <div className="ebook-parts">
                  <h3>เนื้อหาหลักใน E-Book เล่มนี้</h3>
                  <ul>
                    {selectedEbook.ebook_parts.map((part, index) => (
                      <li key={index}>{part}</li>
                    ))}
                  </ul>
                </div>
                <Button className="download-link" href={process.env.PUBLIC_URL + selectedEbook.pdfUrl} download variant="primary">
                  Download E-Book
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BookDetails;
