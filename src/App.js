import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
import SingleBook from "./components/SingleBook";

function App() {
  return (
    <>
      <header>
        <MyNav></MyNav>
      </header>
      <main>
        <SingleBook></SingleBook>
        <AllTheBooks></AllTheBooks>
        <Welcome subtitle="acquista da noi!"></Welcome>
      </main>
      <MyFooter></MyFooter>
    </>
  );
}

export default App;
