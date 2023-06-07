import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/NavBar/NavBar";
import { HomePage } from "./components/HomePage/HomePage";
import { useEffect, useState } from "react";
import { Auth } from "./components/auth/Auth";
import { Register } from "./components/auth/Register/Register";
import { Login } from "./components/auth/Login/Login";
import { ForgotPassword } from "./components/auth/ForgotPassword/ForgotPassword";
import { auth } from "./api/firebase";

function App() {
  const [user, setUser] = useState(null);
  const [isAuth, setAuthState] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthState(true);
        setUser(user);
      } else {
        setAuthState(false);
        setUser(null);
      }
    });
  }, []);

  if (isAuth === null) {
    return <h2>Trwa ładowanie aplikacji...</h2>;
  }

  return (
    <BrowserRouter>
      <Navbar isAuth={isAuth} email={user?.email} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="auth" element={!isAuth ? <Auth /> : <Navigate to="/" />}>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
        </Route>
        <Route
          path="admin"
          element={isAuth ? <HomePage /> : <Navigate to="/auth/log-in" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
