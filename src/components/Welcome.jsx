import Alert from "react-bootstrap/Alert";

const Welcome = (props) => {
  return (
    <Alert variant="success">
      <Alert.Heading>Alert!</Alert.Heading>
      <p>Benvenuto nella sezione acquisti!</p>
      <hr />
      <p className="mb-0">Sottotitolo - {props.subtitle}</p>
    </Alert>
  );
};

export default Welcome;
