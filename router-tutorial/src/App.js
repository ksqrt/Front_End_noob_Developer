import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* index === path ="/" */}
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:username" element={<Profile />} />
        <Route path="/articles" element={<Articles />}>
          <Route path=":id" element={<Article />} />
        </Route>
      </Route>
      {/* 없는 페이지를 갔을때 발동 ERROR 404 */}
      <Route path="*" element={<NotFound></NotFound>}></Route>
      <Route path="/login" element={<Login />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
