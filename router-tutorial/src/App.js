import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Articles from "./pages/Articles";

export default function App() {
  return (
    <div>
      {/* 라투터들 안에 라우터만 넣자.. 앵간하면 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:username" element={<Profile />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<Articles />} />
      </Routes>
      <hr></hr>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <li>
            <Link to="/profiles/velopert">프로파일러 벨로퍼티</Link>
          </li>
          <li>
            <Link to="/profiles/gildong">프로파일러 길동</Link>
          </li>
          <li>
            <Link to="/profiles/void">존재하지 않는 프로파일러</Link>
          </li>
          <li>
            <Link to="/profiles/sunguk">프로파일러 성욱</Link>
          </li>
          <li>
          <Link to="/articles">게시글 목록</Link>
          </li>
        </li>
      </ul>

      <hr></hr>

      <Articles></Articles>
    </div>
  );
}
