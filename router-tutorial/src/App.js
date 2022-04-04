import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Profile from "./Profile";

export default function App() {


  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
        <Link to="/profiles/velopert">프로파일러</Link>
        </li>
      </ul>
      <hr></hr>
      {/* 라투터들 안에 라우터만 넣자.. 앵간하면 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:username" component={Profile}></Route>
      </Routes>
      
    </div>
  );
}
