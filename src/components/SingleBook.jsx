import { Component } from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import books from "./data/horror.json";

class SingleBook extends Component {
  state = {
    reservation: {
      name: "",
      image: "",
      selected: "false",
    },
  };

  render() {
    return (
      <Container className="my-3">
        <Row className="justify-content-center">
          <Col xs={12} md={8} l={6}>
            {books.map((book) => {
              return (
                <Card key={book.asin} className="w-25">
                  <Card.Img variant="top" src={book.img} />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>{book.category}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              );
            })}

            <h2 className="text-center">Book</h2>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Titolo </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="titolo del libro"
                  required
                  value={this.state.reservation.name}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <img src="https://www.placebear.com/200/200"></img>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SingleBook;
