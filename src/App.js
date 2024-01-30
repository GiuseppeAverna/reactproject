import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";

function App() {
  return (
    <>
      <header>
        <MyNav></MyNav>
      </header>
      <main>
        <AllTheBooks></AllTheBooks>
        <Welcome subtitle="acquista da noi!"></Welcome>
      </main>
      <MyFooter></MyFooter>
    </>
  );
}

export default App;
