import { Outlet, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  const goFront = () => {
    navigate("/articles");
  };

  return (
    <div>
      <header style={{ background: "lightgray", padding: 16, fontSize: 24 }}>
        <Link to="/">Home</Link>
        <button onClick={goBack}>이전페이지 이동</button>
        <button onClick={goFront}>articles 이동</button>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
