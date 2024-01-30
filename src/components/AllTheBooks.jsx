import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import books from "./data/horror.json";

const AllTheBooks = () => {
  return (
    <Container>
      <Row className="justify-content-center mt-3">
        <Col xs={12} md={8} lg={6}>
          <Carousel style={{ width: "18rem", height: "24rem" }}>
            {books.map((book) => {
              return (
                <Carousel.Item key={book.asin}>
                  <img
                    src={book.img}
                    alt="bookimg"
                    style={{ width: "18rem", height: "24rem" }}
                  />
                  <Carousel.Caption>
                    <h3>{book.title}</h3>
                    <p>{book.category}</p>
                    <span>{book.price}</span>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default AllTheBooks;
