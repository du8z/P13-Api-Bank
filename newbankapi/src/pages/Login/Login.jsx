import "./Login.css";
import MainLayout from "../../layout/MainLayout";
export default function Login() {
  return (
    <MainLayout>
    <div>
      <body>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
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
      </body>
    </div>
    </MainLayout>
  );
}
