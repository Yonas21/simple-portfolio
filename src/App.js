import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./pages/Header";
import Section from "./pages/Section";

function App() {
  return (
    <div className="App">
      <Header />
      <Section />
    </div>
  );
}

export default App;
