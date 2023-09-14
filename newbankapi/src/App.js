import img from "./img/icon-security.png";
import Menu from "./components/Menu/Menu";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Welcome from "./redux/Welcome";
import RequireAuth from "./redux/RequireAuth";
import Layout from "./components/Layout";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />

        <Route element={<RequireAuth />}>
          <Route path="user" element={<Welcome />} />
        </Route>
      </Route>
    </Routes>
  );
}
