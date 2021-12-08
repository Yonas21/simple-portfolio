import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { routes } from "./constants/routes";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./pages/Header";
import ProjectDetails from "./pages/ProjectDetails";
import Section from "./pages/Section";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={routes.HOME} element={<Section />} />
          <Route path={routes.ABOUT} element={<About />} />
          <Route path={routes.CONTACT} element={<Contact />} />
          <Route path={routes.PROJECT} element={<ProjectDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
