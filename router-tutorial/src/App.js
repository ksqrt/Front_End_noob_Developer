import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
}
