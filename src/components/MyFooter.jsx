import Card from "react-bootstrap/Card";

const MyFooter = () => {
  return (
    <Card>
      <Card.Header>Quote</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p> Footer </p>
          <footer className="blockquote-footer">
            Un bel footer <cite title="Source Title">bruttino</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default MyFooter;
