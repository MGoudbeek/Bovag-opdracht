import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CarDetail from "./components/CarDetail";
import "./styles/main.scss";

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<CarDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
