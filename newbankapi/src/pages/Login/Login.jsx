import "./Login.css";
import MainLayout from "../../layout/MainLayout";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../redux/authSlice";
import { useLoginMutation } from "../../redux/authApiSlice";
import { useRef, useState, useEffect } from "react";

export default function Login() {
  const userRef = useRef();
  const errRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("oui");
    try {
      const userData = await login({ email, password }).unwrap();
      console.log(userData.body);
      dispatch(setCredentials({ ...userData.body, email }));
      console.log({ ...userData.body, email });
      setEmail("");
      setPassword("");
      console.log("non");
      navigate("/user");
    } catch (err) {}
  };

  const handleUserInput = (e) => setEmail(e.target.value);

  const handlePwdInput = (e) => setPassword(e.target.value);

  return (
    <MainLayout>
      <div id="bodyLogin">
        <main className="main bg-dark">
          <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
              <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  ref={userRef}
                  value={email}
                  onChange={handleUserInput}
                  autoComplete="off"
                  required
                />
              </div>
              <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  onChange={handlePwdInput}
                  value={password}
                  required
                />
              </div>
              <div className="input-remember">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
              </div>
              {/* <a href="./user.html" className="sign-in-button">Sign In</a> */}
              {/* <button className="sign-in-button">Sign In</button> */}
              <button className="sign-in-button">Sign In</button>
            </form>
          </section>
        </main>
        <footer className="footer">
          <p className="footer-text">Copyright 2020 Argent Bank</p>
        </footer>
      </div>
    </MainLayout>
  );
}
